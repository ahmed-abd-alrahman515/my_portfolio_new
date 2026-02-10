import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/projects-data"

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        </div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="animate-fade-in-up text-sm font-medium uppercase tracking-wider text-primary opacity-0">
              Portfolio
            </p>
            <h1 className="animate-fade-in-up animation-delay-100 mt-4 text-balance text-4xl font-bold tracking-tight opacity-0 sm:text-5xl">
              My Projects
            </h1>
            <p className="animate-fade-in-up animation-delay-200 mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground opacity-0">
              A collection of production-ready applications showcasing full-stack development expertise
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="border-t border-border/40 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                className={`animate-fade-in-up opacity-0`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "forwards",
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
