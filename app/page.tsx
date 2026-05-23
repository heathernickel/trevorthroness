export default function Home() {
  return (
    <main className="bg-white text-[#1d1d1d] min-h-screen">
      <nav className="border-b border-black/10 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <div className="text-xl font-semibold tracking-tight text-[#182433]">
              Trevor Throness
            </div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-[#9a7a48] mt-1">
              Figure Out Your Team
            </div>
          </div>

          <div className="hidden md:flex gap-8 text-sm text-black/60">
            <a href="#about">About</a>
            <a href="#disc">DISC</a>
            <a href="#book">Book</a>
            <a href="#resources">Resources</a>
          </div>

          <a
            href="#cta"
            className="bg-[#182433] text-white px-5 py-3 text-sm font-medium rounded-sm"
          >
            Take DISC Assessment
          </a>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-[1fr_520px] gap-16 items-center">
        <div>
          <p className="uppercase tracking-[0.32em] text-[#9a7a48] text-xs font-semibold mb-8">
            GET THE CLARITY EVERY LEADER NEEDS TO
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight font-light text-[#182433] mb-8 max-w-3xl">
            Figure Out
            <br />
            Your Team
          </h1>

          <p className="text-2xl md:text-3xl leading-tight text-[#8a6a3b] font-light max-w-2xl mb-10">
            And Build a Culture That Drives Performance
          </p>

          <p className="text-lg leading-8 text-black/65 max-w-xl mb-12">
            Trevor Throness helps leaders improve communication, strengthen culture, and put the right people in the right seats through practical behavioural science.
          </p>

          <div className="flex flex-wrap gap-5 items-center">
            <a
              href="#cta"
              className="inline-flex bg-[#182433] text-white px-7 py-4 text-sm font-medium rounded-sm"
            >
              Take The DISC Assessment
            </a>

            <span className="text-black/45 text-sm">
              Trusted by leaders and teams across industries.
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-sm bg-[#e9e2d7] border border-black/5">
            <img
              src="/trevor-hero.svg"
              alt="Trevor Throness"
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#182433] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="uppercase tracking-[0.32em] text-[#c7ab78] text-xs font-semibold mb-6">
              The Problem
            </p>

            <h2 className="text-4xl md:text-5xl leading-tight font-light mb-8 max-w-2xl">
              Most business problems are actually people problems.
            </h2>

            <p className="text-xl leading-9 text-white/65 max-w-xl">
              Miscommunication, conflict, and lack of accountability quietly damage performance, morale, and culture.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              'Build stronger teams',
              'Improve communication',
              'Reduce recurring conflict',
              'Create healthier culture',
            ].map((item) => (
              <div
                key={item}
                className="border border-white/10 p-7 text-lg font-light text-white/90 bg-white/[0.03]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
