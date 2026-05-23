export default function Home() {
  return (
    <main className="bg-[#f3efe7] text-[#111111] min-h-screen overflow-hidden">
      <nav className="border-b border-black/10 bg-[#f3efe7] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <div>
            <div className="text-2xl tracking-tight font-semibold">Trevor Throness</div>
            <div className="uppercase tracking-[0.35em] text-[10px] mt-1 text-[#8f6a2a] font-semibold">
              Figure Out Your Team
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10 text-sm uppercase tracking-wide text-black/70">
            <a href="#about">About</a>
            <a href="#disc">DISC</a>
            <a href="#resources">Resources</a>
            <a href="#book">Book</a>
            <a href="#speaking">Speaking</a>
          </div>

          <a
            href="#cta"
            className="bg-[#111827] text-white px-6 py-4 text-sm uppercase tracking-wide font-semibold hover:opacity-90 transition"
          >
            Take The DISC Assessment
          </a>
        </div>
      </nav>

      <section className="max-w-[1600px] mx-auto grid lg:grid-cols-[1.05fr_0.95fr] min-h-[92vh] border-b border-black/10">
        <div className="px-8 md:px-16 xl:px-24 py-24 flex flex-col justify-center">
          <p className="uppercase tracking-[0.45em] text-[#8f6a2a] text-xs font-bold mb-10">
            GET THE CLARITY EVERY LEADER NEEDS TO
          </p>

          <h1 className="text-[5.5rem] md:text-[8rem] xl:text-[9rem] leading-[0.88] tracking-[-0.04em] font-light text-[#111111] max-w-4xl">
            Figure Out
            <br />
            Your Team
          </h1>

          <div className="w-24 h-[2px] bg-[#8f6a2a] mt-12 mb-12" />

          <p className="text-3xl md:text-5xl leading-[1.08] font-light text-[#7a5d2f] max-w-3xl mb-12">
            And Build a Culture That Drives Performance
          </p>

          <p className="text-xl leading-9 text-black/65 max-w-2xl mb-14">
            Trevor Throness helps leaders understand people, improve communication, and put the right people in the right seats—so teams become healthier, more aligned, and more effective.
          </p>

          <div className="flex flex-wrap gap-8 items-center">
            <a
              href="#cta"
              className="bg-[#111827] text-white px-10 py-6 text-sm uppercase tracking-[0.15em] font-semibold hover:opacity-90 transition"
            >
              Take The DISC Assessment →
            </a>

            <div className="text-black/50 text-lg">
              Trusted by leaders, teams, and organizations across industries.
            </div>
          </div>
        </div>

        <div className="relative min-h-[850px] bg-[#111827] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/50 z-10" />

          <img
            src="/trevor-hero.svg"
            alt="Trevor Throness"
            className="absolute inset-0 w-full h-full object-cover scale-[1.03] opacity-95"
          />

          <div className="absolute bottom-16 left-[-40px] z-20 bg-[#f3efe7] p-10 shadow-2xl border border-black/10 max-w-lg">
            <div className="uppercase tracking-[0.35em] text-[#8f6a2a] text-xs font-bold mb-6">
              Trevor Throness
            </div>

            <p className="text-3xl leading-tight font-light text-[#111111] mb-6">
              Speaker. Author.
              <br />
              DISC Expert.
            </p>

            <p className="text-lg leading-8 text-black/65">
              Helping leaders build stronger communication, healthier cultures, and high-performing teams through behavioural science.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#111827] text-white py-28">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-24">
          <div>
            <p className="uppercase tracking-[0.35em] text-[#b99658] text-xs font-bold mb-8">
              The Problem
            </p>

            <h2 className="text-5xl md:text-7xl leading-[1] tracking-tight font-light mb-10 max-w-3xl">
              Most business problems are actually people problems.
            </h2>

            <p className="text-2xl leading-10 text-white/65 max-w-2xl">
              Miscommunication. Conflict. Turnover. Lack of accountability. Most leaders do not have a strategy problem. They have a people problem.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              ['Build Stronger Teams', 'Create alignment and healthier communication.'],
              ['Lead With Confidence', 'Understand how people naturally think and respond.'],
              ['Fix Chronic Problems', 'Solve recurring people issues at the root.'],
              ['Get Better Results', 'Build healthier cultures and stronger performance.'],
            ].map(([title, desc]) => (
              <div key={title} className="border border-white/10 bg-white/[0.03] p-10">
                <h3 className="text-2xl font-light mb-5">{title}</h3>
                <p className="text-white/60 leading-8 text-lg">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="book" className="py-28 bg-[#f3efe7]">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <p className="uppercase tracking-[0.35em] text-[#8f6a2a] text-xs font-bold mb-8">
              Featured Book
            </p>

            <h2 className="text-5xl md:text-7xl leading-[1] tracking-tight font-light mb-10">
              Figure Out Your Team.
            </h2>

            <p className="text-2xl leading-10 text-black/65 mb-10 max-w-2xl">
              Practical behavioural science for leaders who want healthier teams, stronger communication, and better performance.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {['Power of People Skills', 'Figure Out Your Team', 'DISC Leadership'].map((book) => (
              <div key={book} className="aspect-[2/3] bg-[#111827] text-white p-6 flex items-end shadow-2xl">
                <div>
                  <p className="uppercase tracking-[0.3em] text-[10px] text-[#b99658] mb-4">
                    Trevor Throness
                  </p>
                  <h3 className="text-2xl leading-tight font-light">{book}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
