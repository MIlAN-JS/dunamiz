import z from "zod"
import dotenv from "dotenv"
dotenv.config()


const configSchema = z.object({
    PORT: z.coerce.number().default(3000),
    MONGO_URI: z.string().min(1, "MONGO_URI is required"),
    JWT_SECRET: z.string().default("secret"),
    GOOGLE_CLIENT_ID: z.string().min(1, "GOOGLE_CLIENT_ID is required"),  
    GOOGLE_CLIENT_SECRET: z.string().min(1, "GOOGLE_CLIENT_SECRET is required"),
    GOOGLE_CALLBACK_URL: z.string().min(1, "GOOGLE_CALLBACK_URL is required"),  
})


const config = configSchema.parse(process.env)

export default config;