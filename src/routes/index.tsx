import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import * as blake3 from 'blake3/browser-async';

blake3.load().then(() => {
  console.log(blake3.hash('hello world'));
});

blake3.load().then(() => {
  console.log(blake3.hash('hello world'));
});

export default component$(() => {
  return (
    <div>
      <h1>
        Blake3-wasm <span class="lightning">⚡️</span>
      </h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
