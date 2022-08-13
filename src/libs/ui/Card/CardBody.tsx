import { ReactNode } from 'react'

type CardMainProps = {
  children?: ReactNode
}

export default function CardBody({ children }: CardMainProps) {
  return <div className="p-5 flex flex-col space-y-2">{children}</div>
}
