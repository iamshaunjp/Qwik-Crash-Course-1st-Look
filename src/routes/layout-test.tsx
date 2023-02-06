import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <p>THIS IS THE TEST LAYOUT</p>
        <section class="container">
          <Slot />
        </section>
      </main>
      <footer>
        <p>Copyright 2023 Mario Life.</p>
      </footer>
    </>
  );
});
