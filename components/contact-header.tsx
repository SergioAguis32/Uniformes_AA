import { Phone, Mail, MapPin, CheckCircle } from "lucide-react"

export function ContactHeader() {
  return (
    <div className="bg-slate-800 text-white py-2 px-4 text-sm">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Version */}
        <div className="hidden md:flex items-center justify-between">
          {/* Contact Info */}
          <div className="flex items-center gap-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3 text-amber-400 flex-shrink-0" />
              <span>+502 2234-5678</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-3 w-3 text-amber-400 flex-shrink-0" />
              <span>ventas@uniformesaa.com</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="h-3 w-3 text-amber-400 flex-shrink-0" />
              <span>Guatemala, Guatemala</span>
            </div>
          </div>

          {/* Guarantees */}
          <div className="flex items-center gap-x-3 text-xs">
            <div className="flex items-center space-x-1">
              <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
              <span>Entrega Garantizada</span>
            </div>
            <span className="text-slate-400">•</span>
            <div className="flex items-center space-x-1">
              <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
              <span>Calidad Certificada</span>
            </div>
          </div>
        </div>

        {/* Mobile Version */}
        <div className="md:hidden flex items-start justify-between text-xs py-1">
          {/* Left: Contact Info - 2 rows */}
          <div className="flex flex-col space-y-1">
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3 text-amber-400 flex-shrink-0" />
              <span>+502 2234-5678</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-3 w-3 text-amber-400 flex-shrink-0" />
              <span>ventas@uniformesaa.com</span>
            </div>
          </div>

          {/* Right: Guarantees - 2 rows */}
          <div className="flex flex-col space-y-1 text-right">
            <div className="flex items-center space-x-1">
              <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
              <span>Entrega Garantizada</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
              <span>Calidad Certificada</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
