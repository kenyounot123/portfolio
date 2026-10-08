import { ContactSection } from "./components/ContactSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { Hero } from "./components/Hero";
import { ProjectsSection } from "./components/ProjectsSection";
import { ToolkitSection } from "./components/ToolkitSection";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-[672px] flex-col gap-[72px] px-4 py-16 sm:py-[120px]">
      <Hero />
      <ExperienceSection />
      <ProjectsSection />
      <ToolkitSection />
      <ContactSection />
    </main>
  );
}
