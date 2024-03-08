"use client"
import {Button, Input, Spinner} from "@nextui-org/react";
import Tiptap from "@/components/Tiptap";
import {ChangeEvent, FormEvent, useState} from "react";
import {useAction} from "next-safe-action/hooks";
import { editJob} from "@/actions/job.actions";
import {JobType} from "@/types/job.types";

const JobEditForm = ({job}:{job:JobType}) => {
    const [description, setDescription] = useState(job.description)
    const [requirements, setRequirements] = useState(job.requirements)
    const [newJob, setNewJob] = useState({
        "jobId" : job._id,
        "title": job.title,
        "companyId" : job.companyId._id,
        "jobType": job.jobType,
        "location": job.location,
        "openTo": job.openTo,
        "salary": job.salary,
        "status": "active",
        "minEducationLevel":job.minEducationLevel,
        "jobIndustry": job.jobIndustry,
        "jobFunction": job.jobFunction,
        "experienceLevel": job.experienceLevel,
    })
    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setNewJob(prevState => ({...prevState,[e.target.name] : e.target.value}))
    }
    const {execute,status,result:{validationErrors,serverError}} = useAction(editJob)
    const onSubmit = (e:FormEvent)=>{
        e.preventDefault()
        execute({...newJob,description : description,requirements:requirements})
    }
    return (
        <form className="space-y-5" onSubmit={onSubmit}>
            <Input defaultValue={newJob.title} isRequired name="title" onChange={handleChange} label="Title"
                   isInvalid={!!validationErrors?.title}
                   errorMessage={validationErrors?.title?.[0]}
            />
            <div className="grid grid-cols-2 gap-5">
                <Input defaultValue={newJob.jobType} isRequired name="jobType" onChange={handleChange} label="Type"
                       isInvalid={!!validationErrors?.jobType}
                       errorMessage={validationErrors?.jobType?.[0]}
                />
                <Input defaultValue={newJob.location} isRequired name="location" onChange={handleChange} label="Location"
                       isInvalid={!!validationErrors?.location}
                       errorMessage={validationErrors?.location?.[0]}
                />
            </div>
            <div className="grid grid-cols-2 gap-5">
                <Input defaultValue={newJob.openTo} isRequired name="openTo" onChange={handleChange} label="Open To"
                       isInvalid={!!validationErrors?.openTo}
                       errorMessage={validationErrors?.openTo?.[0]}
                />
                <Input defaultValue={newJob.salary} isRequired name="salary" onChange={handleChange} label="Salary"
                       isInvalid={!!validationErrors?.salary}
                       errorMessage={validationErrors?.salary?.[0]}
                />
            </div>
            <div className="grid grid-cols-2 gap-5">
                <Input defaultValue={newJob.minEducationLevel} isRequired name="minEducationLevel" onChange={handleChange} label="Min Education Level"
                       isInvalid={!!validationErrors?.minEducationLevel}
                       errorMessage={validationErrors?.minEducationLevel?.[0]}
                />
                <Input defaultValue={newJob.jobIndustry} isRequired name="jobIndustry" onChange={handleChange} label="Industry"
                       isInvalid={!!validationErrors?.jobIndustry}
                       errorMessage={validationErrors?.jobIndustry?.[0]}
                />
            </div>
            <div className="grid grid-cols-2 gap-5">
                <Input defaultValue={newJob.jobFunction} isRequired name="jobFunction" onChange={handleChange} label="Job Function"
                       isInvalid={!!validationErrors?.jobFunction}
                       errorMessage={validationErrors?.jobFunction?.[0]}
                />
                <Input defaultValue={newJob.experienceLevel} isRequired name="experienceLevel" onChange={handleChange} label="Experience Level"
                       isInvalid={!!validationErrors?.experienceLevel}
                       errorMessage={validationErrors?.experienceLevel?.[0]}
                />
            </div>
            <div className="space-y-3">
                <label className="text-lg font-semibold">Description</label>
                <Tiptap onChange={setDescription} initialContent={description}/>
            </div>
            <div className="space-y-3">
                <label className="text-lg font-semibold">Requirements</label>
                <Tiptap onChange={setRequirements} initialContent={requirements}/>
            </div>
            <Button type={"submit"} fullWidth color={"success"}>
                {status === "executing" ? <Spinner size="sm"/> : "Update" }
            </Button>
        </form>
    );
};

export default JobEditForm;