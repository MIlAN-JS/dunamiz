import z from "zod"
import dotenv from "dotenv"
dotenv.config()


const configSchema = z.object({
    PORT: z.coerce.number().default(3000),
    MONGO_URI: z.string().min(1, "MONGO_URI is required"),
    JWT_SECRET: z.string().default("secret"),
})


const config = configSchema.parse(process.env)

export default config;