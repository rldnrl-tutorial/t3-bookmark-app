// src/server/router/context.ts
import * as trpc from '@trpc/server'
import * as trpcNext from '@trpc/server/adapters/next'
import { prisma } from '../db/client'
import { getSession } from '@auth0/nextjs-auth0'

export const createContext = (opts: trpcNext.CreateNextContextOptions) => {
  const req = opts.req
  const res = opts.res

  const session = getSession(req, res)

  if (!session) return { req, res, prisma }

  const { user, accessToken } = session

  return {
    req,
    res,
    user,
    accessToken,
    prisma,
  }
}

type Context = trpc.inferAsyncReturnType<typeof createContext>

export const createRouter = () => trpc.router<Context>()
