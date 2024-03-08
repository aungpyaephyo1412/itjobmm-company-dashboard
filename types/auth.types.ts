import * as z from "zod";

export const loginUserFormSchema = z.object({
    identifier: z.string().min(1),
    password: z.string().min(6),
});
export const companyRegisterFormSchema = z.object({
    "name": z.string().min(1),
    "phone": z.number().min(1),
    "email": z.string().email().min(1),
    "username": z.string().min(1),
    "type": z.string().min(1),
    "Industry": z.string().min(1),
    "noOfEmployees": z.string().min(1),
    "description": z.string().min(1),
    "whatTheyDo": z.string().min(1),
    "address": z.string().min(1),
    "password" : z.string().min(1)
})
export const userDataSchema = z.object({
    "_id": z.string(),
    "name": z.string(),
    "phone": z.number(),
    "email": z.string(),
    "username": z.string(),
    "type": z.string(),
    "Industry": z.string(),
    "noOfEmployees": z.string(),
    "description": z.string(),
    "whatTheyDo": z.string(),
    "address": z.string(),
    "createdAt": z.string(),
    "updatedAt": z.null().or(z.string()),
    "__v": z.number(),
});
export type userDataType = z.infer<typeof userDataSchema>;

export const userLoginSchema = z.object({
    "data": userDataSchema,
    "jwt": z.string(),
});
export type userLoginType = z.infer<typeof userLoginSchema>;
export const sessionUseSchema = z.object({
    "_id": z.string(),
    "name": z.string(),
    "phone": z.number(),
    "email": z.string(),
    "username": z.string(),
    "type": z.string(),
    "Industry": z.string(),
    "noOfEmployees": z.string(),
    "description": z.string(),
    "whatTheyDo": z.string(),
    "address": z.string(),
    "createdAt": z.string(),
    "updatedAt": z.null().or(z.string()),
    "jwt" : z.string()
})
export type sessionUserType = z.infer<typeof sessionUseSchema>


export const SessionSchema = z.object({
    user: sessionUseSchema,
    expires: z.coerce.date(),
    iat: z.number(),
    exp: z.number(),
});
export type SessionType = z.infer<typeof SessionSchema>;