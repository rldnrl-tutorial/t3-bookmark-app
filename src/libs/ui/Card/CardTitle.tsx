import React, { ReactNode } from 'react'

type CardTitleProps = {
  children?: ReactNode
}

export default function CardTitle({ children }: CardTitleProps) {
  return <p className="text-lg font-medium">{children}</p>
}
