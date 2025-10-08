import { createSignal } from "solid-js";

export default function Home() {
  const [count, setCount] = createSignal(0);

  return (
    <main class="bg-slate-50 text-slate-800 font-sans">
      {/* Hero Section */}
      <section
        id="hero"
        class="min-h-screen flex flex-col justify-center items-center text-center space-y-4 px-6"
      >
        <h1 class="text-5xl font-extrabold">Calvin Cho</h1>
        <p class="text-lg text-slate-600">
          Neuroscience • Policy • Technology
        </p>
        <p class="max-w-xl text-slate-500">
          I explore the intersection of biology, AI, and health systems — turning
          research and innovation into real-world impact.
        </p>

        <a
          href="#projects"
          class="mt-6 inline-block bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition"
        >
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section id="about" class="py-20 px-8 bg-white">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl font-semibold mb-6 border-b pb-2 border-slate-200">
            About Me
          </h2>
          <p class="text-slate-600 leading-relaxed">
            I’m a researcher and strategist passionate about advancing healthcare
            through data science, neuroscience, and policy design. My work spans
            AI-based diagnostics, community health initiatives, and technology
            innovation — integrating quantitative research with social impact.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" class="py-20 px-8 bg-slate-100">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-3xl font-semibold mb-10 text-center">Projects</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="AI-Driven Cell Imaging"
              desc="Automated segmentation pipeline for microscopy analysis using R + Python."
            />
            <ProjectCard
              title="Health Policy Navigator"
              desc="Built with Duke SCOHP to connect patients with local community health navigators."
            />
            <ProjectCard
              title="QuantalX TMS-EEG Diagnostic"
              desc="Collaborated with UCSF Catalyst to design ML-driven diagnostic frameworks."
            />
          </div>
        </div>
      </section>

      {/* Counter Section (fun add-on for interactivity) */}
      <section id="counter" class="py-20 px-8 bg-white text-center">
        <h2 class="text-2xl font-semibold mb-4">Interactive Counter Demo</h2>
        <p class="text-slate-600 mb-6">Proof that SolidJS reactivity works instantly.</p>
        <div class="flex justify-center items-center space-x-3">
          <button
            type="button"
            class="border rounded-lg px-3 py-1 border-slate-800"
            onClick={() => setCount(count() - 1)}
          >
            -
          </button>

          <output class="text-lg font-semibold">Count: {count()}</output>

          <button
            type="button"
            class="border rounded-lg px-3 py-1 border-slate-800"
            onClick={() => setCount(count() + 1)}
          >
            +
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" class="py-20 px-8 bg-slate-800 text-white text-center">
        <div class="max-w-3xl mx-auto space-y-4">
          <h2 class="text-3xl font-semibold">Get in Touch</h2>
          <p>Let’s collaborate or chat about science, design, or innovation.</p>
          <a
            href="mailto:hello@calvincho.com"
            class="inline-block bg-white text-slate-800 px-6 py-2 rounded-lg hover:bg-slate-200 transition"
          >
            Say Hello
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer class="py-6 text-center text-slate-500 text-sm bg-slate-50">
        © {new Date().getFullYear()} Calvin Cho. All rights reserved.
      </footer>
    </main>
  );
}

/* Reusable Project Card Component */
function ProjectCard(props: { title: string; desc: string }) {
  return (
    <div class="bg-white shadow rounded-lg p-6 hover:-translate-y-1 transition transform">
      <h3 class="text-xl font-semibold mb-2">{props.title}</h3>
      <p class="text-slate-600">{props.desc}</p>
    </div>
  );
}
