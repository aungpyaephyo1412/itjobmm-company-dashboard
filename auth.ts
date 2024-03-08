import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {SessionSchema, sessionUserType} from "@/types/auth.types";

const secretKey ="!&#^&!^#!722!@@(!";
const key = new TextEncoder().encode(secretKey);
const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
export async function encrypt(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime(expires)
        .sign(key);
}

export async function decrypt(input: string): Promise<any> {
    const { payload } = await jwtVerify(input, key, {
        algorithms: ["HS256"],
    });
    return payload;
}

export async function signIn(user:sessionUserType) {
    const session = await encrypt({ user, expires });
    // Save the session in a cookie
    cookies().set("next-auth-dashboard", session, { expires, httpOnly: true });
    redirect("/home");
}

export async function logout() {
    // Destroy the session
    cookies().set("next-auth-dashboard", "", { expires: new Date(0) });
}

export async function getSession() {
    const session = cookies().get("next-auth-dashboard")?.value;
    if (!session) return null;
    const res = await decrypt(session);
    const validateFields = SessionSchema.safeParse(res);
    if (!validateFields.success) throw new Error("Fix auth session type");
    return validateFields.data;
}

export async function updateSession(payload: sessionUserType) {
    const session = cookies().get("next-auth-dashboard")?.value;
    if (!session) return;
    // Refresh the session so it doesn't expire
    const parsed = await decrypt(session);
    parsed.expires = expires;
    parsed.user = payload;
    cookies().set({
        name: "next-auth-dashboard",
        value: await encrypt(parsed),
        httpOnly: true,
        expires: parsed.expires,
    });
}