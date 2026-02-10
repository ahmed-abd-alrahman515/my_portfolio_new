import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/lib/projects-data"

interface ProjectPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        </div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="mb-8 -ml-4">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
          <div className="mx-auto max-w-3xl">
            <p className="animate-fade-in-up text-sm font-medium uppercase tracking-wider text-primary opacity-0">
              Case Study
            </p>
            <h1 className="animate-fade-in-up animation-delay-100 mt-4 text-balance text-4xl font-bold tracking-tight opacity-0 sm:text-5xl">
              {project.title}
            </h1>
            <p className="animate-fade-in-up animation-delay-200 mt-6 text-pretty text-lg text-muted-foreground opacity-0">
              {project.longDescription}
            </p>
            <div className="animate-fade-in-up animation-delay-300 mt-6 flex flex-wrap gap-2 opacity-0">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
            {(project.liveUrl || project.githubUrl) && (
              <div className="animate-fade-in-up animation-delay-400 mt-8 flex gap-4 opacity-0">
                {project.liveUrl && (
                  <Button asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button asChild variant="outline">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="border-t border-border/40 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-video overflow-hidden rounded-lg border border-border/50 bg-muted">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="border-t border-border/40 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-4 text-2xl font-bold tracking-tight">The Problem</h2>
              <p className="text-muted-foreground">{project.problem}</p>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold tracking-tight">The Solution</h2>
              <p className="text-muted-foreground">{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="border-t border-border/40 bg-secondary/30 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-2xl font-bold tracking-tight">Key Features</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 rounded-lg border border-border/50 bg-card/50 p-4">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="border-t border-border/40 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-2xl font-bold tracking-tight">Technologies Used</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border/50 bg-card/50 px-4 py-2 text-sm font-medium transition-all hover:border-primary/50 hover:bg-primary/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/40 bg-secondary/30 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight">Interested in working together?</h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Let&apos;s discuss how I can help bring your project to life.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
