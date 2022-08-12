import { createRouter } from './context'
import { z } from 'zod'
import { createProtectedRouter } from './protected-router'
import { linkSchema } from '../../schema/link/link.schema'

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

export const protectedLinkRouter = createProtectedRouter().mutation('create', {
  input: linkSchema,
  async resolve({ input, ctx }) {
    return await ctx.prisma.link.create({ data: input })
  },
})
