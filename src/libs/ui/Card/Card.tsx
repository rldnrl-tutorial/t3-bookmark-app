import { ReactNode } from 'react'
import CardCategory from './CardCategory'
import CardDescription from './CardDescription'
import CardImage from './CardImage'
import CardTitle from './CardTitle'
import CardBody from './CardBody'
import CardLink from './CardLink'

type CardProps = {
  children?: ReactNode
}

function Card({ children }: CardProps) {
  return <li className="shadow rounded">{children}</li>
}

export default Object.assign(Card, {
  Image: CardImage,
  Body: CardBody,
  Title: CardTitle,
  Description: CardDescription,
  Category: CardCategory,
  Link: CardLink,
})
