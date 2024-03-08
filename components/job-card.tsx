import {Edit, MapPin, Trash} from "lucide-react";
import {getSession} from "@/auth";
import Link from "next/link";
import JobCardForm from "@/components/job-card-form";

const JobCard = async ({job}:{job:{_id:string,title:string,location:string}}) => {
    const session = await getSession();

    return (
        <div  key={job._id} className="shadow p-3 rounded space-y-2">
            <Link href={`/home/jobs/${job._id}`}
                className="font-semibold text-blue-500 hover:underline"
            >
                {job.title}
            </Link>
            <p className="text-sm">{session?.user.name}</p>
            <p className="flex items-center gap-x-1">
                <MapPin size={15}/>
                {job.location}
            </p>
            <JobCardForm id={job._id}/>
        </div>
    );
};

export default JobCard;