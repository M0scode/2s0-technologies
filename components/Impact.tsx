const impactStats = [
  {
    value: "500+",
    label: "People Reached",
    description: "Through digital skills, technology and learning initiatives.",
  },
  {
    value: "10+",
    label: "Months of Impact",
    description: "Building sustainable technology and skills programmes.",
  },
  {
    value: "5",
    label: "Technology Areas",
    description: "Data, AI, development, training and EdTech.",
  },
];

const impactAreas = [
  "Digital Skills",
  "Youth Empowerment",
  "Data-Driven Decision Making",
  "Accessible Technology",
];

export default function Impact() {
  return (
    <section
      id="impact"
      className="bg-white px-6 py-24 text-[#0B1220]"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Our Impact
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Technology That Makes a Difference.
            </h2>
          </div>

          <p className="text-lg leading-8 text-slate-600">
            We believe technology is most powerful when it expands access,
            develops people and helps organisations make better decisions.
            Our goal is to create measurable impact through every solution
            we build.
          </p>

        </div>

        {/* Impact statistics */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {impactStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-8"
            >
              <div className="text-4xl font-bold tracking-tight text-blue-600">
                {stat.value}
              </div>

              <h3 className="mt-4 text-xl font-semibold">
                {stat.label}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {stat.description}
              </p>
            </div>
          ))}

        </div>

        {/* Impact areas */}
        <div className="mt-16 rounded-3xl bg-[#0B1220] p-8 text-white sm:p-10 lg:p-12">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                Where We Create Value
              </p>

              <h3 className="mt-4 text-3xl font-bold sm:text-4xl">
                Building a More Digitally Empowered Future.
              </h3>

              <p className="mt-5 max-w-xl leading-7 text-slate-300">
                From helping organisations understand their data to giving
                young people access to digital skills, we focus on technology
                that creates pathways to opportunity.
              </p>
            </div>

            {/* Impact areas */}
            <div className="grid gap-3 sm:grid-cols-2">

              {impactAreas.map((area, index) => (
                <div
                  key={area}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-blue-400/30 hover:bg-white/[0.05]"
                >
                  <span className="text-sm font-bold text-blue-400">
                    0{index + 1}
                  </span>

                  <span className="font-medium text-slate-200">
                    {area}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}