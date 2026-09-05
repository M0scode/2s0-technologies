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
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Proudly Local. Boldly Global.
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Technology That Creates Opportunity.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            2S0 Technologies bridges the digital divide through AI, data,
            software development and digital skills training—creating
            solutions that empower people and transform communities in rural areas.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-full bg-blue-600 px-7 py-3.5 font-semibold transition hover:bg-blue-500">
              Explore Our Services
            </button>

            <button className="rounded-full border border-white/20 px-7 py-3.5 font-semibold transition hover:bg-white/10">
              Start a Conversation
            </button>
          </div>
        </div>

        {/* Right side - Digital Network Visual */}
        <div className="relative mt-16 h-80 w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] lg:mt-0">
          
          {/* Glow */}
          <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-3xl" />

          {/* Network lines */}
          <div className="absolute left-[20%] top-[25%] h-px w-[60%] rotate-12 bg-blue-400/30" />
          <div className="absolute left-[20%] top-[55%] h-px w-[60%] -rotate-12 bg-blue-400/30" />
          <div className="absolute left-[30%] top-[20%] h-[60%] w-px rotate-[25deg] bg-blue-400/20" />
          <div className="absolute left-[70%] top-[20%] h-[60%] w-px -rotate-[25deg] bg-blue-400/20" />

          {/* Central technology core */}
          <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-400/40 bg-[#0B1220] shadow-[0_0_60px_rgba(37,99,235,0.35)]">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">2S0</div>
              <div className="mt-1 text-[9px] uppercase tracking-[0.25em] text-blue-400">
                Technologies
              </div>
            </div>
          </div>

          {/* Data nodes */}
          <div className="absolute left-[18%] top-[22%] h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.8)]" />
          <div className="absolute right-[18%] top-[28%] h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.8)]" />
          <div className="absolute left-[16%] bottom-[22%] h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.8)]" />
          <div className="absolute right-[20%] bottom-[25%] h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.8)]" />

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
        </div>
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