import { component$, Slot, useClientEffect$, useSignal, useTask$ } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
  const counter = useSignal(0)
  const tens = useSignal(0)

  // runs on the server
  // then after every change to tracked state
  // use if you want to ren code pre-render on the server
  // use if you want to run code in the browser after state changes
  useTask$(({ track }) => {
    // console.log('useTask -', counter.value)
    track(counter)

    if (counter.value % 2 === 0) {
      console.log('useTask -', counter.value)
    }
    if (counter.value === 10) {
      tens.value++
    }
  })

  // runs on the client only, eagerly
  // also after every change to tracked state
  // use if you need to immediately run code in the browser
  useClientEffect$(({ track }) => {
    track(tens)

    console.log('useClientEffect', tens.value)
    counter.value = 0;
    
    const timer = setInterval(() => counter.value++, 1000)

    // cleanup runs each time function gets fired after first time
    return () => clearInterval(timer)
  })

  return (
    <>
      <main>
        <Header />
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
