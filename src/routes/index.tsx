import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <h1>Okie Dokie!</h1>
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
  ],
  links: [
    {
      rel: 'stylesheet',
      href: 'somestylesheet.com/styles.css'
    }
  ]
};
