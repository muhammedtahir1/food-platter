import { z } from "zod";
 
export const signUpFormSchema = z
  .object({
    // id: z.number(),
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
 
export const signInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});