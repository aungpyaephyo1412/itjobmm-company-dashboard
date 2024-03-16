import AuthPage from "@/components/auth-page";
import LoginForm from "@/components/login-form";
import Link from "next/link";

const Page = () => {

    return (
        <AuthPage>
            <h1 className="text-4xl font-semibold mb-5 text-center">Login your company dashboard</h1>

            <LoginForm/>

            <h4>
                <Link className="hover:underline text-blue-500 ml-2" href={"/auth/register"}>
                    Register your company
                </Link>
            </h4>
        </AuthPage>
    );
};

export default Page;