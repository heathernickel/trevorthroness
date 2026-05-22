export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f8f7] text-[#1f2d44]">
      <section className="bg-[#1f2d44] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 grid gap-16 md:grid-cols-2 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#19b89f] font-bold mb-6">
              Leadership • DISC • Team Performance
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.02] tracking-tight mb-6">
              Figure Out Your Team.
            </h1>
            <p className="text-2xl md:text-3xl text-white/85 font-medium leading-tight max-w-2xl">
              Use behavioural science to put the right people in the right seats, strengthen communication, and fix your chronic people problems.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#" className="rounded-full bg-[#ff7a00] px-6 py-4 font-semibold hover:opacity-90 transition">
                Take the DISC Assessment
              </a>
              <a href="#" className="rounded-full border border-white/20 px-6 py-4 font-semibold hover:bg-white/10 transition">
                Explore the Book
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 backdrop-blur p-6 shadow-2xl">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-[#32435f] to-[#172235] p-10 aspect-[4/5] flex flex-col justify-between">
              <div>
                <div className="inline-block rounded-full bg-[#ff7a00] px-4 py-2 text-xs font-bold uppercase tracking-widest mb-8">
                  New Book
                </div>
                <h2 className="text-5xl font-black leading-none tracking-tight">
                  FIGURE
                  <br />
                  OUT
                  <br />
                  YOUR
                  <br />
                  TEAM
                </h2>
              </div>
              <p className="text-white/70 leading-7 max-w-sm">
                Practical leadership tools for building aligned, healthy, high-performing teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-14">
            <p className="text-sm uppercase tracking-[0.25em] text-[#007B83] font-bold mb-5">
              Why Teams Struggle
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Most business problems are actually people problems.
            </h2>
            <p className="text-lg leading-8 text-[#1f2d44]/70">
              Trevor helps leaders understand behaviour, communication, accountability, and culture so teams stop working against each other and start moving in the same direction.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-[#1f2d44]/10 p-8 bg-[#f7f8f7]">
              <div className="text-[#ff7a00] font-bold mb-4">01</div>
              <h3 className="text-2xl font-bold mb-4">Right People</h3>
              <p className="leading-7 text-[#1f2d44]/70">
                Understand behavioural patterns and put people where they naturally thrive.
              </p>
            </div>

            <div className="rounded-3xl border border-[#1f2d44]/10 p-8 bg-[#f7f8f7]">
              <div className="text-[#ff7a00] font-bold mb-4">02</div>
              <h3 className="text-2xl font-bold mb-4">Better Communication</h3>
              <p className="leading-7 text-[#1f2d44]/70">
                Create shared language around conflict, stress, motivation, and teamwork.
              </p>
            </div>

            <div className="rounded-3xl border border-[#1f2d44]/10 p-8 bg-[#f7f8f7]">
              <div className="text-[#ff7a00] font-bold mb-4">03</div>
              <h3 className="text-2xl font-bold mb-4">Stronger Culture</h3>
              <p className="leading-7 text-[#1f2d44]/70">
                Align your leadership team and build accountability that actually lasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1f2d44] text-white py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-16 md:grid-cols-2 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#19b89f] font-bold mb-5">
              DISC Assessment
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Understand how your team naturally communicates, leads, and responds under pressure.
            </h2>
            <p className="text-lg leading-8 text-white/70 mb-8">
              DISC gives leaders a practical framework for communication, delegation, hiring, coaching, and team alignment.
            </p>
            <a href="#" className="rounded-full bg-[#ff7a00] px-6 py-4 inline-block font-semibold hover:opacity-90 transition">
              Take the Assessment
            </a>
          </div>

          <div className="grid gap-4">
            {['Dominance','Influence','Steadiness','Conscientiousness'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-xl font-semibold">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
