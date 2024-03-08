"use server"
import { CompanySchema } from "@/types/company.types";
import { getSession } from "@/auth";
import {CreateJobSchema, EditJobSchema, jobByIdSchema, JobByIdType, jobDeleteSchema} from "@/types/job.types";
import {revalidatePath} from "next/cache";
import {action} from "@/utils";
import {ApplicationsSchema} from "@/types/applications.types";
import {redirect} from "next/navigation";
export const getCompanyInfoJobs = async () => {
    const session = await getSession();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/company/${session?.user._id}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${session?.user.jwt}`,
        },
        cache: "no-store",
    });
    if (!res.ok) throw new Error("Server error");
    const validateFields = CompanySchema.safeParse(await res.json());
    if (!validateFields.success) {
        console.log(validateFields.error.flatten().fieldErrors);
        throw new Error("Type error");
    }
    return validateFields.data.data.jobs;
};

export const fetJob = async (id: string): Promise<JobByIdType> => {
    const session = await getSession();

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs/${id}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${session?.user.jwt}`,
        },
        cache: "no-store",
    });
    if (!res.ok) throw new Error("Fetch failed");
    const validateFields = jobByIdSchema.safeParse(await res.json());
    if (!validateFields.success) {
        console.log(validateFields.error.format());
        throw new Error("Fetch type error");
    }
    return validateFields.data;
};

export const deleteJob = action(jobDeleteSchema,async (parsedInput) =>{
    const session = await getSession()
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs/${parsedInput.id}`,{
        method : "DELETE",
        cache:"no-store",
        headers : {
            Authorization: `Bearer ${session?.user.jwt}`,
        }
    })
    if (!res.ok) throw new Error("Server Error")
    revalidatePath("/home/jobs")
})

export const fetApplications = async (id: string) => {
    const session = await getSession();

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs/${id}/applications`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${session?.user.jwt}`,
        },
        cache: "no-store",
    });
    if (!res.ok) throw new Error("Fetch failed");
    const validateFields = ApplicationsSchema.safeParse(await res.json());
    if (!validateFields.success) {
        console.log(validateFields.error.format());
        throw new Error("Fetch type error");
    }
    return validateFields.data.data.applications;
};

export const createJob = action(CreateJobSchema,async (parsedInput)=>{
    const session = await getSession()
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs`,{
        method :"POST",
        cache : "no-store",
        headers : {
            "Content-Type" : "application/json",
            Authorization : `Bearer ${session?.user.jwt}`
        },
        body : JSON.stringify(parsedInput)
    })
    if (!res.ok) throw new Error("Server Error")
    redirect("/home/jobs")
})

export const editJob = action(EditJobSchema,async (parsedInput)=>{
    const session = await getSession()
    const {jobId,...body} = parsedInput
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs/${jobId}`,{
        method :"PUT",
        cache : "no-store",
        headers : {
            "Content-Type" : "application/json",
            Authorization : `Bearer ${session?.user.jwt}`
        },
        body : JSON.stringify(body)
    })
    if (!res.ok) throw new Error("Server Error")
    redirect("/home/jobs")
})
