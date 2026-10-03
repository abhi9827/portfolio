import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import WorkSection from "@/components/work-section"
// import LabSection from "@/components/lab-section"
import JourneySection from "@/components/journey-section"
import NotesSection from "@/components/notes-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import AdBanner from "@/components/AdBanner"

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <HeroSection />
      
      {/* AdBanner placement below Hero */}
      <div className="py-8">
        <AdBanner dataAdSlot="1234567890" dataAdFormat="auto" dataFullWidthResponsive={true} />
      </div>

      <AboutSection />
      <ExperienceSection />
      
      {/* AdBanner placement below Experience */}
      <div className="py-8">
        <AdBanner dataAdSlot="1111111111" dataAdFormat="auto" dataFullWidthResponsive={true} />
      </div>

      <WorkSection />
      {/* <LabSection /> */}

      {/* AdBanner placement below Work */}
      <div className="py-8">
        <AdBanner dataAdSlot="2222222222" dataAdFormat="auto" dataFullWidthResponsive={true} />
      </div>

      <JourneySection />
      <NotesSection />

      {/* AdBanner placement below Notes */}
      <div className="py-8">
        <AdBanner dataAdSlot="3333333333" dataAdFormat="auto" dataFullWidthResponsive={true} />
      </div>

      <ContactSection />
      
      {/* AdBanner placement above Footer */}
      <div className="py-8">
        <AdBanner dataAdSlot="0987654321" dataAdFormat="auto" dataFullWidthResponsive={true} />
      </div>
      
      <Footer />
    </main>
  )
}
