export default function Home() {
  return (
    <main className="bg-[#f6f1e8] text-[#1d1d1d] min-h-screen">
      <nav className="border-b border-black/10 bg-[#f6f1e8]">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <div>
            <div className="text-xl font-semibold tracking-tight">Trevor Throness</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#8a6a3b] mt-1">
              Figure Out Your Team
            </div>
          </div>

          <div className="hidden md:flex gap-8 text-sm text-black/60">
            <a href="#about">About</a>
            <a href="#disc">DISC</a>
            <a href="#book">Book</a>
            <a href="#resources">Resources</a>
          </div>

          <a href="#cta" className="bg-[#182433] text-white px-5 py-3 text-sm font-medium">
            Take DISC Assessment
          </a>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="uppercase tracking-[0.35em] text-[#8a6a3b] text-xs font-semibold mb-8">
            Get The Clarity Every Leader Needs To
          </p>

          <h1 className="text-5xl md:text-7xl leading-[0.95] tracking-tight font-light text-[#182433] mb-8">
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

          <a href="#cta" className="inline-flex bg-[#182433] text-white px-7 py-4 text-sm font-medium">
            Take The DISC Assessment
          </a>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden bg-[#d9d3c7]">
            <img
              src="/trevor-hero.svg"
              alt="Trevor Throness"
              className="w-full h-full object-cover grayscale"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl max-w-sm border border-black/5">
            <div className="text-xs uppercase tracking-[0.3em] text-[#8a6a3b] mb-4">
              Trevor Throness
            </div>

            <p className="text-2xl leading-tight font-light text-[#182433] mb-4">
              Speaker. Author.
              <br />
              DISC Expert.
            </p>

            <p className="text-base leading-7 text-black/60">
              Helping leaders build healthier teams and stronger communication.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#182433] text-white py-24">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20">
          <div>
            <p className="uppercase tracking-[0.35em] text-[#c3a46b] text-xs font-semibold mb-6">
              The Problem
            </p>

            <h2 className="text-4xl md:text-6xl leading-tight font-light mb-8">
              Most business problems are actually people problems.
            </h2>

            <p className="text-xl leading-9 text-white/65 max-w-xl">
              Miscommunication, conflict, and lack of accountability quietly damage performance and culture.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              'Build stronger teams',
              'Improve communication',
              'Reduce recurring conflict',
              'Create healthier culture',
            ].map((item) => (
              <div key={item} className="border border-white/10 p-8 text-xl font-light text-white/90 bg-white/[0.02]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
