import { z } from 'zod'

export const createLinkSchema = z.object({
  title: z.string(),
  url: z.string(),
  imageUrl: z.string(),
  category: z.string(),
  description: z.string(),
})

export const getLinkShema = z.object({
  id: z.string(),
})

export type CreateLinkSchema = z.infer<typeof createLinkSchema>

export type GetLinkShema = z.infer<typeof getLinkShema>
