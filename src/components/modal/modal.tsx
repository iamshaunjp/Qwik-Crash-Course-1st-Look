import { component$, useStylesScoped$, Slot } from "@builder.io/qwik";
import modalStyles from './modal.css?inline'

export default component$(() => {
  useStylesScoped$(modalStyles)

  return (
    <div class="modal">
      <div class="modal-content">
        <div class="close">close</div>
        {/* <Slot /> */}
        <main class="main-content">
          <Slot name="content" />
        </main>
        <footer>
          <Slot name="footer" />
        </footer>
      </div>
    </div>
  )
})