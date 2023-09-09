import GoogleLoginButton from "@/app/components/UI/GoogleLoginButton";
import { authConfig } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Login = async () => {
  const session = await getServerSession(authConfig);
  if (session) {
    return redirect("/");
  }

  return (
    <div className="max-w-screen-sm p-4 px-4 text-center">
      <h1 className="text-4xl font-Rye text-primary">SHOPIO</h1>
      <p className="mt-2 tracking-wide text-gray-600">
        Welcome to Shopio! Login and get started.
      </p>
      <GoogleLoginButton />
    </div>
  );
};

export default Login;
