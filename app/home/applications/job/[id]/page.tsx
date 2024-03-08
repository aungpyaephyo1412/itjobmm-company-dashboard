import {fetApplications} from "@/actions/job.actions";
import ApplicationsTable from "@/components/applications-table";

const Page = async ({params:{id}}:{params:{id:string}}) => {
    const applications = await fetApplications(id)
    return (
        <section>
            <ApplicationsTable applications={applications}/>
        </section>
    );
};

export default Page;