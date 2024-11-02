
import AuthForm from "@/components/auth-form";
import Link from "next/link";

export default function Page() {
  return (
    <main className="border py-5 px-9 rounded-md border-primary">
      <h1 className="mb-5 text-center font-medium text-2xl leading-6">Log In</h1>

      <AuthForm type="logIn"/>

      <p className="mt-6 text-sm text-zinc-500">
        Don't have an account?{"  "}
        <Link href={"/signup"}  className="text-base font-semibold text-blue-400 ">
          SignUp
        </Link>
      </p>

    </main>
  )
}