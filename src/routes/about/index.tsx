import { component$, useStyles$ } from "@builder.io/qwik"
import AboutStyles from './about.css?inline'

export default component$(() => {
  useStyles$(AboutStyles)

  return (
    <article>
      <h2>About</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fugiat. Doloremque repellat harum recusandae asperiores corporis aspernatur nesciunt! Nam, ratione tempore? Quod, error fuga maxime consectetur dolorum consequuntur labore numquam.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias nulla dolorem quod magnam tenetur veniam laboriosam qui. Vero voluptatem facilis, quisquam debitis fugiat tenetur repellat iste necessitatibus culpa sit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus illo nesciunt, fuga beatae tenetur, delectus cumque asperiores vitae earum ad et eum officia quo aspernatur cum unde nemo assumenda soluta?</p>
    </article>
  )
})