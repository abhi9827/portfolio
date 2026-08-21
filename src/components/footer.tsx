export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-foreground font-semibold">Abhishek Lamichhane</p>
          <p className="text-sm text-muted">Flutter Developer & Software Engineer</p>
        </div>
        
        <div className="text-sm text-muted">
          &copy; {currentYear} All rights reserved.
        </div>
      </div>
    </footer>
  )
}
