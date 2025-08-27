"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, Phone, Eye, FileText } from "lucide-react"
import { GlassPremiumButton } from "@/components/ui/glass-premium-button"

export function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    telefono: "",
    email: "",
    sector: "",
    mensaje: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)

    // Reset form
    setFormData({
      nombre: "",
      empresa: "",
      telefono: "",
      email: "",
      sector: "",
      mensaje: "",
    })

    setIsSubmitting(false)
    alert("¡Gracias por su consulta! Nos pondremos en contacto pronto.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section
      id="contacto"
      className="relative py-12 md:py-20 bg-gradient-to-br from-blue-50 via-slate-50 to-amber-50 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-amber-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-2xl"></div>
        <div className="absolute top-0 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-slate-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-20 w-48 h-48 bg-gradient-to-br from-slate-400/20 to-amber-400/20 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4 md:mb-6">
            ¿Listo para Transformar la <span className="text-gradient-sunrise">Imagen de su Empresa?</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Comience hoy mismo con una consulta gratuita. Sin compromisos, solo soluciones profesionales.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-3 gap-3 md:gap-6 mb-12">
          <div className="text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 md:mb-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
              <Phone className="w-5 h-5 md:w-8 md:h-8 text-white" />
            </div>
            <h3 className="font-bold text-slate-900 mb-1 md:mb-2 text-sm md:text-base">Llamada de Consulta</h3>
            <p className="text-xs md:text-sm text-slate-600">Análisis de sus necesidades específicas</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 md:mb-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
              <Eye className="w-5 h-5 md:w-8 md:h-8 text-white" />
            </div>
            <h3 className="font-bold text-slate-900 mb-1 md:mb-2 text-sm md:text-base">Demostración de Materiales</h3>
            <p className="text-xs md:text-sm text-slate-600">Vea y toque la calidad de primera mano</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 md:mb-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
              <FileText className="w-5 h-5 md:w-8 md:h-8 text-white" />
            </div>
            <h3 className="font-bold text-slate-900 mb-1 md:mb-2 text-sm md:text-base">Propuesta Personalizada</h3>
            <p className="text-xs md:text-sm text-slate-600">Solución adaptada a su presupuesto</p>
          </div>
        </div>

        <Card className="bg-white/95 backdrop-blur-lg border-0 shadow-2xl rounded-3xl overflow-hidden">
          <CardHeader className="text-center pb-8 pt-10">
            <CardTitle className="text-3xl md:text-4xl font-bold text-slate-900">
              Solicite su <span className="text-gradient-sunrise">Consulta Gratuita</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="px-10 pb-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="nombre" className="block text-base font-semibold text-slate-700 mb-3">
                    Nombre Completo *
                  </label>
                  <Input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="border-slate-200 focus:border-green-500 focus:ring-green-500 h-12 text-base"
                    placeholder="Su nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="empresa" className="block text-base font-semibold text-slate-700 mb-3">
                    Empresa/Institución *
                  </label>
                  <Input
                    id="empresa"
                    name="empresa"
                    type="text"
                    required
                    value={formData.empresa}
                    onChange={handleChange}
                    className="border-slate-200 focus:border-green-500 focus:ring-green-500 h-12 text-base"
                    placeholder="Nombre de su empresa"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="telefono" className="block text-base font-semibold text-slate-700 mb-3">
                    Teléfono *
                  </label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    className="border-slate-200 focus:border-green-500 focus:ring-green-500 h-12 text-base"
                    placeholder="+502 0000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-base font-semibold text-slate-700 mb-3">
                    Correo Electrónico *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="border-slate-200 focus:border-green-500 focus:ring-green-500 h-12 text-base"
                    placeholder="su@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="sector" className="block text-base font-semibold text-slate-700 mb-3">
                  Sector de su Empresa
                </label>
                <select
                  id="sector"
                  name="sector"
                  value={formData.sector}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 h-12 text-base"
                >
                  <option value="">Seleccione un sector</option>
                  <option value="industrial">Industrial</option>
                  <option value="educativo">Educativo</option>
                  <option value="salud">Salud</option>
                  <option value="hoteleria">Hotelería</option>
                  <option value="corporativo">Corporativo</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-base font-semibold text-slate-700 mb-3">
                  Cuéntenos sobre sus necesidades
                </label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  rows={5}
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="border-slate-200 focus:border-green-500 focus:ring-green-500 text-base"
                  placeholder="Describa qué tipo de uniformes necesita, cantidad aproximada, fechas importantes, etc."
                />
              </div>

              <GlassPremiumButton type="submit" size="lg" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    Solicitar Consulta Gratuita
                    <Send className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </GlassPremiumButton>
            </form>
          </CardContent>
        </Card>

        <div className="text-center mt-10">
          <p className="text-slate-600 text-lg">
            O llámenos directamente al{" "}
            <a
              href="tel:+50222345678"
              className="font-bold text-slate-900 hover:text-green-600 transition-colors text-xl"
            >
              +502 2234-5678
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
