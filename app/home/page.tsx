import {getSession} from "@/auth";
import {Avatar, Divider} from "@nextui-org/react";
import {MapPin} from "lucide-react";
import parse from "html-react-parser"
import SignOut from "@/components/sign-out";

const Page = async () => {
    const session = await getSession()
    return (
        <section className="py-5">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center screen-padding mb-7">
                <div className="flex flex-wrap items-center gap-5">
                    <Avatar
                        isBordered
                        name={session?.user.name.substring(0, 3)}
                        className=" relative w-[100px] h-[100px] lg:w-[130px] lg:h-[130px] bg-cyan-900 text-white rounded shrink-0 overflow-hidden text-lg lg:text-4xl font-extrabold"
                    />
                    <div className="space-y-2">
                        <h1 className="font-semibold text-2xl">{session?.user.name}</h1>
                        <p className="flex items-center gap-x-1 text-sm">
                            <MapPin size={15}/> {session?.user.address}
                        </p>
                    </div>
                </div>
                <SignOut/>
            </div>
            <div className="max-w-screen-xl mx-auto screen-padding">
                <div className="flex w-full flex-col">
                    <div className="space-y-5">
                        <div className="w-full space-y-3">
                            <h1 className="text-xl font-bold">ကျွန်ုပ်တို့အကြောင်း</h1>
                            <div className="prose-quoteless prose">
                                <ul>
                                    <li>
                                        <span className="font-semibold">Type :</span> {session?.user.type}
                                    </li>
                                    <li>
                                        <span className="font-semibold">Industry :</span>{" "}
                                        {session?.user.Industry}
                                    </li>
                                    <li>
                                        <span className="font-semibold">No.Employees :</span>{" "}
                                        {session?.user.noOfEmployees}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Divider/>
                        <div className="w-full space-y-3">
                            <h1 className="text-xl font-bold">ကျွန်တော်တို့ ဘာတွေလုပ်သလဲ</h1>
                            <div className="prose-quoteless prose">{parse(session?.user.whatTheyDo || "")}</div>
                        </div>
                        <Divider/>
                        <div className="w-full space-y-3">
                            <h1 className="text-xl font-bold">Description</h1>
                            <div className="prose-quoteless prose">{parse(session?.user.description || "")}</div>
                        </div>
                        <Divider/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;