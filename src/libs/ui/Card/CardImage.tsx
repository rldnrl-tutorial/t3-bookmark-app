import React from 'react'

type CardImageProps = {
  src: string
  alt?: string
}

export default function CardImage({ src, alt }: CardImageProps) {
  return <img src={src} alt={alt} className="w-full rounded" />
}
