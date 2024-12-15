import { z } from "zod";

//Env variable
const envSchema = z.object({
    PORT: z.coerce.number().min(2000),
    SESSION_SECRET: z.string(),
    DB_HOST: z.string(),
    DB_PORT: z.coerce.number(),
    DB_USER: z.string(),
    DB_PASSWORD: z.string(),
    DB_NAME: z.string(),
    NODE_ENV: z.enum(["development", "production"]).default("development")
});

const env = envSchema.parse(process.env);

declare global {
    namespace NodeJS {
        interface ProcessEnv extends z.infer<typeof envSchema> {}
    }
}


export default env;
