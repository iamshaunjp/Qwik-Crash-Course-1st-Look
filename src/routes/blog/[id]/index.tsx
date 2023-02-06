import { component$, Resource } from "@builder.io/qwik";
import { useEndpoint } from "@builder.io/qwik-city";
import type { RequestHandler } from '@builder.io/qwik-city';

interface BlogData {
  id: string,
  title: string,
  content: string
}

export const onGet: RequestHandler<BlogData> = async ({ params, response }) => {
  const res = await fetch('http://localhost:3000/blogs/' + params.id)

  if (!res.ok) {
    console.log('redirecting user')
    throw response.redirect('/')
  }

  const data = await res.json()

  return data
}

export default component$(() => {
  const blogData = useEndpoint<BlogData>()

  return (
    <div class="blog">
      <Resource
        value={blogData}
        onPending={() => <div>Loading...</div>}
        onResolved={(blog) => (
          <div>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        )}
      />
    </div>
  )
})