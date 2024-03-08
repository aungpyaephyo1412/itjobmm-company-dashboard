import AuthPage from "@/components/auth-page";
import LoginForm from "@/components/login-form";
import Link from "next/link";

const Page = () => {

    return (
        <AuthPage heading={<h1>Login your company dashboard</h1>} footer={<h4>
            <Link className="text-blue-500 ml-2" href={"/auth/register"}>
            Register your company
        </Link>
        </h4>}>
            <LoginForm/>
        </AuthPage>
    );
};

export default Page;