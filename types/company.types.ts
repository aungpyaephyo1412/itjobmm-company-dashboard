import z from "zod";

export const companyJobSchema = z.object({
    _id: z.string(),
    title: z.string(),
    jobType: z.string(),
    location: z.string(),
    description: z.string(),
    requirements: z.string(),
    openTo: z.string(),
    salary: z.string(),
    status: z.string(),
    minEducationLevel: z.string(),
    jobIndustry: z.string(),
    jobFunction: z.string(),
    experienceLevel: z.string(),
    companyId: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.null(),
    applications : z.array(z.string().optional()),
    __v: z.number(),
});
export type companyJob = z.infer<typeof companyJobSchema>;

export const companyDataSchema = z.object({
    _id: z.string(),
    name: z.string(),
    phone: z.number(),
    email: z.string(),
    username: z.string(),
    type: z.string(),
    Industry: z.string(),
    noOfEmployees: z.string(),
    description: z.string(),
    whatTheyDo: z.string(),
    address: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.null(),
    __v: z.number(),
    jobs: z.array(companyJobSchema),
});
export type companyData = z.infer<typeof companyDataSchema>;

export const CompanySchema = z.object({
    message: z.string(),
    data: companyDataSchema,
});
export type Company = z.infer<typeof CompanySchema>;