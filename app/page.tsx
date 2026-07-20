import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Domains from "@/components/Domains";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-ink text-text">
      <Nav />
      <Hero />
      <Experience />
      <Domains />
      <Projects />
      <Process />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}
