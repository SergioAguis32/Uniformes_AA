import { ArrowRight, Award, Clock, Globe, Play, CheckCircle } from "lucide-react"
import { GlassPremiumButton } from "@/components/ui/glass-premium-button"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] md:min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-amber-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-amber-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
              <Award className="h-4 w-4 mr-2" />
              Líderes en Uniformes Empresariales
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Uniformes Profesionales que <span className="text-gradient-sunrise">Reflejan su Marca</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl">
                Soluciones integrales de uniformes para empresas e instituciones que exigen un socio confiable. Deje de
                preocuparse por la calidad y los plazos de entrega.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-slate-900">+10</div>
                <div className="text-sm text-slate-600">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-slate-900">100%</div>
                <div className="text-sm text-slate-600">Entrega garantizada</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-slate-900">Export</div>
                <div className="text-sm text-slate-600">Calidad exportación</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <GlassPremiumButton size="lg" className="px-8 py-4 text-lg font-semibold">
                <span>Agendar Demostración</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </GlassPremiumButton>

              <GlassPremiumButton variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold">
                <Play className="mr-2 h-5 w-5" />
                Ver Proceso
              </GlassPremiumButton>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/placeholder.svg?height=800&width=800"
                alt="Trabajadores profesionales de diferentes industrias con uniformes de calidad"
                className="w-full h-full object-cover"
              />
              {/* Overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Calidad Garantizada</div>
                  <div className="text-xs text-slate-600">Certificación ISO</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Clock className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Entrega Puntual</div>
                  <div className="text-xs text-slate-600">Tiempo récord</div>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -z-10 top-8 right-8 w-full h-full bg-gradient-to-br from-blue-200/50 to-amber-200/50 rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
