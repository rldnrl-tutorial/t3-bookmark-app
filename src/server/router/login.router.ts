import { createRouter } from './context'
import { loginSchema } from '../../schema/auth/login.schema'

export const loginRouter = createRouter().mutation('createUser', {
  input: loginSchema,
  async resolve({ input, ctx }) {
    return await ctx.prisma.user.create({
      data: input,
    })
  },
})
