import { z } from 'zod'

export const linkSchema = z.object({
  title: z.string(),
  url: z.string(),
  imageUrl: z.string(),
  category: z.string(),
  description: z.string(),
})

export type LinkSchema = z.infer<typeof linkSchema>
