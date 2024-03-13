"use client"
import React from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Chip, Tooltip, user,
} from "@nextui-org/react";
import {companyJob} from "@/types/company.types";
import {Edit, Eye, Loader2, Trash} from "lucide-react";
import Link from "next/link";
import {useAction} from "next-safe-action/hooks";
import {deleteJob} from "@/actions/job.actions";
import {DeleteIcon, EditIcon, EyeIcon} from "lucide-react";

const JobsTable = ({jobs}: { jobs: companyJob[] }) => {
    const {execute,status}= useAction(deleteJob)
    return (
        <>
            <Table className="w-full" aria-label="Example table with custom cells">
                <TableHeader>
                    <TableColumn align="start">Title</TableColumn>
                    <TableColumn align="start">Status</TableColumn>
                    <TableColumn align="center">Applications</TableColumn>
                    <TableColumn align="center">Actions</TableColumn>
                </TableHeader>
                <TableBody items={jobs.sort((a,b)=>+b.createdAt - +a.createdAt)} emptyContent={<div className="text-lg font-semibold">There is no jobs!</div>}>
                    {(item) => (
                        <TableRow key={item._id}>
                            <TableCell align="left">
                                {item.title}
                            </TableCell>
                            <TableCell align="left">
                                <Chip size="sm" color={item.status === "active" ? "success" : "danger"}>{item.status}</Chip>
                            </TableCell>
                            <TableCell align="center">
                                <Link href={`/home/applications/job/${item._id}`} className="hover:underline">
                                    {item.applications.length}
                                </Link>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-4 ">
                                        <Tooltip content="Details">
                                            <Link href={`/home/jobs/${item._id}`}>
                                                <EyeIcon size={20}/>
                                            </Link>
                                        </Tooltip>
                                        <Tooltip content="Edit Job" color="secondary">
                                            <Link href={`/home/jobs/edit/${item._id}`}>
                                                <EditIcon size={19}/>
                                            </Link>
                                        </Tooltip>
                                        <Tooltip
                                            content="Delete Job"
                                            color="danger"
                                        >
                                            <button onClick={() => execute({id: item._id})}>
                                                {status === "executing" ? <Loader2 size={18} className="animate-spin"/> :
                                                    <Trash size={18}/>}
                                            </button>
                                        </Tooltip>
                                </div>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </>
    );
}
export default JobsTable