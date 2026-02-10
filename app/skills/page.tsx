import { SectionHeader } from "@/components/section-header"

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript", level: 95 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML/CSS", level: 95 },
      { name: "shadcn/ui", level: 85 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "PHP", level: 92 },
      { name: "Laravel", level: 90 },
      { name: "REST APIs", level: 88 },
      { name: "Authentication", level: 85 },
      { name: "Payment Systems", level: 80 },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MySQL", level: 88 },
      { name: "phpMyAdmin", level: 85 },
      { name: "Git", level: 90 },
      { name: "GitHub", level: 88 },
      { name: "VS Code", level: 95 },
      { name: "XAMPP", level: 85 },
      { name: "Context API", level: 82 },
    ],
  },
  {
    title: "UI/UX & Performance",
    skills: [
      { name: "Responsive Design", level: 92 },
      { name: "Design Systems", level: 85 },
      { name: "Performance Optimization", level: 88 },
      { name: "Clean UI Architecture", level: 86 },
    ],
  },
]

export default function SkillsPage() {
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
              Technical Skills
            </p>
            <h1 className="animate-fade-in-up animation-delay-100 mt-4 text-balance text-4xl font-bold tracking-tight opacity-0 sm:text-5xl">
              Skills & Expertise
            </h1>
            <p className="animate-fade-in-up animation-delay-200 mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground opacity-0">
              A comprehensive toolkit for building modern, production-ready web applications
            </p>
          </div>
        </div>
      </section>

      {/* Skills Grid Section */}
      <section className="border-t border-border/40 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="rounded-lg border border-border/50 bg-card/50 p-6 transition-all hover:border-primary/30 hover:bg-card"
              >
                <h2 className="mb-6 text-xl font-semibold">{category.title}</h2>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="animate-fade-in-up opacity-0"
                      style={{
                        animationDelay: `${categoryIndex * 100 + skillIndex * 50}ms`,
                        animationFillMode: "forwards",
                      }}
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-secondary">
                        <div
                          className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Overview */}
      <section className="border-t border-border/40 bg-secondary/30 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Tech Stack"
            title="Technologies I Work With"
            description="Modern tools and frameworks for building exceptional digital products"
          />
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "JavaScript",
              "Tailwind CSS",
              "HTML",
              "CSS",
              "shadcn/ui",
              "PHP",
              "Laravel",
              "REST APIs",
              "MySQL",
              "Git",
              "GitHub",
              "VS Code",
              "XAMPP",
              "phpMyAdmin",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border/50 bg-card/50 px-4 py-2 text-sm font-medium transition-all hover:border-primary/50 hover:bg-primary/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
