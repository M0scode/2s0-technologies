export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        
        {/* Logo */}
        <a href="/" className="text-2xl font-bold tracking-tight">
          <span className="text-white">2S0</span>
          <span className="ml-1 text-blue-400">Technologies</span>
        </a>

        {/* Navigation links */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#about"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            About
          </a>

          <a
            href="#services"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Services
          </a>

          <a
            href="#impact"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Our Impact
          </a>

          <a
            href="#projects"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Projects
          </a>

          <a
            href="#team"
            className="text-sm text-slate-300 transition hover:text-white"
            >
            Team
          </a>

          <a
            href="#contact"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Contact
          </a>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
        >
          Let&apos;s Talk
        </a>

      </div>
    </nav>
  );
}