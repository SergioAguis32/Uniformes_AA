"use client"

import { Button } from "@/components/ui/button"
import { GlassPremiumButton } from "@/components/ui/glass-premium-button"
import { Menu, X, Phone, Mail, MapPin } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center">
              <Image
                src="/logo-aa-uniformes.svg"
                alt="AA Uniformes"
                width={160}
                height={60}
                className="h-12 md:h-16 w-auto"
                priority
              />
            </div>
          </div>

          <div>
            <GlassPremiumButton size="sm" className="md:hidden text-sm px-3 py-2">
              Cotizar
            </GlassPremiumButton>
            <GlassPremiumButton size="lg" className="hidden md:block text-base px-6 py-3">
              Cotizar Ahora
            </GlassPremiumButton>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t bg-white py-4">
            <div className="px-4 py-3 bg-slate-50 border-b mb-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-amber-500" />
                  <span>+502 2234-5678</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-amber-500" />
                  <span>ventas@uniformesaa.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-amber-500" />
                  <span>Guatemala, Guatemala</span>
                </div>
              </div>
            </div>

            <nav className="flex flex-col space-y-4">
              <div className="px-2 space-y-2">
                <a
                  href="#inicio"
                  className="block py-2 px-3 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </a>
                <a
                  href="#sectores"
                  className="block py-2 px-3 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sectores
                </a>
                <a
                  href="#calidad"
                  className="block py-2 px-3 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Calidad
                </a>
                <a
                  href="#proceso"
                  className="block py-2 px-3 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Proceso
                </a>
                <a
                  href="#contacto"
                  className="block py-2 px-3 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </a>
              </div>

              <div className="px-2 pt-2 border-t">
                <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white">
                  Contactar Ahora
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
