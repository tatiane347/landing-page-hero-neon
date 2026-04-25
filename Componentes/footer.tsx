import { Instagram, Facebook, Linkedin, Github, Mail, Heart } from "lucide-react"

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/tatianesouza.assessoria?igsh=MWRwbjUxYnE1MWI4aQ==",
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1CDV4TVPro/",
    icon: Facebook,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tatiane-nascimento-68b0622bb?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/tatiane347",
    icon: Github,
  },
  {
    name: "Email",
    href: "mailto:nascimentosolutionstatiane@gmail.com",
    icon: Mail,
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 bg-[#0a0a0f]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Social Links */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Copyright and Credits */}
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Todos os direitos reservados.
          </p>
          
          <p className="flex items-center gap-1.5 text-sm text-gray-400">
            Desenvolvido com
            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
            por
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-semibold text-transparent">
              Tatiane Nascimento
            </span>
          </p>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600" />
    </footer>
  )
}
