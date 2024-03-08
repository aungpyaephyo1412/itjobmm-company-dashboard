"use server"

import {action} from "@/utils";
import {companyRegisterFormSchema, loginUserFormSchema, userLoginSchema} from "@/types/auth.types";
import {redirect} from "next/navigation";
import {logout, signIn} from "@/auth";

export const register = action(companyRegisterFormSchema,async (parsedInput)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/company/register`,{
        method:"POST",
        headers : {
            "Content-Type":"application/json"
        },
        body : JSON.stringify(parsedInput),
        cache : "no-store"
    })
    if (!res.ok) throw new Error("Server Error")
    await login({password:parsedInput.password,identifier:parsedInput.email})
})

export const login = action(loginUserFormSchema, async (parsedInput) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/company/login`, {
        method: "POST",
        cache: "no-store",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(parsedInput),
    });
    if (!res.ok) throw new Error("Something went wrong!");
    const validateFields = userLoginSchema.safeParse(await res.json())
    if (!validateFields.success){
        console.log(validateFields.error.flatten().fieldErrors)
        throw new Error("Type Error")
    }
    const { data:{__v,...bodyData}, jwt } = validateFields.data;
    await signIn({
        ...bodyData,
        jwt: jwt
    });
});

export const signOut = async () => {
    await logout();
    redirect("/auth/login");
};