import { component$, Resource } from '@builder.io/qwik';
import type { DocumentHead, RequestHandler } from '@builder.io/qwik-city';
import { useEndpoint } from '@builder.io/qwik-city';

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
              <div key={blog.id}>
                <h3>{blog.title}</h3>
                <p>{blog.content.slice(0,50)}...</p>
              </div>
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
