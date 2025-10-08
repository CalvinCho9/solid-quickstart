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
          Exploring the intersection of biology, AI, and healthcare — bridging
          research and impact through innovation.
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
            I’m a researcher and strategist passionate about integrating
            neuroscience, AI, and health systems. My work spans AI-based
            diagnostics, data-driven healthcare policy, and community health
            innovation — transforming complex data into actionable insights.
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
              desc="Collaborated with Duke SCOHP to streamline community navigator data systems."
            />
            <ProjectCard
              title="TMS-EEG Diagnostic"
              desc="Designed ML-driven frameworks for chronic pain diagnostics with UCSF Catalyst."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" class="py-20 px-8 bg-slate-800 text-white text-center">
        <div class="max-w-3xl mx-auto space-y-4">
          <h2 class="text-3xl font-semibold">Get in Touch</h2>
          <p>Let’s collaborate on projects at the intersection of science and policy.</p>
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

/* Reusable project card component */
function ProjectCard(props: { title: string; desc: string }) {
  return (
    <div class="bg-white shadow rounded-lg p-6 hover:-translate-y-1 transition transform">
      <h3 class="text-xl font-semibold mb-2">{props.title}</h3>
      <p class="text-slate-600">{props.desc}</p>
    </div>
  );
}
