import { SectionLabel } from "./SectionLabel";

interface ToolkitRow {
  area: string;
  tools: string;
}

const toolkit: ToolkitRow[] = [
  { area: "Backend", tools: "Ruby on Rails, SQL, REST APIs, background jobs, RSpec" },
  { area: "Frontend", tools: "React, Next.js, Hotwire, Tailwind CSS" },
  { area: "AI", tools: "OpenAI, Whisper, LangChain, RAG pipelines" },
  { area: "Auth and infra", tools: "Auth0 (OIDC, OAuth2), SFTP, Docker, Kamal, AWS, DigitalOcean" },
];

export function ToolkitSection() {
  return (
    <section className="flex flex-col gap-5">
      <SectionLabel>Toolkit</SectionLabel>
      <dl className="flex flex-col gap-2.5">
        {toolkit.map(({ area, tools }) => (
          <div key={area} className="flex gap-5">
            <dt className="w-[116px] shrink-0 text-base leading-[26px] font-bold text-ink">{area}</dt>
            <dd className="flex-1 text-base leading-[26px] text-body">{tools}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
