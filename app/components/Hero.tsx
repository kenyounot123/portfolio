import { ThemeSwitcher } from "./ThemeSwitcher";

const links = [
  { label: "Resume", href: "/resume.pdf" },
  { label: "GitHub", href: "https://github.com/kenyounot123" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ken-h-lu/" },
] as const;

export function Hero() {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <h1 className="text-[40px] leading-[48px] font-bold tracking-[-0.025em] text-ink">Ken Lu</h1>
          <ThemeSwitcher />
        </div>
        <p className="text-lg leading-7 font-medium text-muted">
          Full-stack engineer at Infocus Healthcare · Brooklyn, NY
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-[22px] leading-8 font-semibold tracking-[-0.01em] text-ink">
          I build web products that give teams back hours every week.
        </p>
        <p className="text-lg leading-[30px] text-body">
          I enjoy working closely with product teams and users, taking ownership of problems, and turning ideas into
          software that people actually use. I’m always looking to deepen my technical skills while becoming a stronger
          product-minded engineer.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-1">
        <a
          href="mailto:kenlu519@gmail.com"
          className="rounded-lg bg-ink px-[18px] py-2.5 text-[15px] leading-[18px] font-semibold text-page"
        >
          Email me
        </a>
        {links.map(({ label, href }) => (
          <a key={label} href={href} className="text-[15px] leading-[18px] font-medium text-link">
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}
