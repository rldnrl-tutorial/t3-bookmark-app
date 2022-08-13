import React, { ReactNode } from 'react'

type CardDetailProps = {
  children?: ReactNode
}

export default function CardDescription({ children }: CardDetailProps) {
  return <p className="text-gray-600">{children}</p>
}
