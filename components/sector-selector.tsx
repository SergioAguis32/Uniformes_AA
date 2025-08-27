"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Factory, ArrowRight, CheckCircle } from "lucide-react"

const sectors = [
  {
    id: "industria",
    name: "Para la Industria",
    icon: Factory,
    description: "Uniformes resistentes para entornos industriales",
    color: "from-blue-500 to-slate-600",
    bgColor: "from-blue-50 to-slate-50",
    testimonial:
      "Desde que encargamos los uniformes a Uniformes AA, el equipo va más cómodo y nuestros clientes nos ven más profesionales. No es solo la calidad: es cómo las prendas representan nuestra marca.",
    products: [
      {
        name: "Camisas Industriales",
        description: "Resistentes al desgaste con bolsillos funcionales",
        image: "/placeholder.svg?height=300&width=300",
        features: ["Tela reforzada", "Bolsillos funcionales", "Resistente al desgaste"],
      },
      {
        name: "Pantalones de Lona",
        description: "Máxima durabilidad para trabajo pesado",
        image: "/placeholder.svg?height=300&width=300",
        features: ["Doble costura", "Tela de lona", "Rodilleras reforzadas"],
      },
      {
        name: "Playeras con Reflectivo",
        description: "Seguridad y visibilidad en el trabajo",
        image: "/placeholder.svg?height=300&width=300",
        features: ["Cintas reflectivas", "Alta visibilidad", "Transpirable"],
      },
    ],
  },
  {
    id: "educacion",
    name: "Para Centros Educativos",
    icon: GraduationCap,
    description: "Uniformes cómodos y duraderos para estudiantes",
    color: "from-amber-500 to-orange-500",
    bgColor: "from-amber-50 to-orange-50",
    testimonial:
      "Ver a los estudiantes con estos uniformes es un orgullo: cómodos, bien presentados y con un diseño que representa quiénes somos como institución.",
    products: [
      {
        name: "Chumpas Escolares",
        description: "Comodidad y estilo para el día a día",
        image: "/placeholder.svg?height=300&width=300",
        features: ["Tela suave", "Fácil lavado", "Colores duraderos"],
      },
      {
        name: "Pants Deportivos",
        description: "Para actividades físicas y recreativas",
        image: "/placeholder.svg?height=300&width=300",
        features: ["Tela deportiva", "Elástico", "Secado rápido"],
      },
      {
        name: "Polos y Suéteres",
        description: "Versatilidad para diferentes ocasiones",
        image: "/placeholder.svg?height=300&width=300",
        features: ["Algodón premium", "Bordado de calidad", "Variedad de colores"],
      },
    ],
  },
]

export function SectorSelector() {
  const [activeSector, setActiveSector] = useState("industria")

  const currentSector = sectors.find((s) => s.id === activeSector) || sectors[0]

  return (
    <section
      id="sectores"
      className="relative py-16 md:py-24 bg-gradient-to-bl from-amber-50 via-slate-50 to-blue-50 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 right-10 w-72 h-72 bg-gradient-to-br from-amber-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-10 w-56 h-56 bg-gradient-to-br from-blue-400/15 to-slate-400/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-amber-200/10 to-slate-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
            <Factory className="h-4 w-4 mr-2" />
            Soluciones Especializadas por Sector
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Uniformes Diseñados para su <span className="text-gradient-sunrise">Industria</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
            No vendemos productos genéricos. Cada uniforme está diseñado específicamente para las demandas únicas de su
            sector.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-16 justify-center">
          {sectors.map((sector) => {
            const Icon = sector.icon
            const isActive = activeSector === sector.id
            return (
              <div
                key={sector.id}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  isActive ? "scale-105" : "hover:scale-102"
                }`}
                onClick={() => setActiveSector(sector.id)}
              >
                <div
                  className={`
                  relative p-4 rounded-xl transition-all duration-300 min-w-[200px]
                  ${
                    isActive
                      ? "bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl border-2 border-white/30 shadow-2xl shadow-premium-emerald/20"
                      : "bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-lg border border-white/20 hover:from-white/80 hover:to-white/60 hover:border-white/40 hover:shadow-xl hover:shadow-premium-emerald/10"
                  }
                `}
                  style={{
                    background: isActive
                      ? "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)"
                      : "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.4) 100%)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`
                      w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0
                      ${
                        isActive
                          ? sector.id === "industria"
                            ? "bg-gradient-to-br from-yellow-400 to-amber-500 shadow-lg shadow-yellow-500/30" // Cuadrado amarillo sol para industria
                            : "bg-gradient-to-br from-emerald-600 to-teal-600 shadow-lg shadow-emerald-500/30" // Verde para educación
                          : "bg-gradient-to-br from-slate-100/80 to-slate-200/80 group-hover:from-emerald-100/80 group-hover:to-teal-100/80"
                      }
                    `}
                      style={
                        isActive && sector.id === "industria"
                          ? {
                              backgroundColor: "#EDCA13",
                              backgroundImage: "linear-gradient(135deg, #EDCA13 0%, #F59E0B 100%)",
                            } // Color amarillo sol específico
                          : {}
                      }
                    >
                      <Icon
                        className={`h-6 w-6 transition-colors duration-300 ${
                          isActive
                            ? "text-white drop-shadow-sm" // Icono blanco para ambos sectores cuando están activos
                            : "text-slate-600 group-hover:text-emerald-600"
                        }`}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-slate-900 mb-1 leading-tight">{sector.name}</h3>
                      <p className="text-slate-600 text-xs leading-relaxed">{sector.description}</p>
                    </div>
                  </div>

                  {isActive && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center shadow-md">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                  )}

                  {!isActive && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-premium-emerald/5 via-premium-teal/10 to-premium-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"></div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {currentSector.products.map((product, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white overflow-hidden hover:-translate-y-2"
            >
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${currentSector.bgColor} opacity-20`}></div>
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{product.name}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{product.description}</p>

                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-700">
                        <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full group/btn border-slate-300 hover:border-green-500 hover:text-green-600 bg-transparent"
                  >
                    Ver Detalles
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="max-w-5xl mx-auto relative">
            <div className="absolute -top-4 -left-4 text-6xl text-emerald-200 font-serif">"</div>
            <div className="absolute -bottom-4 -right-4 text-6xl text-emerald-200 font-serif">"</div>
            <blockquote className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed italic px-8 transition-all duration-500">
              {currentSector.testimonial.split("representan nuestra marca").length > 1 ? (
                <>
                  {currentSector.testimonial.split("representan nuestra marca")[0]}
                  <span className="text-gradient-sunrise font-bold not-italic">representan nuestra marca</span>
                  {currentSector.testimonial.split("representan nuestra marca")[1]}
                </>
              ) : currentSector.testimonial.split("quiénes somos como institución").length > 1 ? (
                <>
                  {currentSector.testimonial.split("quiénes somos como institución")[0]}
                  <span className="text-gradient-sunrise font-bold not-italic">quiénes somos como institución</span>
                  {currentSector.testimonial.split("quiénes somos como institución")[1]}
                </>
              ) : (
                currentSector.testimonial
              )}
            </blockquote>
            <div className="mt-6 w-24 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-purple-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
