import { Reveal } from "./Reveal";

export function ContactCTA() {
  return (
    <section className="bg-brand text-on-brand-deep">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <Reveal>
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
            Ready to see PAIR against your own portfolio?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/85">
            Email Dr Shamaila Iram directly to arrange a walkthrough. No forms, no sign up,
            just a conversation about your housing stock.
          </p>
          <a
            href="mailto:s.iram@hud.ac.uk"
            className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-base font-bold text-brand-deep shadow-xl transition-transform hover:-translate-y-0.5"
          >
            <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            s.iram@hud.ac.uk
          </a>
        </Reveal>
      </div>
    </section>
  );
}
