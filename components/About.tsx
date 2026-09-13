"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0B1220] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Main content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Our Mission
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Technology Should Create Opportunities — Not Barriers.
            </h2>
          </motion.div>

          {/* Right side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <p className="text-lg leading-8 text-slate-300">
              At 2S0 Technologies, we believe technology has the power to
              connect people to knowledge, opportunity and economic
              participation.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              We build practical digital solutions that help organisations
              make better decisions while empowering communities with the
              skills they need to participate in the digital economy.
            </p>
          </motion.div>
        </div>

        {/* Principles */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">

          {/* Innovation */}
          <div className="border-t border-white/10 pt-6">
            <span className="text-sm font-semibold text-blue-400">
              01
            </span>

            <h3 className="mt-3 text-xl font-semibold">
              Innovation
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              We turn emerging technologies into practical solutions that
              solve real-world problems.
            </p>
          </div>

          {/* Impact */}
          <div className="border-t border-white/10 pt-6">
            <span className="text-sm font-semibold text-blue-400">
              02
            </span>

            <h3 className="mt-3 text-xl font-semibold">
              Impact
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              We measure success by the difference our technology creates for
              people, organisations and communities.
            </p>
          </div>

          {/* Inclusion */}
          <div className="border-t border-white/10 pt-6">
            <span className="text-sm font-semibold text-blue-400">
              03
            </span>

            <h3 className="mt-3 text-xl font-semibold">
              Inclusion
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              We believe everyone should have access to the skills,
              technology and opportunities needed to thrive in a digital
              world.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}