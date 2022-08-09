import { ReactNode } from 'react'
import CardCategory from './CardCategory'
import CardDetail from './CardDetail'
import CardImage from './CardImage'
import CardTitle from './CardTitle'

type CardProps = {
  children?: ReactNode
}

function Card({ children }: CardProps) {
  return children
}

export default Object.assign(Card, {
  CardImage,
  CardTitle,
  CardDetail,
  CardCategory,
})
