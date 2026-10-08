export function ContactSection() {
  return (
    <section className="flex flex-col gap-4 border-t border-rule pt-10">
      <h2 className="text-[28px] leading-9 font-bold tracking-[-0.02em] text-ink">Hiring, or need something built?</h2>
      <p className="text-lg leading-[30px] text-body">
        Email or message me about any full time opportunities or projects you need help on. If you just want to chat,
        feel free to message me!
      </p>
      <a href="mailto:kenlu519@gmail.com" className="text-xl leading-6 font-semibold text-link">
        kenlu519@gmail.com
      </a>
      <p className="pt-6 text-[15px] leading-6 text-muted">
        B.A. Mathematical Sciences, Binghamton University. Outside of work I like to play pickleball, go bouldering, and
        also olympic weightlifting.
      </p>
    </section>
  );
}
