const team = [
  {
    name: "Sandiso Magwaza",
    role: "Data Scientist",
    initials: "SM",
    bio: "A passionate Data Scientist and graduate of Explore AI Academy, Sandiso brings deep expertise in data-driven solutions and machine learning.",
    vision:
      "His vision to harness the power of AI for rural empowerment laid the foundation for 2S0 Technologies.",
  },
  {
    name: "Lethu Zama",
    role: "Data Analyst",
    initials: "LZ",
    bio: "A skilled Data Analyst and graduate of Explore AI Academy, Lethu combines analytical precision with a deep understanding of community needs.",
    vision:
      "His commitment to translating data into impact drives the company's mission forward every day.",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="bg-slate-50 px-6 py-24 text-[#0B1220]"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Our Team
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            The People Behind the Technology.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Technology is built by people. Our team brings together technical
            expertise, creativity and data-driven thinking with a shared
            commitment to creating meaningful opportunities through
            technology.
          </p>
        </div>

        {/* Team members */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {team.map((member) => (
            <article
              key={member.name}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
            >

              {/* Photo placeholder */}
              <div className="relative flex h-72 items-center justify-center overflow-hidden bg-[#0B1220]">

                {/* Decorative background */}
                <div className="absolute inset-0 opacity-30">
                  <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />
                </div>

                {/* Initials */}
                <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-blue-400/30 bg-blue-600/10 shadow-[0_0_60px_rgba(37,99,235,0.2)]">
                  <span className="text-4xl font-bold text-blue-400">
                    {member.initials}
                  </span>
                </div>

                {/* Coming soon label */}
                <span className="absolute bottom-5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-400 backdrop-blur-sm">
                  Photo coming soon
                </span>
              </div>

              {/* Profile information */}
              <div className="p-8">

                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  {member.role}
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {member.name}
                </h3>

                <p className="mt-5 leading-7 text-slate-600">
                  {member.bio}
                </p>

                <div className="mt-6 border-l-2 border-blue-600 pl-5">
                  <p className="leading-7 text-slate-700">
                    {member.vision}
                  </p>
                </div>

              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}