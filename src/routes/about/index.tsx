import { $, component$, useSignal, useStyles$ } from "@builder.io/qwik"
import AboutStyles from './about.css?inline'
import Modal from "~/components/modal/modal"

export default component$(() => {
  useStyles$(AboutStyles)

  const modalVisible = useSignal(false)

  const closeModal = $(() => {
    modalVisible.value = false
  })

  return (
    <article>
      <h2>About</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fugiat. Doloremque repellat harum recusandae asperiores corporis aspernatur nesciunt! Nam, ratione tempore? Quod, error fuga maxime consectetur dolorum consequuntur labore numquam.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias nulla dolorem quod magnam tenetur veniam laboriosam qui. Vero voluptatem facilis, quisquam debitis fugiat tenetur repellat iste necessitatibus culpa sit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus illo nesciunt, fuga beatae tenetur, delectus cumque asperiores vitae earum ad et eum officia quo aspernatur cum unde nemo assumenda soluta?</p>

      <button onClick$={() => modalVisible.value = true}>Open Modal</button>

      {modalVisible.value && (
        <Modal size="sm" frosted={true} close={closeModal}>
          <div>some modal content</div>
          <div q:slot="content">
            <h3>Great News!!</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aspernatur itaque praesentium quasi aut culpa? Maiores enim repellendus inventore eius alias, impedit sit fugiat laudantium nobis at illum ipsum non.</p>
          </div>
          <div q:slot="footer">
            <button>Sign up now!</button>
          </div>
        </Modal>
      )}
    </article>
  )
})