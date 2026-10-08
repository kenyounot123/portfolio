export function ContactSection() {
  return (
    <section className="flex flex-col gap-4 border-t border-rule pt-10">
      <h2 className="text-[28px] leading-9 font-bold tracking-[-0.02em] text-ink">Hiring, or need something built?</h2>
      <p className="text-lg leading-[30px] text-body">
        Email me about full-time roles or freelance projects. A short note on what you&apos;re building is plenty.
      </p>
      <a href="mailto:kenlu519@gmail.com" className="text-xl leading-6 font-semibold text-link">
        kenlu519@gmail.com
      </a>
      <p className="pt-6 text-[15px] leading-6 text-muted">
        B.A. Mathematical Sciences, Binghamton University. Off the keyboard I play pickleball, boulder, and do olympic
        weightlifting.
      </p>
    </section>
  );
}
