"use client"

import { useState } from "react"
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react"

export function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simular envio
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setFormData({ name: "", email: "" })
    alert("Inscrição realizada com sucesso!")
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0a0f]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-[128px]" />
        <div className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-cyan-500/15 blur-[100px]" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[80px]" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-8 px-4 py-16 sm:gap-10 sm:px-6 md:gap-12 md:py-20 lg:flex-row lg:gap-16 xl:gap-20">
        {/* Left Side - Title */}
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-xs text-blue-400 sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Tecnologia de ponta para o seu negócio</span>
          </div>
          
          <h1 className="mb-4 text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Transforme suas
            <span className="relative mx-2 inline-block sm:mx-3">
              <span className="relative z-10 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                ideias
              </span>
              <span className="absolute -bottom-1 left-0 h-2 w-full bg-gradient-to-r from-blue-500/40 to-cyan-500/40 blur-lg sm:-bottom-2 sm:h-3" />
            </span>
            em realidade digital
          </h1>
          
          <p className="mb-6 max-w-xl text-pretty text-base text-gray-400 sm:mb-8 sm:text-lg lg:text-xl">
            Desbloqueie o potencial máximo da sua empresa com soluções 
            inovadoras que impulsionam resultados e criam experiências extraordinárias.
          </p>

          {/* Features */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6 lg:items-start lg:gap-8">
            <div className="flex items-center gap-2 text-sm text-gray-300 sm:gap-3 sm:text-base">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 sm:h-10 sm:w-10">
                <Zap className="h-4 w-4 text-blue-400 sm:h-5 sm:w-5" />
              </div>
              <span>Alta Performance</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300 sm:gap-3 sm:text-base">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 sm:h-10 sm:w-10">
                <Shield className="h-4 w-4 text-cyan-400 sm:h-5 sm:w-5" />
              </div>
              <span>100% Seguro</span>
            </div>
          </div>
        </div>

        {/* Right Side - Glassmorphism Form */}
        <div className="w-full max-w-sm sm:max-w-md lg:flex-shrink-0">
          <div className="glass rounded-xl p-6 shadow-2xl sm:rounded-2xl sm:p-8">
            <div className="mb-4 text-center sm:mb-6">
              <h2 className="mb-1 text-xl font-semibold text-white sm:mb-2 sm:text-2xl">
                Comece agora
              </h2>
              <p className="text-sm text-gray-400 sm:text-base">
                Cadastre-se e receba acesso exclusivo
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-300 sm:mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all focus:border-blue-500/50 focus:bg-white/10 focus:ring-2 focus:ring-blue-500/20 sm:rounded-xl sm:px-4 sm:py-3.5 sm:text-base"
                  placeholder="Digite seu nome"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-300 sm:mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all focus:border-blue-500/50 focus:bg-white/10 focus:ring-2 focus:ring-blue-500/20 sm:rounded-xl sm:px-4 sm:py-3.5 sm:text-base"
                  placeholder="seuemail@exemplo.com"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="neon-blue group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-3 text-base font-semibold text-white transition-all duration-300 hover:from-blue-500 hover:to-cyan-500 disabled:opacity-70 sm:rounded-xl sm:px-6 sm:py-4 sm:text-lg"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                        <circle 
                          className="opacity-25" 
                          cx="12" cy="12" r="10" 
                          stroke="currentColor" 
                          strokeWidth="4" 
                          fill="none" 
                        />
                        <path 
                          className="opacity-75" 
                          fill="currentColor" 
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Garantir minha vaga
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </span>
                
                {/* Button shine effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>
            </form>

            <p className="mt-4 text-center text-xs text-gray-500 sm:mt-6 sm:text-sm">
              Ao se cadastrar, você concorda com nossos{" "}
              <a href="#" className="text-blue-400 hover:underline">Termos de Uso</a>
              {" "}e{" "}
              <a href="#" className="text-blue-400 hover:underline">Política de Privacidade</a>
            </p>

            {/* Trust badges */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 border-t border-white/10 pt-4 sm:mt-6 sm:gap-4 sm:pt-6">
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <Shield className="h-3.5 w-3.5 text-green-500 sm:h-4 sm:w-4" />
                <span>Dados protegidos</span>
              </div>
              <div className="h-3 w-px bg-white/10 sm:h-4" />
              <div className="text-xs text-gray-500">
                +10.000 usuários
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
