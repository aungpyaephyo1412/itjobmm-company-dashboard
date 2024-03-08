import {fetJob} from "@/actions/job.actions";
import {
    AlertCircle,
    BookOpenText,
    Building,
    Calendar,
    Clock,
    Edit,
    Folder,
    MapPin,
    Trash,
    TrendingUp
} from "lucide-react";
import {Button, Divider} from "@nextui-org/react";
import parse from "html-react-parser";
import {formatDate} from "@/utils";
import Link from "next/link";

const Page = async ({params: {id}}: { params: { id: string } }) => {
    const {data: job} = await fetJob(id)
    return (
        <div>
            <div className="p-5">
                <div className="w-full mb-3">
                    <h1
                        className="hover:underline line-clamp-3 text-xl lg:text-3xl font-bold"
                    >
                        {job.title}
                    </h1>
                </div>
                <div className="space-y-2 mb-7">
                    <div className="grid grid-cols-2">
                        <h4
                            className="hover:underline text-sm text-gray-600 flex items-center gap-x-1 font-bold"
                        >
                            <Building size={19}/> {job.companyId.name}
                        </h4>
                        <div className="flex justify-end items-center gap-x-1 text-gray-950 font-semibold">
                            Salary : {job.salary}
                        </div>
                    </div>
                    <h2 className="text-sm text-gray-600 flex items-center gap-x-1 font-bold">
                        <MapPin size={19}/> {job.location}
                    </h2>
                    <h2 className="text-sm text-gray-600 flex items-center gap-x-1 font-bold">
                        <Calendar size={19}/> {formatDate(job.createdAt)}
                    </h2>
                    <div className="w-full flex gap-x-3 items-center">
                        <div className="flex items-center gap-x-1 text-sm text-gray-600">
                            <Folder size={19}/>{" "}
                            <span className="font-bold">Job Function -</span>{" "}
                            {job.jobFunction}
                        </div>
                        <div className="flex items-center gap-x-1 text-sm text-gray-600">
                            <Clock size={19}/> <span className="font-bold">Job Type -</span>{" "}
                            {job.jobType}
                        </div>
                    </div>
                </div>
                <div className="mb-5">
                    <h1 className="text-lg font-semibold mb-4">Job Description</h1>
                    <div className="prose-quoteless prose">{parse(job.description)}</div>
                </div>
                <Divider/>
                <div className="my-5">
                    <h1 className="text-lg font-semibold mb-4">Open To</h1>
                    <div className="flex items-center gap-x-3">
                        <AlertCircle size={19}/> {job.openTo}
                    </div>
                </div>
                <Divider/>
                <div className="mt-5">
                    <h1 className="text-lg font-semibold mb-4">Job Requirements</h1>
                    <div className="prose-quoteless prose">{parse(job.requirements)}</div>
                </div>
                <div className="space-y-3">
                    <h1 className="text-sm font-bold text-gray-600 flex items-center gap-x-2">
                        <TrendingUp size={19}/> Experience Level : {job.experienceLevel}
                    </h1>
                    <h1 className="text-sm font-bold text-gray-600 flex items-center gap-x-2">
                        <BookOpenText size={19}/> Min Education Level :{" "}
                        {job.minEducationLevel}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Page;