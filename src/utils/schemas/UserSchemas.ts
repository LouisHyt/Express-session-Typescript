import { z } from "zod"

export const userRegisterSchema = z.object({
    username: 
    z.string()
        .min(3, "The username must be between 3 and 20 characters")
        .max(20, "The username must be between 3 and 20 characters")
        .regex(new RegExp(`/[!@#$%^&*()_+\-=\[\]{};':"\\|,\`.<>\/?]+/`), "The username cannot contains special characters")
        .nonempty("The username cannot be empty"),
    email: 
        z.string()
        .email("The email is not valid")
        .nonempty("The email can't be empty"),
    password: 
        z.string()
        .min(14, "The password must be between 14 and 20 characters")
        .max(20, "The password must be between 14 and 20 characters")
        .nonempty("The password cannot be empty"),
    confirmPassword: 
        z.string()
        .nonempty("The confirm password cannot be empty")
})
.refine((data) => data.password === data.confirmPassword, {
    message: "The passwords don't match",
    path: ["confirmPassword"]
})
.transform((data) => {
    return {
        username: data.username,
        email: data.email,
        password: data.password
    }
})