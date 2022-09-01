import { createRouter } from './context'
import { getLinkShema } from '../../schema/link/link.schema'
import { signinSchema } from '../../schema/auth/signin.schema'

export const signinRouter = createRouter().query('signin', {
  input: signinSchema,
  async resolve({ input, ctx }) {
    return await ctx.prisma.user.create({
      data: input,
    })
  },
})
