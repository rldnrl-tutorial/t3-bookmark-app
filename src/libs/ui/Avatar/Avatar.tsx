import Image from 'next/image'
import clsx from 'clsx'

type AvatarProps = {
  src?: string | null
  alt?: string | null
  className?: string
}

export default function Avatar(props: AvatarProps) {
  return (
    <>
      {props.src ? (
        <Image
          className={clsx('rounded-full', props.className)}
          src={props.src}
          alt={props.alt || 'avatar'}
          width={40}
          height={40}
        />
      ) : (
        <div
          className={clsx(
            'overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600',
            props.className
          )}
        >
          <svg
            className="absolute -left-1 w-12 h-12 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      )}
    </>
  )
}
