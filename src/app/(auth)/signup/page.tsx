import AuthForm from "@/components/auth-form";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1 className="mb-5 text-center font-medium text-2xl leading-6">Sign Up</h1>

      <AuthForm type="signUp"/>

      <p className="mt-6 text-sm text-zinc-500">
        Already have an account?{"  "}
        <Link href={"/login"}  className="text-base font-semibold text-blue-400 ">
          Login
        </Link>
      </p>

    </main>
  )
}