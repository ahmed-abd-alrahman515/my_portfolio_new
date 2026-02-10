import Image from "next/image";
import { SectionHeader } from "@/components/section-header";
import { Code2, Lightbulb, Target, Zap, Smartphone } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Quality First",
    description:
      "Every feature is built with scalability, maintainability, and real production usage in mind — not just demos.",
  },
  {
    icon: Zap,
    title: "Performance Driven",
    description:
      "From database queries to frontend rendering, performance is always a priority in my applications.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "I constantly evolve with modern stacks like Next.js and prepare for mobile development with React Native.",
  },
  {
    icon: Code2,
    title: "Clean Architecture",
    description:
      "I follow clean architecture principles to build systems that are easy to scale, debug, and extend.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Text */}
            <div>
              <p className="animate-fade-in-up text-sm font-medium uppercase tracking-wider text-primary opacity-0">
                About Me
              </p>

              <h1 className="animate-fade-in-up animation-delay-100 mt-4 text-4xl font-bold tracking-tight opacity-0 sm:text-5xl">
                Ahmed Alaydi
              </h1>

              <p className="animate-fade-in-up animation-delay-200 mt-2 text-xl text-muted-foreground opacity-0">
                Full-Stack Developer (Laravel • React • Next.js)
              </p>
            </div>

            {/* Image */}
            <div className="animate-fade-in-up animation-delay-300 relative mx-auto h-72 w-72 overflow-hidden rounded-2xl border border-border/50 opacity-0">
              <Image
                src="image/myimage.jpeg"
                alt="Ahmed Alaydi - Full Stack Developer"
                width={600}
                height={600}
                priority
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= BIO SECTION ================= */}
      <section className="border-t border-border/40 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid max-w-5xl gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Bio */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Building Digital Excellence
              </h2>

              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  I’m a Full-Stack Developer with hands-on experience building
                  scalable, high-performance web applications using{" "}
                  <strong>Laravel</strong>,<strong> React</strong>, and{" "}
                  <strong>Next.js</strong>. I’ve delivered 6+ production-ready
                  systems serving thousands of active users.
                </p>

                <p>
                  On the frontend, I specialize in React and Next.js with
                  TypeScript, focusing on clean UI architecture, SEO-friendly
                  pages, and smooth user experiences. On the backend, I design
                  secure RESTful APIs using Laravel, MySQL, and token-based
                  authentication.
                </p>

                <p>
                  I’ve integrated real-world features such as payment gateways,
                  real-time notifications, dashboards, and role-based systems.
                  Currently, I’m expanding my skill set toward
                  <strong> React Native</strong> to build cross-platform mobile
                  applications.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-8">
              <div className="rounded-lg border border-border/50 bg-card/50 p-6">
                <h3 className="mb-4 font-semibold">Experience Highlights</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Building scalable e-commerce & business platforms (2K+
                    users)
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Developing admin dashboards & role-based systems
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Designing RESTful APIs with Laravel & MySQL
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Integrating payment gateways & third-party services
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Performance optimization & database tuning
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-border/50 bg-card/50 p-6">
                <h3 className="mb-4 font-semibold">Current Focus</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Advanced Next.js architecture & performance
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Clean backend architecture with Laravel
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Preparing mobile apps with React Native
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VALUES SECTION ================= */}
      <section className="border-t border-border/40 bg-secondary/30 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="My Approach"
            title="Values & Principles"
            description="The mindset I follow when building real-world applications"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-lg border border-border/50 bg-card/50 p-6 transition-all hover:border-primary/30 hover:bg-card"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
