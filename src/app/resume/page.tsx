import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { experience } from "@/data/experience"
import { projects } from "@/data/projects"

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

export const metadata = {
  title: "Resume | Abhishek Lamichhane | Flutter Developer",
  description: "CV & Resume of Abhishek Lamichhane — Flutter Developer with 3 years of experience in fintech, digital banking, and enterprise mobile systems.",
  openGraph: {
    title: "Resume | Abhishek Lamichhane | Flutter Developer",
    description: "CV & Resume of Abhishek Lamichhane — Flutter Developer with 3 years of experience in fintech, digital banking, and enterprise mobile systems.",
    url: "https://abhisheklamichhane.me/resume",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume | Abhishek Lamichhane | Flutter Developer",
    description: "CV & Resume of Abhishek Lamichhane — Flutter Developer with 3 years of experience in fintech, digital banking, and enterprise mobile systems.",
  },
  alternates: {
    canonical: "https://abhisheklamichhane.me/resume",
  },
}

export default function ResumePage() {
  return (
    <main className="min-h-screen pt-28 pb-20 bg-background print:bg-white print:text-black print:p-0">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        
        {/* Navigation & Action Bar (Hidden in Print) */}
        <div className="flex items-center justify-between gap-4 mb-10 print:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors"
            data-cursor-interactive="true"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="mailto:abhisheklamichhane00@gmail.com"
              className="px-4 py-2 text-xs font-mono rounded-full border border-border bg-surface hover:bg-border/60 text-foreground transition-colors inline-flex items-center gap-1.5"
              data-cursor-interactive="true"
            >
              <Mail className="w-3.5 h-3.5" />
              Contact
            </a>
          </div>
        </div>

        {/* Resume Sheet Container */}
        <div className="bg-surface border border-border rounded-2xl p-8 md:p-14 shadow-xl print:shadow-none print:border-none print:p-0 print:bg-white">
          
          {/* Header */}
          <header className="border-b border-border pb-8 mb-8">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground print:text-black mb-2">
              Abhishek Lamichhane
            </h1>
            <p className="text-xl md:text-2xl font-medium text-accent print:text-gray-700 mb-4">
              Flutter Developer &amp; Mobile Software Engineer
            </p>

            <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-muted print:text-gray-600">
              <a
                href="mailto:abhisheklamichhane00@gmail.com"
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4 text-accent" />
                <span>abhisheklamichhane00@gmail.com</span>
              </a>

              <a
                href="tel:+9779827226086"
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4 text-accent" />
                <span>+977 9827226086</span>
              </a>

              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Kathmandu, Bagmati Province, Nepal</span>
              </span>

              <a
                href="https://linkedin.com/in/abhisheklamichhane"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-accent" />
                <span>linkedin.com/in/abhisheklamichhane</span>
              </a>
            </div>
          </header>

          {/* Profile Section */}
          <section className="mb-10">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-accent print:text-black mb-3">
              Profile
            </h2>
            <p className="text-sm md:text-base text-muted print:text-gray-700 leading-relaxed">
              Dynamic Flutter Developer with 3 years of experience architecting secure fintech, digital banking, and enterprise cross-platform mobile applications serving over 3 million active users. Specialized in Flutter, Dart, Riverpod, and Clean Architecture to deliver robust, zero-trust mobile solutions. Proven track record in developing modular mobile systems, integrating native platform bridges, automating CI/CD release pipelines, and optimizing high-concurrency mobile performance. Dedicated to engineering resilient mobile architecture across the financial services sector.
            </p>
          </section>

          {/* Professional Experience */}
          <section className="mb-10">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-accent print:text-black mb-6">
              Professional Experience
            </h2>

            <div className="flex flex-col gap-8">
              {experience.map((exp) => (
                <div key={exp.company} className="flex flex-col">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                    <h3 className="text-lg font-bold text-foreground print:text-black">
                      {exp.company}
                    </h3>
                    <span className="text-xs font-mono text-muted print:text-gray-600">
                      {exp.date}
                    </span>
                  </div>

                  <div className="text-sm font-semibold text-accent print:text-gray-700 mb-3">
                    {exp.role}
                  </div>

                  <ul className="flex flex-col gap-1.5 list-disc list-inside text-sm text-muted print:text-gray-700 leading-relaxed mb-3">
                    {exp.highlights.map((h, idx) => (
                      <li key={idx} className="pl-1">
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="mb-10">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-accent print:text-black mb-6">
              Featured Projects &amp; Systems
            </h2>

            <div className="flex flex-col gap-6">
              {projects.map((proj) => (
                <div key={proj.slug} className="p-4 rounded-xl bg-background print:bg-transparent border border-border print:border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                    <h3 className="text-base font-bold text-foreground print:text-black">
                      {proj.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      {proj.slug === "advanced-native-contact-picker" && (
                        <a
                          href="https://pub.dev/packages/advanced_native_contact_picker"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-emerald-500 hover:underline print:text-black"
                        >
                          pub.dev &rarr;
                        </a>
                      )}
                      <span className="text-xs font-mono text-accent print:text-gray-600">
                        {proj.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-muted print:text-gray-700 mb-3">
                    {proj.description}
                  </p>

                  <ul className="flex flex-col gap-1 list-disc list-inside text-xs md:text-sm text-muted print:text-gray-700 leading-relaxed mb-3">
                    {proj.highlights?.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.technologies.map((tech) => (
                      <span key={tech} className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface print:bg-gray-100 border border-border print:border-gray-300 text-foreground print:text-black">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-10">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-accent print:text-black mb-4">
              Education &amp; Certification
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-background print:bg-transparent border border-border print:border-gray-200">
                <div className="text-xs font-mono text-muted print:text-gray-500">10/2019 — 2023</div>
                <h3 className="text-base font-bold text-foreground print:text-black mt-1">
                  Bachelor of Information Technology
                </h3>
                <p className="text-sm text-muted print:text-gray-600">Texas College of Management and IT</p>
              </div>

              <div className="p-4 rounded-xl bg-background print:bg-transparent border border-border print:border-gray-200">
                <div className="text-xs font-mono text-muted print:text-gray-500">2022</div>
                <h3 className="text-base font-bold text-foreground print:text-black mt-1">
                  Flutter Certification
                </h3>
                <p className="text-sm text-muted print:text-gray-600">Mindrisers Consortium</p>
              </div>
            </div>
          </section>

          {/* Technical Skills & Extras */}
          <section>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-accent print:text-black mb-4">
              Technical Competencies &amp; Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted print:text-gray-700">
              <div>
                <strong className="text-foreground print:text-black font-semibold">Programming &amp; Frameworks:</strong>
                <p className="mt-0.5">Dart, Flutter, HTML, CSS, JavaScript, Python</p>
              </div>

              <div>
                <strong className="text-foreground print:text-black font-semibold">State &amp; Architecture:</strong>
                <p className="mt-0.5">Riverpod, Provider, BLoC, Clean Architecture, Repository Pattern</p>
              </div>

              <div>
                <strong className="text-foreground print:text-black font-semibold">Security &amp; Storage:</strong>
                <p className="mt-0.5">Biometric Login, Device Binding, AES-256, Keystore / Keychain, Hive, SQLite</p>
              </div>

              <div>
                <strong className="text-foreground print:text-black font-semibold">DevOps &amp; Tools:</strong>
                <p className="mt-0.5">Fastlane, Bitrise, GitLab CI/CD, Crashlytics, Jira, ClickUp, Git</p>
              </div>

              <div>
                <strong className="text-foreground print:text-black font-semibold">Languages:</strong>
                <p className="mt-0.5">Nepali (Native), English (Fluent), Hindi</p>
              </div>

              <div>
                <strong className="text-foreground print:text-black font-semibold">Interests:</strong>
                <p className="mt-0.5">Entrepreneurship, Reading Books (Business &amp; Finance), Music</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}
