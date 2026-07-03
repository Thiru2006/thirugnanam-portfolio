import { PortfolioShell } from "@/components/portfolio-shell";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Timeline } from "@/components/sections/timeline";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Research } from "@/components/sections/research";
import { Skills } from "@/components/sections/skills";
import { Achievements } from "@/components/sections/achievements";
import { GitHubSection } from "@/components/sections/github";
import { CurrentFocus } from "@/components/sections/focus";
import { Resume } from "@/components/sections/resume";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

const Divider = () => <div className="trace-divider container-content" aria-hidden />;

export default function Home() {
  return (
    <PortfolioShell>
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Timeline />
      <Divider />
      <Experience />
      <Divider />
      <Projects />
      <Divider />
      <Research />
      <Divider />
      <Skills />
      <Divider />
      <Achievements />
      <Divider />
      <GitHubSection />
      <Divider />
      <CurrentFocus />
      <Divider />
      <Resume />
      <Divider />
      <Contact />
      <Footer />
    </PortfolioShell>
  );
}
