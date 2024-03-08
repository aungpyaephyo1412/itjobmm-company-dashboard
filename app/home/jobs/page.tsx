import {getCompanyInfoJobs} from "@/actions/job.actions";
import JobsTable from "@/components/jobs-table";
import {Button} from "@nextui-org/react";
import Link from "next/link";
const Page =async () => {
    const jobs = await getCompanyInfoJobs()
    return (
        <section>
            <div className="w-full flex justify-end items-center mb-5">
                <Button color="default" size="sm">
                   <Link href={"/home/jobs/create"} className="w-full h-full flex justify-center items-center"> Create Job</Link>
                </Button>
            </div>
            <JobsTable jobs={jobs}/>
        </section>
    );
};

export default Page;