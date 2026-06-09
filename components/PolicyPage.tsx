type PolicyPageProps = {
  title: string;
  intro: string;
  sections: { heading: string; body: string }[];
};

export function PolicyPage({ title, intro, sections }: PolicyPageProps) {
  return (
    <section className="bg-[#F5F7FA] py-16">
      <article className="container-shell max-w-4xl rounded-2xl bg-white p-7 shadow-sm md:p-10">
        <p className="text-sm font-extrabold uppercase tracking-wide text-[#F58220]">TruePoint Valuations</p>
        <h1 className="mt-3 text-4xl font-black text-[#083B7A] md:text-5xl">{title}</h1>
        <p className="mt-5 text-lg leading-8 text-slate-700">{intro}</p>
        <div className="mt-10 grid gap-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-black text-[#083B7A]">{section.heading}</h2>
              <p className="mt-3 leading-8 text-slate-700">{section.body}</p>
            </section>
          ))}
        </div>
      </article>
    </section>
  );
}
