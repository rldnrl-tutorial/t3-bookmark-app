// src/server/router/index.ts
import { createRouter } from './context'
import superjson from 'superjson'
import { linkRouter, protectedLinkRouter } from './link.router'

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('link.', linkRouter)
  .merge('protected-link.', protectedLinkRouter)

// export type definition of API
export type AppRouter = typeof appRouter
