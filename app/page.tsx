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
            <a href="#about">About</a>
            <a href="#disc">DISC</a>
            <a href="#resources">Resources</a>
            <a href="#book">Book</a>
          </div>

          <a href="#cta" className="rounded-full bg-[#122033] text-white px-5 py-3 text-sm font-bold">
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

          <a href="#cta" className="inline-flex bg-[#122033] text-white px-8 py-5 rounded-full font-semibold text-lg">
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

      <section className="bg-[#08111d] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
          <div>
            <p className="uppercase tracking-[0.3em] text-[#b8862f] text-sm font-bold mb-6">
              The Problem
            </p>

            <h2 className="text-5xl md:text-6xl leading-tight font-light mb-8">
              Most business problems are actually people problems.
            </h2>

            <p className="text-xl leading-9 text-white/70">
              Miscommunication. Conflict. Turnover. Missed expectations. Most leaders do not have a strategy problem. They have a people problem.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              ['Build Stronger Teams', 'Create alignment and healthier communication.'],
              ['Lead With Confidence', 'Understand how people naturally think and respond.'],
              ['Fix Chronic Problems', 'Solve recurring people issues at the root.'],
              ['Get Better Results', 'Stronger culture. Better decisions. More growth.'],
            ].map(([title, desc]) => (
              <div key={title} className="border border-white/10 rounded-3xl p-8 bg-white/5">
                <h3 className="text-2xl font-semibold mb-4">{title}</h3>
                <p className="text-white/70 leading-8">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="book" className="py-24 bg-[#f4f0e8]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-[#8a6a2f] text-sm font-bold mb-6">
              Featured Book
            </p>

            <h2 className="text-5xl md:text-6xl leading-tight font-light mb-8">
              Figure Out Your Team.
            </h2>

            <p className="text-xl leading-9 text-black/70 mb-8">
              Practical behavioural science for leaders who want healthier teams, stronger communication, and better results.
            </p>

            <blockquote className="border-l-4 border-[#b8862f] pl-6 italic text-2xl leading-10 text-black/80">
              “Most people problems become predictable once you understand behaviour.”
            </blockquote>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {['Power of People Skills', 'Figure Out Your Team', 'DISC Leadership'].map((book) => (
              <div key={book} className="aspect-[2/3] rounded-2xl bg-[#122033] text-white p-5 flex items-end shadow-2xl">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#b8862f] mb-3">Trevor Throness</p>
                  <h3 className="text-2xl leading-tight font-bold">{book}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="disc" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="uppercase tracking-[0.3em] text-[#8a6a2f] text-sm font-bold mb-6">
              DISC Assessment
            </p>

            <h2 className="text-5xl md:text-6xl leading-tight font-light mb-8">
              Understand how your team naturally communicates and performs.
            </h2>

            <p className="text-xl leading-9 text-black/70">
              DISC gives leaders a practical framework for communication, delegation, hiring, accountability, and culture.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {['Dominance','Influence','Steadiness','Conscientiousness'].map((item) => (
              <div key={item} className="rounded-3xl border border-black/10 p-10 bg-[#f8f5ef]">
                <div className="text-3xl font-semibold mb-4">{item}</div>
                <p className="leading-8 text-black/60">
                  Learn how this behavioural style impacts leadership, teamwork, and communication.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#08111d] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-[#1c2e45] to-[#08111d] shadow-2xl" />

          <div>
            <p className="uppercase tracking-[0.3em] text-[#b8862f] text-sm font-bold mb-6">
              About Trevor
            </p>

            <h2 className="text-5xl md:text-6xl leading-tight font-light mb-8">
              Helping leaders get the most out of their people.
            </h2>

            <div className="space-y-6 text-xl leading-9 text-white/70">
              <p>
                Trevor Throness is a leadership speaker, DISC expert, and author who helps organizations build stronger communication, better leadership, and healthier teams.
              </p>

              <p>
                Through practical behavioural science, Trevor equips leaders with tools to reduce conflict, improve accountability, and create aligned cultures.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="py-24 bg-[#f4f0e8] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="uppercase tracking-[0.3em] text-[#8a6a2f] text-sm font-bold mb-6">
            Ready To Build A Better Team?
          </p>

          <h2 className="text-5xl md:text-7xl leading-[1] font-light mb-8">
            Understand your team.
            <br />
            Lead with confidence.
            <br />
            <span className="italic text-[#8a6a2f]">Get better results.</span>
          </h2>

          <p className="text-xl leading-9 text-black/70 mb-10 max-w-3xl mx-auto">
            The DISC Assessment gives you practical insights to improve communication, reduce conflict, and build a stronger team.
          </p>

          <a href="#" className="inline-flex bg-[#122033] text-white px-8 py-5 rounded-full font-semibold text-lg">
            Take The DISC Assessment
          </a>
        </div>
      </section>
    </main>
  )
}
