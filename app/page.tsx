export default function Home() {
  return (
    <main className="bg-[#f4f0e8] text-[#111827] min-h-screen overflow-hidden">
      <nav className="border-b border-black/10 bg-[#f4f0e8] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <div className="text-2xl font-black tracking-tight">TREVOR THRONESS</div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#8a6a2f] font-semibold">
              FIGURE OUT YOUR TEAM
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wide">
            <a href="#about">About</a>
            <a href="#disc">DISC</a>
            <a href="#resources">Resources</a>
            <a href="#speaking">Speaking</a>
            <a href="#blog">Blog</a>
          </div>

          <a href="#cta" className="bg-[#08111d] text-white px-6 py-4 text-sm font-bold uppercase tracking-wide">
            Get The DISC Assessment →
          </a>
        </div>
      </nav>

      <section className="grid lg:grid-cols-2 min-h-[85vh] border-b border-black/10">
        <div className="px-8 md:px-16 py-20 flex flex-col justify-center bg-[#f4f0e8]">
          <p className="uppercase tracking-[0.35em] text-[#b8862f] text-sm font-bold mb-10">
            GET THE CLARITY EVERY LEADER NEEDS TO
          </p>

          <h1 className="text-[5rem] md:text-[7rem] leading-[0.9] tracking-tight font-light text-[#08111d] mb-8">
            Figure Out
            <br />
            Your Team
          </h1>

          <div className="w-32 h-[2px] bg-[#b8862f] mb-10" />

          <h2 className="text-4xl md:text-5xl leading-tight text-[#b8862f] font-light max-w-2xl mb-10">
            And Build a Culture That Drives Performance
          </h2>

          <p className="text-xl leading-9 text-black/70 max-w-2xl mb-12">
            Trevor Throness helps leaders understand people, improve communication, and get the right people in the right seats—so teams perform at their best.
          </p>

          <div className="flex flex-col items-start gap-8">
            <a href="#cta" className="bg-[#08111d] text-white px-10 py-6 text-lg font-semibold uppercase tracking-wide">
              Get The DISC Assessment →
            </a>

            <div className="flex items-center gap-3 text-black/60 text-lg">
              <span className="text-[#b8862f]">◌</span>
              Trusted by thousands of leaders and organizations worldwide
            </div>
          </div>
        </div>

        <div className="relative bg-[#08111d] overflow-hidden min-h-[700px]">
          <img
            src="/trevor-hero.svg"
            alt="Trevor Throness"
            className="absolute inset-0 w-full h-full object-cover opacity-95"
          />

          <div className="absolute bottom-10 left-10 bg-[#f4f0e8] p-8 shadow-2xl max-w-md border border-black/10">
            <div className="w-1 h-16 bg-[#b8862f] absolute left-0 top-8" />

            <div className="pl-6">
              <p className="text-3xl tracking-wide font-semibold text-[#08111d] mb-4">
                TREVOR THRONESS
              </p>

              <p className="text-xl leading-9 text-black/70">
                Speaker. Author. DISC Expert.
                <br />
                Helping leaders build high-performing teams.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
