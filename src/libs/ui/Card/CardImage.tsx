import Image from "next/image";
import React from "react";

type CardImageProps = {
  src: string;
  alt?: string;
};

export default function CardImage(props: CardImageProps) {
  return (
    <div className="w-full h-64 relative rounded">
      <Image
        src={props.src}
        alt={props.alt}
        layout="fill"
        objectFit="cover"
        className="rounded"
      />
    </div>
  );
}
