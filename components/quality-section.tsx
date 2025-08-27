import { Shield, Scissors, Clock, Award } from "lucide-react"

const qualityFeatures = [
  {
    icon: Scissors,
    title: "Costuras de Precisión",
    description:
      "Aplicamos estándares de maquila de exportación donde cada costura casa a la perfección. Un acabado que sus colaboradores notarán.",
    stat: "99.8%",
    statLabel: "Precisión",
    color: "from-green-500 to-green-600", // Cambiado de azul a verde
  },
  {
    icon: Shield,
    title: "Durabilidad Garantizada",
    description:
      "Utilizamos puntadas de seguridad, doble costura y remates estratégicos para prendas que resisten el uso más exigente.",
    stat: "3x",
    statLabel: "Más Duradero",
    color: "from-blue-500 to-blue-600", // Cambiado de verde a azul
  },
  {
    icon: Clock,
    title: "Su Socio de Confianza",
    description:
      "Somos más que un proveedor. Calculamos los tiempos de producción con un margen de seguridad para garantizar siempre la fecha de entrega acordada.",
    stat: "100%",
    statLabel: "Puntualidad",
    color: "from-amber-500 to-amber-600",
  },
]

const certifications = [
  { name: "Gestión de Calidad PDCA", description: "Modelo de Aseguramiento Sistemático" },
  { name: "Cumplimiento RSL Textil", description: "Libre de Sustancias Restringidas" },
  { name: "Principios de Manufactura Ética", description: "Prácticas Laborales Justas y Seguras" },
]

export function QualitySection() {
  return (
    <section
      id="calidad"
      className="relative py-16 md:py-24 bg-gradient-to-tr from-blue-50 via-amber-50 to-slate-50 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-10 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-slate-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-10 w-64 h-64 bg-gradient-to-br from-slate-400/10 to-amber-400/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-blue-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-gradient-to-br from-slate-400/15 to-blue-400/15 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
            <Award className="h-4 w-4 mr-2" />
            Estándares de Exportación
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            El Estándar de Calidad que su <span className="text-gradient-sunrise">Marca Merece</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto mb-8">
            Nuestro compromiso con la excelencia se refleja en cada detalle de nuestros uniformes
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl px-6 py-3 shadow-md border border-slate-200">
                <div className="font-bold text-slate-900 text-sm">{cert.name}</div>
                <div className="text-xs text-slate-600">{cert.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {qualityFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="relative group">
                {/* Card principal */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Icono con estadística */}
                  <div className="relative mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg group-hover:scale-110 transition-all duration-500`}
                    >
                      <Icon className="h-10 w-10 text-white" />
                    </div>

                    {/* Estadística flotante */}
                    <div className="absolute -top-2 -right-2 bg-white rounded-xl px-3 py-1 shadow-lg border border-slate-200">
                      <div className="text-lg font-bold text-slate-900">{feature.stat}</div>
                      <div className="text-xs text-slate-600">{feature.statLabel}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">{feature.description}</p>
                </div>

                {/* Elemento decorativo de fondo */}
                <div
                  className={`absolute -z-10 top-4 left-4 w-full h-full bg-gradient-to-br ${feature.color} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
