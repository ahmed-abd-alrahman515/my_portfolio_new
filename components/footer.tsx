import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { 
  FaGithub,
  FaLinkedin,
  FaTiktok,
  FaEnvelope,
  FaYoutube
} from "react-icons/fa"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              Ahmed<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ahmed-alaydee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-alayadi-3a3bb3291/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:ahmedalayde86@gmail.com"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>

             <a
              href="https://www.tiktok.com/@alaydi.dev?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="TikTok"
            >
              <FaTiktok className="h-5 w-5" />
            </a>

             <a
              href="https://www.youtube.com/@alaydecoding"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="TikTok"
            >
              <FaYoutube className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ahmed Alaydi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
