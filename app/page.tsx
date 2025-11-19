export default function Home() {
  const features = [
    {
      icon: "🎒",
      title: "Student-friendly",
      desc: "Great for hackathons, school projects, or your very first side-project launch.",
    },
    {
      icon: "🧸",
      title: "Soft but serious",
      desc: "Warm colors and rounded corners, but the layout is still clear and easy to scan.",
    },
    {
      icon: "🚀",
      title: "Launch in minutes",
      desc: "Change just a few lines of text and this page is ready to show to anyone.",
    },
  ];

  const faq = [
    {
      q: "Do I need to be a designer?",
      a: "Nope. The spacing, colors and sections are already decided. You mainly replace the words.",
    },
    {
      q: "Can I reuse this for other projects?",
      a: "Yes. Swap the logo name, hero text and feature bullets, and it instantly fits a new idea.",
    },
    {
      q: "Is this heavy or complicated?",
      a: "It’s just a single page built with Next.js and TailwindCSS. No extra dependencies.",
    },
  ];

  const audience = [
    "Students shipping their first idea 🌱",
    "Teams doing a 24-hour sprint ⏱️",
    "Anyone who wants a kind, not-so-corporate landing page 💌",
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        {/* HEADER */}
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-200 border border-sky-400">
              <span className="text-lg">🌈</span>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight">
                SproutLanding
              </p>
              <p className="text-[11px] text-slate-500">
                A gentle little launch page template.
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-xs font-medium text-slate-600 sm:flex">
            <a href="#about" className="hover:text-slate-900">
              Overview
            </a>
            <a href="#features" className="hover:text-slate-900">
              Features
            </a>
            <a href="#who" className="hover:text-slate-900">
              Who it&apos;s for
            </a>
            <a href="#faq" className="hover:text-slate-900">
              FAQ
            </a>
          </nav>

          <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-medium text-slate-600">
            Contribution Sprint · 2025
          </span>
        </header>

        {/* HERO */}
        <section
          id="about"
          className="mt-12 grid flex-1 gap-10 md:grid-cols-[1.2fr,1fr] md:items-center"
        >
          {/* left text */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">
              tiny layout · big first impression
            </p>

            <h1 className="mt-4 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
              A small, friendly landing page
              <span className="block text-sky-600">
                that doesn&apos;t feel scary to build 🎈
              </span>
            </h1>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">
              SproutLanding is a one-page layout for people who are still
              learning but want their project to look thoughtful. It balances a
              soft, kid-like personality with a layout that would still make
              sense in a real product demo.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
              <button className="rounded-full bg-sky-600 px-5 py-2 font-semibold text-white shadow-sm shadow-sky-300 transition hover:bg-sky-500">
                Show this to someone
              </button>
              <button className="rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-100">
                View the structure
              </button>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              No dashboards, no dark patterns, just a page that explains your
              idea clearly.
            </p>
          </div>

          {/* right summary card */}
          <div className="mx-auto w-full max-w-sm">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-md">
              <p className="text-xs font-semibold text-slate-500">
                What this page already includes
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  <span>Intro hero with clear headline and two actions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                  <span>Feature row explaining how this layout behaves.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                  <span>Audience, FAQ and footer, all ready with copy.</span>
                </li>
              </ul>
              <p className="mt-4 text-[11px] text-slate-500">
                The idea is simple: you can keep the structure and just change
                the story.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="mt-12">
          <h2 className="text-lg font-semibold text-slate-900">
            What SproutLanding gives you
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            These sections are tiny on purpose, so your visitors can understand
            everything in one slow scroll.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm"
              >
                <p className="text-2xl">{feature.icon}</p>
                <h3 className="mt-2 text-sm font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section id="who" className="mt-12 grid gap-8 md:grid-cols-[1.1fr,1fr] md:items-start">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Who this layout secretly loves
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              It&apos;s simple enough for beginners but still neat enough to be
              shown in a portfolio or sprint presentation.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {audience.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 text-sky-500">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-sky-50 via-white to-amber-50 p-4 text-sm">
            <p className="text-xs font-semibold text-slate-500">
              Little testimonial
            </p>
            <p className="mt-2 text-sm text-slate-800">
              “If someone had given me a page like this when I started learning
              frontend, I would&apos;ve shipped my ideas way earlier.”
            </p>
            <p className="mt-3 text-xs text-slate-500">
              — A fictional junior developer who finally pushed their first
              project to production
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-12">
          <h2 className="text-lg font-semibold text-slate-900">Quick FAQ</h2>
          <p className="mt-1 text-sm text-slate-600">
            Answering the tiny questions people usually have when they see a
            template like this.
          </p>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {faq.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-sm"
              >
                <p className="text-xs font-semibold text-slate-500">
                  {item.q}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-700">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t border-slate-200 pt-4 text-xs text-slate-500">
          <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
            <p>
              © {new Date().getFullYear()} SproutLanding. Designed during a
              contribution sprint and safe to reuse.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-slate-200 bg-white px-2 py-1 text-[10px] font-medium text-slate-700">
                Next.js • TailwindCSS • TypeScript
              </span>
              <span className="text-[10px] text-slate-500">
                Feel free to tweak colors, keep the structure.
              </span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
