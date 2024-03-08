import JobCreateForm from "@/components/job-create-form";
import {getSession} from "@/auth";

const Page = async () => {
    const session = await getSession();
    return (
        <div>
            <JobCreateForm companyId={session?.user._id as string}/>
        </div>
    );
};

export default Page;