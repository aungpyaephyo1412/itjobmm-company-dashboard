import {fetJob} from "@/actions/job.actions";
import JobEditForm from "@/components/job-edit-form";

const Page =async ({params:{id}}:{params:{id:string}}) => {
    const {data:job} = await fetJob(id)
    return (
        <div>
           <JobEditForm job={job}/>
        </div>
    );
};

export default Page;