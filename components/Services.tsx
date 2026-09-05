const services = [
  {
    title: "Data Analytics & Dashboards",
    description:
      "Turn complex data into clear insights that support smarter decisions and measurable impact.",
    icon: "▦",
  },
  {
    title: "Web & App Development",
    description:
      "Build modern, responsive digital experiences designed around real business and community needs.",
    icon: "</>",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Use artificial intelligence and machine learning to solve problems, automate processes and unlock new opportunities.",
    icon: "✦",
  },
  {
    title: "IT Training & Digital Literacy",
    description:
      "Equip people with practical digital skills that build confidence, productivity and access to opportunity.",
    icon: "⌘",
  },
  {
    title: "EdTech & Youth Empowerment",
    description:
      "Create technology-driven learning solutions that connect young people to skills, education and opportunity.",
    icon: "◈",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white px-6 py-24 text-[#0B1220]"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            What We Do
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Technology With Purpose.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We combine technology, data and human-centred thinking to create
            solutions that solve real problems and create meaningful
            opportunities.
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-lg font-bold text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-semibold">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-3 leading-7 text-slate-600">
                {service.description}
              </p>

              {/* Learn more */}
              <div className="mt-6 text-sm font-semibold text-blue-600">
                Learn more →
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}