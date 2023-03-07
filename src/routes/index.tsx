import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import * as blake3 from 'blake3/browser-async';

// blake3.load().then(() => {
//   console.log(blake3.hash('hello world'));
// });


export default component$(() => {
  return (
    <div>
      <h1>
        Blake3-wasm <span class="lightning">⚡️</span>
      </h1>

      <button onClick$={async () => {
        // const test = await blake3.default('hello world')
        // console.log(test)
        const hash = await blake3.load()
        const valueToHash = 'hello world';

        // hash the value using blake3
        const result = hash(valueToHash);
        console.log(result)
      }
      }>do some blake3 stuff</button>
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
