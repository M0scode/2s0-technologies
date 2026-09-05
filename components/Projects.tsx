const projects = [
  {
    category: "Data & Analytics",
    title: "Business Intelligence Dashboard",
    description:
      "An interactive Power BI solution that transforms business data into clear performance insights, customer analytics and decision-making tools.",
    tags: ["Power BI", "Data Analytics", "Business Intelligence"],
  },
  {
    category: "AI & Machine Learning",
    title: "Skills Matching Platform",
    description:
      "A technology solution designed to connect people with relevant opportunities by using data-driven skills matching and intelligent recommendations.",
    tags: ["Python", "FastAPI", "Machine Learning"],
  },
  {
    category: "AI & EdTech",
    title: "Curriculum Translator",
    description:
      "An AI-powered translation platform designed to make educational content more accessible by translating curriculum material into local languages.",
    tags: ["AI", "NLP", "Translation"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0B1220] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Featured Work
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Technology in Action.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              From data platforms to AI-powered solutions, we build
              technology that addresses real challenges and creates
              measurable opportunities.
            </p>
          </div>

          <div className="text-sm font-semibold text-blue-400">
            More projects coming soon →
          </div>
        </div>

        {/* Project cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.05]"
            >
              {/* Project visual */}
              <div className="relative h-52 overflow-hidden border-b border-white/10 bg-gradient-to-br from-blue-950/80 to-slate-900">

                {/* Decorative grid */}
                <div className="absolute inset-0 opacity-30">
                  <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:32px_32px]" />
                </div>

                {/* Central visual */}
                <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-blue-400/30 bg-[#0B1220]/80 shadow-[0_0_50px_rgba(37,99,235,0.25)]">
                  <span className="text-2xl font-bold text-blue-400">
                    2S0
                  </span>
                </div>

                {/* Category */}
                <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-7 text-sm font-semibold text-blue-400 transition group-hover:text-blue-300">
                  View project →
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}