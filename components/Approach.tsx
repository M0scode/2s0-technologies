"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start by understanding your goals, challenges, people and environment before designing a solution.",
  },
  {
    number: "02",
    title: "Analyse",
    description:
      "We use data, research and technology to identify opportunities and determine the best path forward.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We turn insights into practical digital solutions that are scalable, accessible and built for purpose.",
  },
  {
    number: "04",
    title: "Empower",
    description:
      "We make sure the solution creates lasting value by equipping people with the skills and confidence to use it.",
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      className="bg-slate-50 px-6 py-24 text-[#0B1220]"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Our Approach
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            From Ideas to Impact.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Great technology starts with understanding the problem. Our
            approach combines human-centred thinking, data and technology to
            create solutions that deliver meaningful results.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="group relative rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-blue-600">
                  {step.number}
                </span>

                <div className="h-px w-12 bg-slate-200 transition group-hover:w-16 group-hover:bg-blue-300" />
              </div>

              {/* Title */}
              <h3 className="mt-8 text-2xl font-semibold">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-4 leading-7 text-slate-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}