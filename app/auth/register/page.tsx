import RegisterForm from "@/components/register-form";
import AuthPage from "@/components/auth-page";
import Link from "next/link";

const Page = () => {
    return (
        <AuthPage>
            <h1 className="text-4xl font-semibold mb-5 text-center">Register your company</h1>

            <RegisterForm/>

            <h4>
                <Link className="hover:underline text-blue-500 ml-2" href={"/auth/login"}>
                    Login your company dashboard
                </Link>
            </h4>
        </AuthPage>
    );
};

export default Page;