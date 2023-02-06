import { component$, useStylesScoped$, Slot } from "@builder.io/qwik";
import modalStyles from './modal.css?inline'
import type { PropFunction } from "@builder.io/qwik";

interface ModalProps {
  size: 'sm' | 'lg',
  frosted?: boolean,
  close: PropFunction<() => void>,
}

export default component$((props: ModalProps) => {
  useStylesScoped$(modalStyles)

  return (
    <div class={`modal ${props.size} ${props.frosted && 'frosted'}`}>
      <div class="modal-content">
        <div class="close" onClick$={props.close}>close</div>
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