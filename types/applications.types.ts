import z from "zod";


export const UserIdSchema = z.object({
    "_id": z.string(),
    "name": z.string(),
    "phone": z.number(),
    "email": z.string(),
    "username": z.string(),
    "role": z.string(),
    "address": z.string(),
    "createdAt": z.string().min(1),
    "updatedAt": z.null().or(z.string()),
    "__v": z.number(),
});
export type UserId = z.infer<typeof UserIdSchema>;

export const JobIdSchema = z.object({
    "_id": z.string(),
    "title": z.string(),
    "jobType": z.string(),
    "location": z.string(),
    "description": z.string(),
    "requirements": z.string(),
    "openTo": z.string(),
    "salary": z.string(),
    "status": z.string(),
    "minEducationLevel": z.string(),
    "jobIndustry": z.string(),
    "jobFunction": z.string(),
    "experienceLevel": z.string(),
    "companyId": z.string(),
    "createdAt": z.string().min(1),
    "updatedAt": z.null().or(z.string()),
    "__v": z.number(),
});
export type JobId = z.infer<typeof JobIdSchema>;

export const DatumSchema = z.object({
    "_id": z.string(),
    "fullName": z.string(),
    "phone": z.number(),
    "email": z.string(),
    "age": z.number(),
    "gender": z.string(),
    "address": z.string(),
    "cover": z.string(),
    "jobId": JobIdSchema,
    "userId": UserIdSchema,
    "createdAt": z.string().min(1),
    "updatedAt": z.null().or(z.string()),
    "__v": z.number(),
});
export type Datum = z.infer<typeof DatumSchema>;

export const ApplicationsFormSchema = z.object({
    "message": z.string(),
    "data": z.array(DatumSchema),
});
export type ApplicationsForm = z.infer<typeof ApplicationsFormSchema>;

export const ApplicationSchema = z.object({
    "name": z.string(),
    "phone": z.number(),
    "email": z.string(),
    "role": z.string(),
    "address": z.string(),
    "__v": z.number(),
});
export type Application = z.infer<typeof ApplicationSchema>;

export const DataSchema = z.object({
    "_id": z.string(),
    "title": z.string(),
    "jobType": z.string(),
    "location": z.string(),
    "description": z.string(),
    "requirements": z.string(),
    "openTo": z.string(),
    "salary": z.string(),
    "status": z.string(),
    "minEducationLevel": z.string(),
    "jobIndustry": z.string(),
    "jobFunction": z.string(),
    "experienceLevel": z.string(),
    "companyId": z.string(),
    "applications": z.array(ApplicationSchema),
    "createdAt": z.coerce.date(),
    "updatedAt": z.null(),
    "__v": z.number(),
});
export type Data = z.infer<typeof DataSchema>;

export const ApplicationsSchema = z.object({
    "message": z.string(),
    "data": DataSchema,
});
export type Applications = z.infer<typeof ApplicationsSchema>;