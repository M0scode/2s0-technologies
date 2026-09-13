"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Sandiso Magwaza",
    role: "Data Scientist",
    initials: "SM",
    image: "/sandiso.png",
    bio: "A passionate Data Scientist and graduate of Explore AI Academy, Sandiso brings deep expertise in data-driven solutions and machine learning.",
    vision:
      "His vision to harness the power of AI for rural empowerment laid the foundation for 2S0 Technologies.",
  },
  {
    name: "Lethu Zama",
    role: "Data Analyst",
    initials: "LZ",
    image: "/lethu.jpg",
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
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
        </motion.div>

        {/* Team members */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {team.map((member) => (
            <article
              key={member.name}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
            >

              {/* Photo placeholder */}
              <div className="relative h-96 overflow-hidden bg-[#0B1220]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-contain"
                />
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