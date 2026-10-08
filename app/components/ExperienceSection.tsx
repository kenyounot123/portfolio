import { SectionLabel } from "./SectionLabel";

interface Highlight {
  result: string;
  detail: string;
}

interface Role {
  company: string;
  period: string;
  title: string;
  summary?: string;
  highlights: Highlight[];
}

const roles: Role[] = [
  {
    company: "Infocus Healthcare",
    period: "2024 - Now",
    title: "Full-stack engineer",
    summary: "Rails services and an Angular app for a healthcare coaching platform.",
    highlights: [
      {
        result: "Saved coaches 10 hours a week",
        detail: "Led a vendor integration over SFTP that attaches screening results to each member automatically.",
      },
      {
        result: "Moved 60K+ users to a single login",
        detail: "Integrated Auth0 SSO across an Angular app and several Rails services.",
      },
      {
        result: "Gave 15+ hours a week back to client work",
        detail:
          "Designed a rule-based messaging system that sends 600+ messages a week, with a database constraint that blocks duplicates.",
      },
      {
        result: "Cut page load times by 50%",
        detail: "Tuned SQL queries and indexes on a Rails monolith with 120K+ case records.",
      },
    ],
  },
  {
    company: "Freelance",
    period: "2025",
    title: "Full-stack engineer",
    summary: "A speech therapy app for apraxia research, built in Rails with OpenAI Whisper.",
    highlights: [
      {
        result: "Automated feedback for 20+ apraxia patients",
        detail: "OpenAI Whisper transcribes each session, and pseudonymous logins mean the app collects zero PII.",
      },
      {
        result: "Cut researchers' manual data work by 80%",
        detail: "Built an admin dashboard so clinicians pull their own progress reports.",
      },
    ],
  },
  {
    company: "Headstarter AI",
    period: "2024",
    title: "Software engineer fellow",
    highlights: [
      {
        result: "Reached 200+ users and 1,000+ generations in two months",
        detail: "Launched Flash Prep AI, an AI flashcard SaaS built on Next.js and OpenAI.",
      },
    ],
  },
];

function RoleItem({ role, first }: { role: Role; first: boolean }) {
  return (
    <article className={`flex flex-col gap-5 ${first ? "" : "border-t border-rule pt-10"}`}>
      <header className="flex flex-col gap-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-xl leading-7 font-semibold tracking-[-0.01em] text-ink">{role.company}</h3>
          <span className="shrink-0 text-[15px] leading-[18px] tabular-nums text-muted">{role.period}</span>
        </div>
        <p className="text-base leading-6 font-medium text-body">{role.title}</p>
      </header>
      {role.summary && <p className="text-base leading-[26px] text-subtle">{role.summary}</p>}
      <ul className="flex flex-col gap-[18px] pt-1">
        {role.highlights.map(({ result, detail }) => (
          <li key={result} className="flex items-start">
            <div className="flex w-5 shrink-0 pt-2.5">
              <span className="size-1.5 rounded-[2px] bg-ink" />
            </div>
            <div className="flex flex-1 flex-col gap-0.5">
              <p className="text-base leading-[26px] font-semibold text-ink">{result}</p>
              <p className="text-base leading-[26px] text-subtle">{detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function ExperienceSection() {
  return (
    <section className="flex flex-col gap-10">
      <SectionLabel>Experience</SectionLabel>
      {roles.map((role, i) => (
        <RoleItem key={role.company} role={role} first={i === 0} />
      ))}
    </section>
  );
}
