import { createRouter } from './context'
import { createProtectedRouter } from './protected-router'
import { createLinkSchema, getLinkShema } from '../../schema/link/link.schema'

export const linkRouter = createRouter()
  .query('getLink', {
    input: getLinkShema,
    async resolve({ input, ctx }) {
      return await ctx.prisma.link.findUnique({
        where: {
          id: input.id,
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
  input: createLinkSchema,
  async resolve({ input, ctx }) {
    return await ctx.prisma.link.create({ data: input })
  },
})
