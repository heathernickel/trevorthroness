export default function Home() {
  return (
    <main className="bg-[#f4f0e8] text-[#111827] min-h-screen overflow-hidden">
      <nav className="border-b border-black/10 bg-[#f4f0e8] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <div className="text-2xl font-black tracking-tight">TREVOR THRONESS</div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#8a6a2f] font-semibold">
              Figure Out Your Team
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#">About</a>
            <a href="#">DISC</a>
            <a href="#">Resources</a>
            <a href="#">Book</a>
          </div>

          <a
            href="#"
            className="rounded-full bg-[#122033] text-white px-5 py-3 text-sm font-bold"
          >
            Take The DISC Assessment
          </a>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <p className="uppercase tracking-[0.3em] text-[#8a6a2f] text-sm font-bold mb-6">
            Behavioural Science • Leadership • Team Alignment
          </p>

          <h1 className="text-6xl md:text-8xl leading-[0.95] tracking-tight font-light mb-8">
            Stronger teams.
            <br />
            Better leaders.
            <br />
            <span className="italic text-[#8a6a2f]">Real results.</span>
          </h1>

          <p className="text-xl leading-9 text-black/70 max-w-2xl mb-10">
            Trevor Throness helps leaders use DISC behavioural science to put the right people in the right seats, strengthen communication, and solve chronic people problems.
          </p>

          <a
            href="#"
            className="inline-flex bg-[#122033] text-white px-8 py-5 rounded-full font-semibold text-lg"
          >
            Take The DISC Assessment
          </a>
        </div>

        <div className="aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-[#122033] to-[#08111d] p-10 shadow-2xl flex flex-col justify-between text-white">
          <div>
            <div className="inline-flex bg-[#b8862f] px-4 py-2 rounded-full text-xs uppercase tracking-widest font-bold mb-8">
              New Book
            </div>

            <h2 className="text-6xl leading-[0.9] tracking-tight font-black">
              FIGURE
              <br />
              OUT
              <br />
              YOUR
              <br />
              TEAM
            </h2>
          </div>

          <div className="bg-white text-black p-6 rounded-2xl max-w-sm shadow-xl">
            <p className="text-sm uppercase tracking-[0.2em] text-[#8a6a2f] font-bold mb-3">
              Trevor Throness
            </p>
            <p className="text-lg leading-8 text-black/70">
              Use behavioural science to strengthen communication, align teams, and improve leadership.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
