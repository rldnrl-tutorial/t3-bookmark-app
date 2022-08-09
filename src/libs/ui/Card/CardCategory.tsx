import React, { ReactNode } from 'react'

type CardCategoryProps = {
  children?: ReactNode
}

export default function CardCategory({ children }: CardCategoryProps) {
  return <p className="text-sm text-blue-500">{children}</p>
}
