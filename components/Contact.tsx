export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0B1220] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Get In Touch
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s Build Something That Matters.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Have an idea, a challenge or an opportunity? Let&apos;s explore
            how technology can help you create meaningful impact.
          </p>
        </div>

        {/* Contact content */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2">

          {/* Contact information */}
          <div>
            <h3 className="text-2xl font-semibold">
              Start a Conversation
            </h3>

            <p className="mt-4 max-w-lg leading-7 text-slate-400">
              Whether you&apos;re looking for a technology partner, data
              solution, digital skills programme or an innovative EdTech
              solution, we&apos;d love to hear from you.
            </p>

            {/* Contact details */}
            <div className="mt-10 space-y-6">

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                  Email
                </p>

                <p className="mt-2 text-slate-300">
                  hello@2s0technologies.co.za
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                  Location
                </p>

                <p className="mt-2 text-slate-300">
                  KwaMusi, Nongoma, KwaZulu-Natal
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                  Availability
                </p>

                <p className="mt-2 text-slate-300">
                  Open to partnerships, projects and opportunities.
                </p>
              </div>

            </div>
          </div>

          {/* Contact form */}
          <form className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">

            <div className="grid gap-6 sm:grid-cols-2">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-slate-300"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-400"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-400"
                />
              </div>

            </div>

            {/* Organisation */}
            <div className="mt-6">
              <label
                htmlFor="organisation"
                className="text-sm font-medium text-slate-300"
              >
                Organisation
              </label>

              <input
                id="organisation"
                type="text"
                placeholder="Your organisation"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-400"
              />
            </div>

            {/* Service */}
            <div className="mt-6">
              <label
                htmlFor="service"
                className="text-sm font-medium text-slate-300"
              >
                What can we help with?
              </label>

              <select
                id="service"
                className="mt-2 w-full rounded-xl border border-white/10 bg-[#111827] px-4 py-3 text-slate-300 outline-none focus:border-blue-400"
              >
                <option value="">Select a service</option>
                <option value="data">Data Analytics & Dashboards</option>
                <option value="development">Web & App Development</option>
                <option value="ai">AI & Machine Learning</option>
                <option value="training">IT Training & Digital Literacy</option>
                <option value="edtech">EdTech & Youth Empowerment</option>
                <option value="partnership">Partnership / Collaboration</option>
                <option value="other">Something Else</option>
              </select>
            </div>

            {/* Message */}
            <div className="mt-6">
              <label
                htmlFor="message"
                className="text-sm font-medium text-slate-300"
              >
                Message
              </label>

              <textarea
                id="message"
                rows={5}
                placeholder="Tell us a little about your project or idea..."
                className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-400"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-7 w-full rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500"
            >
              Send Message →
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}