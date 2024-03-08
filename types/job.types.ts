import z from "zod";

export const jobDataSchema = z.object({
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
    createdAt: z.string().min(1),
    updatedAt: z.null().or(z.string()),
    companyId: z.object({
        _id: z.string().min(1),
        name: z.string().min(1),
    }),
    _id: z.string(),
    __v: z.number(),
    applications : z.array(z.string().optional())
});
export type JobType = z.infer<typeof jobDataSchema>;

export const jobsSchema = z.object({
    message: z.string(),
    data: z.array(jobDataSchema),
    count: z.number(),
    currentPage: z.number(),
    limit: z.number(),
    totalPages: z.number(),
    nextPage: z.null().or(z.number()),
    hasNextPage: z.boolean(),
});
export type JobsType = z.infer<typeof jobsSchema>;

export const jobsDataSchema = z.array(jobDataSchema);
export type JobsDataType = z.infer<typeof jobsDataSchema>;

export const jobByIdSchema = z.object({
    message: z.string().min(1),
    data: jobDataSchema,
});
export type JobByIdType = z.infer<typeof jobByIdSchema>;

export const jobDeleteSchema = z.object({
    id : z.string().min(1)
})

export const CreateJobSchema = z.object({
    "title": z.string().min(1),
    "companyId": z.string().min(1),
    "jobType": z.string().min(1),
    "location": z.string().min(1),
    "description": z.string().min(1),
    "openTo": z.string().min(1),
    "salary": z.string().min(1),
    "status": z.string().min(1),
    "minEducationLevel": z.string().min(1),
    "jobIndustry": z.string().min(1),
    "jobFunction": z.string().min(1),
    "experienceLevel": z.string().min(1),
    "requirements": z.string().min(1),
});
export type CreateJob = z.infer<typeof CreateJobSchema>;

export const EditJobSchema = z.object({
    "jobId" : z.string().min(1),
    "title": z.string().optional(),
    "companyId": z.string().optional(),
    "jobType": z.string().optional(),
    "location": z.string().optional(),
    "description": z.string().optional(),
    "openTo": z.string().optional(),
    "salary": z.string().optional(),
    "status": z.string().optional(),
    "minEducationLevel": z.string().optional(),
    "jobIndustry": z.string().optional(),
    "jobFunction": z.string().optional(),
    "experienceLevel": z.string().optional(),
    "requirements": z.string().optional(),
});
export type EditJob = z.infer<typeof CreateJobSchema>;