import { createRouter } from './context'
import { z } from 'zod'

export const linkRouter = createRouter()
  .query('getLink', {
    input: z.string(),
    async resolve({ input, ctx }) {
      return await ctx.prisma.link.findUnique({
        where: {
          id: input,
        },
      })
    },
  })
  .query('getLinks', {
    async resolve({ ctx }) {
      return await ctx.prisma.link.findMany()
    },
  })
