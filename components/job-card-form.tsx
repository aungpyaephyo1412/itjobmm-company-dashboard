"use client"
import {Button, Spinner} from "@nextui-org/react";
import Link from "next/link";
import {Edit, Trash} from "lucide-react";
import {useAction} from "next-safe-action/hooks";
import {deleteJob} from "@/actions/job.actions";

const JobCardForm = ({id}:{id:string}) => {
    const {execute,status} = useAction(deleteJob)
    return (
        <div className="space-x-3">
            <Button size="sm">
                <Link href={`/home/jobs/edit/${id}`}
                      className="flex justify-center items-center gap-x-2">Edit <Edit size={16}/> </Link>
            </Button>
            <Button onClick={() => execute({id: id})} size="sm" color="danger">
                {status === "executing" ? <Spinner size={"sm"}/> : <>Delete <Trash size={16}/></>}
            </Button>
        </div>
    );
};

export default JobCardForm;