"use client";

import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import About from "@/components/About";
import Approach from "@/components/Approach";
import Projects from "@/components/Projects";
import Impact from "@/components/Impact";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111827] text-white">
       <Navbar />
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 lg:flex-row lg:items-center lg:gap-16">
        
        {/* Left side */}
        <div className="max-w-3xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400"
          >
            Proudly Local. Boldly Global.
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
          >
            Technology That Creates Opportunity.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
          >
            2S0 Technologies bridges the digital divide through AI, data,
            software development and digital skills training—creating
            solutions that empower people and transform communities in rural areas.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button className="rounded-full bg-blue-600 px-7 py-3.5 font-semibold transition hover:bg-blue-500">
              Explore Our Services
            </button>

            <button className="rounded-full border border-white/20 px-7 py-3.5 font-semibold transition hover:bg-white/10">
              Start a Conversation
            </button>
          </motion.div>
        </div>

        {/* Right side - Digital Network Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 30}}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="relative mt-16 h-80 w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] lg:mt-0">
          
          {/* Glow */}
          <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-3xl" />

          {/* Network lines */}
          <div className="absolute left-[20%] top-[25%] h-px w-[60%] rotate-12 bg-blue-400/30" />
          <div className="absolute left-[20%] top-[55%] h-px w-[60%] -rotate-12 bg-blue-400/30" />
          <div className="absolute left-[30%] top-[20%] h-[60%] w-px rotate-[25deg] bg-blue-400/20" />
          <div className="absolute left-[70%] top-[20%] h-[60%] w-px -rotate-[25deg] bg-blue-400/20" />

          {/* Central technology core */}
          <motion.div 
           animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 40px rgba(37,99,235,0.20)",
                "0 0 70px rgba(37,99,235,0.40)",
                "0 0 40px rgba(37,99,235,0.20)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-400/40 bg-[#0B1220] shadow-[0_0_60px_rgba(37,99,235,0.35)]">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">2S0</div>
              <div className="mt-1 text-[9px] uppercase tracking-[0.25em] text-blue-400">
                Technologies
              </div>
            </div>
          </motion.div>

          {/* Data nodes */}
          <motion.div 
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          className="absolute left-[18%] top-[22%] h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.8)]" />
          <motion.div 
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2.4,
              delay: 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          className="absolute right-[18%] top-[28%] h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.8)]" />
          <motion.div 
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.35, 1],
          }}
          transition={{
            duration: 2.8,
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[16%] bottom-[22%] h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.8)]" />
          <motion.div 
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.45, 1],
          }}
          transition={{
            duration: 2.2,
            delay: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[20%] bottom-[25%] h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.8)]" />

          {/* Labels */}
          <span className="absolute left-8 top-8 text-xs uppercase tracking-widest text-slate-500">
            Data
          </span>

          <span className="absolute right-8 top-12 text-xs uppercase tracking-widest text-slate-500">
            AI
          </span>

          <span className="absolute bottom-8 left-8 text-xs uppercase tracking-widest text-slate-500">
            Skills
          </span>

          <span className="absolute bottom-8 right-8 text-xs uppercase tracking-widest text-slate-500">
            Innovation
          </span>
        </motion.div>
      </section>

      {/* Services */}
      <Services />

      {/* About */}
      <About />

      {/* Approach */}
      <Approach />

      {/* Projects */}
      <Projects />

      {/* Impact */}
      <Impact />

      {/* Team */}
      <Team />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />

    </main>
  );
}