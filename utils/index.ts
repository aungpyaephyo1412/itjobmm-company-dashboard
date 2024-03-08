import {createSafeActionClient} from "next-safe-action";
import dayjs from "dayjs";

export const action = createSafeActionClient()

export const formatDate = (date:string)=>{
    return dayjs(date).format("MMMM D, YYYY");
}