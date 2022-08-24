import Head from 'next/head'
import { List, Show } from 'react-utils-component'

import { trpc } from '../utils/trpc'
import Card from '../libs/ui/Card'

export default function Home() {
  const linkQuery = trpc.useQuery(['link.getLinks'])

  return (
    <div>
      <Head>
        <title>T3 Bookmark App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Show when={linkQuery.isLoading} />

      <div className="container mx-auto max-w-5xl my-20 px-4">
        <ul className="grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 gap-5">
          {linkQuery.data && (
            <List.Map each={linkQuery.data}>
              {(link) => (
                <Card key={link.id}>
                  <Card.Image src={link.imageUrl} />
                  <Card.Body>
                    <Card.Category>{link.category}</Card.Category>
                    <Card.Title>{link.title}</Card.Title>
                    <Card.Description>{link.description}</Card.Description>
                    <Card.Link href={link.url} />
                  </Card.Body>
                </Card>
              )}
            </List.Map>
          )}
        </ul>
      </div>
    </div>
  )
}
