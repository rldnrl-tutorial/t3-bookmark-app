import * as trpc from '@trpc/server'
import { createRouter } from './context'

export const createProtectedRouter = () =>
  createRouter().middleware(({ ctx, next }) => {
    if (!ctx.session || !ctx.session.user) {
      throw new trpc.TRPCError({ code: 'UNAUTHORIZED' })
    }

    return next({
      ctx: {
        ...ctx,
        session: { ...ctx.session, user: ctx.session.user },
      },
    })
  })
