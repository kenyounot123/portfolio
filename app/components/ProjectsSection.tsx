import { SectionLabel } from "./SectionLabel";

type ProjectAside = { kind: "link"; label: string; href: string } | { kind: "note"; text: string };

interface Project {
  name: string;
  aside: ProjectAside;
  result: string;
  description: string;
  stack: string[];
}

const projects: Project[] = [
  {
    name: "MoneyPouch",
    aside: { kind: "link", label: "demo.moneypouch.app", href: "https://demo.moneypouch.app" },
    result: "Tracking spending in Excel was a chore — so I built a tracker that takes 3 seconds.",
    description:
      "A free, open-source, self-hosted expense tracker. Press ⌘K, type “Chipotle 11.25 yesterday,” hit Enter — it parses the merchant, amount, and date. Imports old Excel expenses with dedupe, syncs bank transactions optionally via SimpleFIN, and shows where your money goes at a glance. No budgets, no net worth, your data on your own server.",
    stack: ["Ruby on Rails", "Hotwire", "Tailwind", "SQLite", "Docker"],
  },
  {
    name: "ChatPDF",
    aside: { kind: "link", label: "GitHub", href: "https://github.com/kenyounot123/chatpdf" },
    result: "Chat with a PDF, with answers only from that PDF.",
    description:
      "A RAG app where a metadata filter scopes every search to the chat's own file. It caches embeddings to skip repeat work and says so when the answer isn't in the document.",
    stack: ["Next.js", "Convex", "LangChain", "OpenAI"],
  },
  {
    name: "Rilla hiring hackathon",
    aside: { kind: "note", text: "Finalist, 200+ teams" },
    result: "Turned 45-minute sales call reviews into 5-minute summaries.",
    description:
      "A GPT-4 tool that flags objections, commitments, and coaching moments in call transcripts. Managers highlight passages to steer the analysis without rerunning the whole call.",
    stack: ["Next.js", "GPT-4", "36 hours"],
  },
];

const ASIDE_CLASS = "text-[15px] leading-[18px]";

function Aside({ aside }: { aside: ProjectAside }) {
  switch (aside.kind) {
    case "link":
      return (
        <a
          href={aside.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${ASIDE_CLASS} font-medium text-link`}
        >
          {aside.label} ↗
        </a>
      );
    case "note":
      return <span className={`${ASIDE_CLASS} font-medium text-muted`}>{aside.text}</span>;
    default: {
      const _exhaustive: never = aside;
      return _exhaustive;
    }
  }
}

export function ProjectsSection() {
  return (
    <section className="flex flex-col gap-10">
      <SectionLabel>Projects</SectionLabel>
      {projects.map((project) => (
        <article key={project.name} className="flex flex-col gap-2">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-xl leading-6 font-semibold tracking-[-0.01em] text-ink">{project.name}</h3>
            <Aside aside={project.aside} />
          </div>
          <p className="text-base leading-[26px] font-semibold text-ink">{project.result}</p>
          <p className="text-[17px] leading-7 text-body">{project.description}</p>
          <p className="text-sm leading-[22px] text-muted">{project.stack.join(" · ")}</p>
        </article>
      ))}
    </section>
  );
}
