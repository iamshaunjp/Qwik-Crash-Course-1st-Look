import { component$, Resource } from '@builder.io/qwik';
import type { DocumentHead, RequestHandler } from '@builder.io/qwik-city';
import { useEndpoint, Link } from '@builder.io/qwik-city';
import Card from '~/components/card/card';

interface BlogData {
  id: string,
  title: string,
  content: string
}

export const onGet: RequestHandler<BlogData[]> = async () => {
  console.log('fetching the data') // always on the server

  const res = await fetch('http://localhost:3000/blogs')
  const data = await res.json()

  return data
}

export default component$(() => {
  const blogsData = useEndpoint<BlogData[]>()

  return (
    <div>
      <h1>Okie Dokie!</h1>

      <Resource 
        value={blogsData}
        onPending={() => <div>Loading blogs...</div>}
        onResolved={(blogs) => (
          <div class="blogs">
            {blogs && blogs.map(blog => (
              <Card key={blog.id}>
                <h3 q:slot='title'>{blog.title}</h3>
                <p q:slot="content">{blog.content.slice(0,50)}...</p>
                <Link q:slot="footer" href={"/blog/" + blog.id}>
                  <button>Read more</button>
                </Link>
              </Card>
            ))}
          </div>
        )}
      />

    </div>
  );
});

export const head: DocumentHead = {
  title: 'Mario Life',
  meta: [
    {
      name: 'description',
      content: 'a blog site about everything Super Mario related',
    },
  ]
};
