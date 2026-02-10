import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Database,
  Download,
  Layout,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import { projects } from "@/lib/projects-data";
import { ProjectCard } from "@/components/project-card";
import { SkillCard } from "@/components/skill-card";

const featuredSkills = [
  {
    icon: Layout,
    title: "Frontend Development",
    description:
      "Crafting high-performance interfaces with React, Next.js, and modern UI architecture",
  },
  {
    icon: Database,
    title: "Backend Development",
    description:
      "Designing scalable APIs and systems with Laravel, PHP, and MySQL for real production workloads.",
  },
  {
    icon: Code2,
    title: "Full-Stack Integration",
    description:
      "Connecting frontend and backend into one cohesive, maintainable, and scalable system",
  },
  {
    icon: Sparkles,
    title: "Performance & Security",
    description:
      "Optimizing applications for speed, stability, security, and production readiness",
  },
];

export default function HomePage() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        </div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Top Label */}
            <p className="animate-fade-in-up text-sm font-medium uppercase tracking-[0.25em] text-primary opacity-0">
              Full-Stack Developer
            </p>

            {/* Main Heading */}
            <h1 className="animate-fade-in-up animation-delay-100 mt-4 text-4xl font-bold tracking-tight leading-tight opacity-0 sm:text-5xl lg:text-6xl">
              Engineering Web Systems
              <br />
              {/* Stack Line */}
              <span className="mt-3 block text-primary">
                Laravel • React • Next.js
              </span>
              {/* Architecture Line */}
              <span className="mt-2 block text-2xl font-semibold text-foreground/80 sm:text-3xl">
                Production-Ready Architecture
              </span>
            </h1>

            {/* Description */}
            <p className="animate-fade-in-up animation-delay-200 mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground opacity-0">
              I build production-grade web systems and teach developers how to
              do the same. Using Laravel, React, and Next.js, I focus on clean
              architecture, scalability, and real-world performance.
            </p>

            {/* Buttons */}
            <div className="animate-fade-in-up animation-delay-300 mt-10 flex flex-col items-center justify-center gap-4 opacity-0 sm:flex-row">
              <Button asChild size="lg" className="min-w-[180px]">
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="min-w-[180px]"
              >
                <a
                  href="/Ahmed_Samir.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  Download CV
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="min-w-[180px] bg-transparent"
              >
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="border-t border-border/40 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="WHAT I ENGINEER"
            title="Expertise & Skills"
            description="Real systems. Clean architecture. Production mindset."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredSkills.map((skill, index) => (
              <SkillCard
                key={skill.title}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
                className={`animate-fade-in-up opacity-0 animation-delay-${(index + 1) * 100}`}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/skills">
                View All Skills
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="border-t border-border/40 bg-secondary/30 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="REAL WORLD PROJECTS"
            title="Systems I’ve Built"
            description="Designed, engineered, and shipped to production."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                className={`animate-fade-in-up opacity-0 animation-delay-${(index + 1) * 100}`}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/40 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s Build Something Great
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Have a project in mind? I&apos;m always open to discussing new
              opportunities and interesting challenges.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
