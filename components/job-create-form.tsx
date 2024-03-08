"use client"
import {Button, Input, Spinner} from "@nextui-org/react";
import Tiptap from "@/components/Tiptap";
import {ChangeEvent, FormEvent, useState} from "react";
import {useAction} from "next-safe-action/hooks";
import {createJob} from "@/actions/job.actions";

const JobCreateForm = ({companyId}:{companyId:string}) => {
    const [description, setDescription] = useState("")
    const [requirements, setRequirements] = useState("")
    const [newJob, setNewJob] = useState({
        "title": "",
        "companyId" : companyId,
        "jobType": "",
        "location": "",
        "openTo": "",
        "salary": "",
        "status": "active",
        "minEducationLevel": "",
        "jobIndustry": "",
        "jobFunction": "",
        "experienceLevel": "",
    })
    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setNewJob(prevState => ({...prevState,[e.target.name] : e.target.value}))
    }
    const {execute,status,result:{validationErrors,serverError}} = useAction(createJob)
    const onSubmit = (e:FormEvent)=>{
        e.preventDefault()
        execute({...newJob,description : description,requirements:requirements})
    }
    return (
        <form className="space-y-5" onSubmit={onSubmit}>
            <Input isRequired name="title" onChange={handleChange} label="Title"
            isInvalid={!!validationErrors?.title}
                   errorMessage={validationErrors?.title?.[0]}
            />
            <div className="grid grid-cols-2 gap-5">
                <Input isRequired name="jobType" onChange={handleChange} label="Type"
                       isInvalid={!!validationErrors?.jobType}
                       errorMessage={validationErrors?.jobType?.[0]}
                />
                <Input isRequired name="location" onChange={handleChange} label="Location"
                       isInvalid={!!validationErrors?.location}
                       errorMessage={validationErrors?.location?.[0]}
                />
            </div>
            <div className="grid grid-cols-2 gap-5">
                <Input isRequired name="openTo" onChange={handleChange} label="Open To"
                 isInvalid={!!validationErrors?.openTo}
                   errorMessage={validationErrors?.openTo?.[0]}
                />
                <Input isRequired name="salary" onChange={handleChange} label="Salary"
                 isInvalid={!!validationErrors?.salary}
                   errorMessage={validationErrors?.salary?.[0]}
                />
            </div>
            <div className="grid grid-cols-2 gap-5">
                <Input isRequired name="minEducationLevel" onChange={handleChange} label="Min Education Level"
                 isInvalid={!!validationErrors?.minEducationLevel}
                   errorMessage={validationErrors?.minEducationLevel?.[0]}
                />
                <Input isRequired name="jobIndustry" onChange={handleChange} label="Industry"
                 isInvalid={!!validationErrors?.jobIndustry}
                   errorMessage={validationErrors?.jobIndustry?.[0]}
                />
            </div>
            <div className="grid grid-cols-2 gap-5">
                <Input isRequired name="jobFunction" onChange={handleChange} label="Job Function"
                 isInvalid={!!validationErrors?.jobFunction}
                   errorMessage={validationErrors?.jobFunction?.[0]}
                />
                <Input isRequired name="experienceLevel" onChange={handleChange} label="Experience Level"
                 isInvalid={!!validationErrors?.experienceLevel}
                   errorMessage={validationErrors?.experienceLevel?.[0]}
                />
            </div>
            <div className="space-y-3">
                <label className="text-lg font-semibold">Description</label>
                <Tiptap onChange={setDescription}/>
            </div>
            <div className="space-y-3">
                <label className="text-lg font-semibold">Requirements</label>
                <Tiptap onChange={setRequirements}/>
            </div>
            <Button type={"submit"} fullWidth color={"success"}>
                {status === "executing" ? <Spinner size="sm"/> : "Create" }
            </Button>
        </form>
    );
};

export default JobCreateForm;