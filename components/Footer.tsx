export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080E1A] px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Main footer */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="text-2xl font-bold tracking-tight">
              <span className="text-white">2S0</span>
              <span className="ml-1 text-blue-400">Technologies</span>
            </a>

            <p className="mt-4 max-w-md leading-7 text-slate-400">
              Bridging the digital divide through technology and innovation.
              We create data-driven solutions that empower people and
              transform communities.
            </p>

            <p className="mt-5 text-sm font-medium text-blue-400">
              Proudly Local. Boldly Global.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#approach"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Our Approach
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#team"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Our Team
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Connect
            </h3>

            <div className="mt-5 space-y-3">
              <a
                href="#contact"
                className="block text-sm text-slate-400 transition hover:text-white"
              >
                Get in Touch
              </a>

              <p className="text-sm text-slate-400">
                KwaMusi, Nongoma
              </p>

              <p className="text-sm text-slate-400">
                KwaZulu-Natal, South Africa
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} 2S0 Technologies. All rights reserved.
          </p>

          <p>
            Technology That Creates Opportunity.
          </p>

        </div>

      </div>
    </footer>
  );
}