import { component$, useStyles$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import styles from './header.css?inline';

export default component$(() => {
  useStyles$(styles);

  return (
    <header>
      <nav>
        <img src="/mario_block.jpeg" alt="logo" />
        <h1>Mario Life</h1>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
});
