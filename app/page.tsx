import { ContactHeader } from "@/components/contact-header"
import { MainHeader } from "@/components/main-header"
import { HeroSection } from "@/components/hero-section"
import { SectorSelector } from "@/components/sector-selector"
import { QualitySection } from "@/components/quality-section"
import { ProcessSection } from "@/components/process-section"
import { ContactForm } from "@/components/contact-form"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <ContactHeader />
      <MainHeader />
      <HeroSection />
      <SectorSelector />
      <QualitySection />
      <ProcessSection />
      <ContactForm />
    </main>
  )
}
