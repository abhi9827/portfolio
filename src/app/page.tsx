import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import WorkSection from "@/components/work-section"
import LabSection from "@/components/lab-section"
import JourneySection from "@/components/journey-section"
import NotesSection from "@/components/notes-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <WorkSection />
      <LabSection />
      <JourneySection />
      <NotesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
