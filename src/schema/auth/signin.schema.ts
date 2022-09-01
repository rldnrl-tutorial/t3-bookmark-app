import { z } from 'zod'

export const signinSchema = z.object({
  username: z.string(),
  password: z.string(),
})

export type SigninSchema = z.infer<typeof signinSchema>
