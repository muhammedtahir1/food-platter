// import AuthForm from "@/components/auth-form";
// import Link from "next/link";

// export default function Page() {
//   return (
//     <main>
//       <h1 className="mb-5 text-center font-medium text-2xl leading-6">Sign Up</h1>

//       <AuthForm type="signUp"/>

//       <p className="mt-6 text-sm text-zinc-500">
//         Already have an account?{"  "}
//         <Link href={"/login"}  className="text-base font-semibold text-blue-400 ">
//           Login
//         </Link>
//       </p>

//     </main>
//   )
// }


"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signUpFormSchema } from "@/types/index";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signUpAction } from "@/actions/auth.action";
 
const SignUpForm = () => {
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const router = useRouter();
 
  const onSubmit = async (values: z.infer<typeof signUpFormSchema>) => {
    console.log(values);
    const res = await signUpAction(values);
    if (res.success) {
      toast.success(res.data);
      router.push("/login");
    } else {
      toast.error(res.error);
    }
  };
 
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center space-y-3"
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter your email" {...field} />
              </FormControl>
 
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
 
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="confirmPassword"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
 
              <FormMessage />
            </FormItem>
          )}
        />
        <Button>Register</Button>
        <Link className="text-sm mt-5 text-blue-600" href="/login">
          Already have an account?
        </Link>
      </form>
    </Form>
  );
};
 
export default SignUpForm;