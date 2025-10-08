import { createSignal } from "solid-js";

export default function Home() {
  const [count, setCount] = createSignal(0);

  return (
    <section class="bg-slate-200 text-slate-700 p-8 rounded-md">
      <h2 class="text-2xl font-bold mb-2">Welcome to Calvin’s Portfolio</h2>
      <p class="mt-2">This is the home page.</p>

      <div class="flex items-center space-x-2 mt-4">
        <button
          type="button"
          class="border rounded-lg px-2 border-slate-900"
          onClick={() => setCount(count() - 1)}
        >
          -
        </button>

        <output class="p-2 text-lg">Count: {count()}</output>

        <button
          type="button"
          class="border rounded-lg px-2 border-slate-900"
          onClick={() => setCount(count() + 1)}
        >
          +
        </button>
      </div>

      <p class="mt-6 text-slate-600">🔥 Site Updated Successfully</p>
    </section>
  );
}
