// src/server/router/index.ts
import { createRouter } from './context'
import superjson from 'superjson'
import { linkRouter, protectedLinkRouter } from './link.router'
import { loginRouter } from './login.router'

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('link.', linkRouter)
  .merge('protected-link.', protectedLinkRouter)
  .merge('login.', loginRouter)

// export type definition of API
export type AppRouter = typeof appRouter
