import * as trpc from '@trpc/server'
import { createRouter } from './context'

export const createProtectedRouter = () =>
  createRouter().middleware(({ ctx, next }) => {
    if (!ctx.accessToken || !ctx.user) {
      throw new trpc.TRPCError({ code: 'UNAUTHORIZED' })
    }

    const { accessToken, user } = ctx

    return next({
      ctx: {
        ...ctx,
        accessToken,
        user,
      },
    })
  })
