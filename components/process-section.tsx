import { MessageSquare, Eye, Cog, Truck } from "lucide-react"

const processSteps = [
  {
    icon: MessageSquare,
    title: "Consulta Estratégica",
    description:
      "Agende una demostración para que entendamos sus necesidades y pueda ver y tocar la calidad de nuestros materiales.",
  },
  {
    icon: Eye,
    title: "Muestra para Aprobación",
    description:
      "Con un pedido confirmado, creamos una muestra física personalizada. Usted no aprueba la producción hasta estar 100% satisfecho.",
  },
  {
    icon: Cog,
    title: "Producción de Precisión",
    description: "Nuestros talleres inician la confección bajo los más altos estándares de calidad.",
  },
  {
    icon: Truck,
    title: "Entrega Puntual",
    description: "Su pedido, completo y a tiempo, listo para elevar la imagen de su institución.",
  },
]

export function ProcessSection() {
  return (
    <section
      id="proceso"
      className="relative py-12 md:py-20 bg-gradient-to-tl from-slate-50 via-amber-50 to-blue-50 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-20 w-64 h-64 bg-gradient-to-br from-slate-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-20 w-48 h-48 bg-gradient-to-br from-blue-400/20 to-amber-400/20 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4 md:mb-6">
            Un Proceso Transparente, Un <span className="text-gradient-sunrise">Resultado Impecable</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
            Desde la primera consulta hasta la entrega final, cada paso está diseñado para su tranquilidad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative text-center group">
                <div className="relative z-20 -mb-6 flex justify-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                </div>

                <div className="relative z-10 bg-white rounded-2xl p-8 h-full shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600 text-base leading-relaxed">{step.description}</p>
                </div>

                <div className="absolute -z-10 top-4 left-4 w-full h-full bg-gradient-to-br from-emerald-500 to-teal-600 opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-500"></div>

                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald-300 to-teal-400 z-10"></div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
