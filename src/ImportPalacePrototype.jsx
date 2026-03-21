import { useEffect, useState } from 'react'

const MAKES = [
  'VW',
  'Audi',
  'Porsche',
  'BMW',
  'MINI',
  'Mercedes',
  'Volvo',
  'Saab',
  'Honda',
  'Acura',
  'Toyota',
  'Subaru',
  'Nissan',
  'Smart Car',
]

const SERVICES = [
  { title: 'Engine diagnostics and repair', icon: 'engine' },
  { title: 'Transmission service', icon: 'transmission' },
  { title: 'Brake service and repair', icon: 'brake' },
  { title: 'Suspension and steering', icon: 'suspension' },
  { title: 'A/C repair and recharging', icon: 'ac' },
  { title: 'Timing belt replacement', icon: 'timing' },
  { title: 'Electrical diagnostics and repair', icon: 'electrical' },
  { title: 'Battery replacement', icon: 'battery' },
  { title: 'Check engine light diagnostics', icon: 'check' },
  { title: 'Factory scheduled maintenance', icon: 'factory' },
  { title: 'Oil changes and tune-ups', icon: 'oil' },
  { title: 'Trip checks and general inspections', icon: 'trip' },
  { title: 'Pre-purchase inspections', icon: 'inspect' },
]

const REVIEWS = [
  {
    text: 'Got my old car running after a year in storage when no one else wanted to work on it. Fast, fair and reasonable!',
    name: 'Stephan Langley',
    badge: 'Local Guide',
  },
  {
    text: 'Vanagon owner for over 16 years. Man these guys know how to get the job done! Bailed me out of a jam and got me back on the road same day. Knowledgeable is an understatement. A+++',
    name: 'Dan Saffer',
    badge: 'Local Guide',
  },
  {
    text: "John and Josh diagnosed my 2019 VW Alltrak's issue over the phone. With their info I got the dealership to honor the warranty. These guys are gruff, honest, smart, funny, fair and knowledgeable.",
    name: 'j berry',
    badge: null,
  },
  {
    text: 'John is the most gifted mechanic around, and is more than fair with his repairs and billing. If you have a VW and love it, only trust Import Palace.',
    name: 'Lucy Hansen',
    badge: null,
  },
  {
    text: "Did some stuff on my 2005 Mini Cooper S!",
    name: 'Kimberley Cole',
    badge: 'Local Guide',
  },
  {
    text: "The Best place to take my 1973 VW Bug 1300. Costs up front, great & knowledgeable mechanics. No hidden cost. Prepare yourself, it'll be better than you thought. I will repeat my business.",
    name: 'Ross Stewart Andrew',
    badge: 'Local Guide',
  },
]

function ServiceIcon({ name }) {
  const common = 'w-8 h-8 text-gold'
  switch (name) {
    case 'engine':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M12 3v4M8 7h8M6 11h12v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6zM9 11V9a3 3 0 016 0v2" strokeLinecap="round" />
        </svg>
      )
    case 'transmission':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <rect x="3" y="8" width="18" height="8" rx="1" />
          <path d="M7 12h10M7 8V6M17 8V6M7 16v2M17 16v2" strokeLinecap="round" />
        </svg>
      )
    case 'brake':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    case 'suspension':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M4 20h16M6 16l4-12h4l4 12M9 8h6" strokeLinecap="round" />
        </svg>
      )
    case 'ac':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4" strokeLinecap="round" />
        </svg>
      )
    case 'timing':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" strokeLinecap="round" />
        </svg>
      )
    case 'electrical':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" strokeLinejoin="round" />
        </svg>
      )
    case 'battery':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <rect x="6" y="6" width="12" height="12" rx="2" />
          <path d="M10 6V4M14 6V4M10 18v2M14 18v2" strokeLinecap="round" />
        </svg>
      )
    case 'check':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M9 12l2 2 4-4M12 3a9 9 0 100 18 9 9 0 000-18z" strokeLinecap="round" />
        </svg>
      )
    case 'factory':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M3 21h18M5 21V10l4-2v13M13 8l4 2v11M9 21V6l3-2 3 2v15" strokeLinecap="round" />
        </svg>
      )
    case 'oil':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M12 3c-2 4-6 5-6 10a6 6 0 1012 0c0-5-4-6-6-10z" />
        </svg>
      )
    case 'trip':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z" strokeLinejoin="round" />
        </svg>
      )
    case 'inspect':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.35-4.35M11 8v6l3 2" strokeLinecap="round" />
        </svg>
      )
    default:
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <circle cx="12" cy="12" r="9" />
        </svg>
      )
  }
}

function Stars() {
  return (
    <div className="flex gap-0.5" aria-hidden>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} className="w-4 h-4 text-gold" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function ImportPalacePrototype() {
  const [navSolid, setNavSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLink =
    'text-sm font-medium text-cream/90 hover:text-gold-light transition-colors tracking-wide'

  return (
    <div className="min-h-screen bg-cream font-sans text-navy antialiased">
      {/* Nav */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
          navSolid ? 'shadow-lg shadow-black/20' : ''
        }`}
      >
        <div className="bg-forest/95 backdrop-blur-md border-b border-gold/10">
          <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
            <a href="#hero" className="group">
              <p className="font-display text-xl font-semibold tracking-tight text-cream sm:text-2xl">
                Import Palace
              </p>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gold-light/90 sm:text-xs">
                Import Specialists Since 1983
              </p>
            </a>
            <ul className="flex flex-wrap items-center gap-5 sm:gap-8">
              <li>
                <a href="#services" className={navLink}>
                  Services
                </a>
              </li>
              <li>
                <a href="#makes" className={navLink}>
                  Makes
                </a>
              </li>
              <li>
                <a href="#reviews" className={navLink}>
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className={navLink}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="hero"
        className="relative overflow-hidden bg-navy pt-28 pb-20 sm:pt-32 sm:pb-28"
      >
        <img
          src={`${import.meta.env.BASE_URL}cars.png`}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-navy/75"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 80% 50% at 50% -20%, rgba(201, 168, 76, 0.08), transparent),
              linear-gradient(180deg, rgba(26, 41, 64, 0.3) 0%, rgba(19, 42, 31, 0.9) 100%)
            `,
          }}
        />
        <div className="pointer-events-none absolute -right-20 top-1/4 h-64 w-64 rounded-full bg-gold/5 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 font-display text-sm font-medium italic text-gold-light/90 sm:text-base">
            Over 40 years in Missoula
          </p>
          <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight text-cream sm:text-4xl md:text-5xl lg:text-[2.75rem] lg:leading-[1.15]">
            The import shop Missoula drivers trust.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream/80 sm:text-lg">
            VW, Audi, BMW, Porsche, Honda, Toyota, Subaru, and the rest.
            OEM parts, quality fluids, and straight answers. Estimates upfront; no hidden costs.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <a
              href="tel:+14065436396"
              className="inline-flex w-full items-center justify-center rounded-sm bg-gold px-8 py-3.5 font-semibold text-navy shadow-lg shadow-black/20 transition hover:bg-gold-light sm:w-auto"
            >
              Call (406) 543-6396
            </a>
            <a
              href="#services"
              className="inline-flex w-full items-center justify-center rounded-sm border border-gold/50 bg-transparent px-8 py-3.5 font-semibold text-cream transition hover:border-gold hover:bg-white/5 sm:w-auto"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Makes */}
      <section id="makes" className="scroll-mt-24 bg-forest-dark py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-2xl font-semibold text-cream sm:text-3xl md:text-4xl">
            Your Import Is Our Specialty
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-cream/65 sm:text-base">
            We focus on imports. If yours is listed, you&apos;re in the right bay.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
            {MAKES.map((make) => (
              <span
                key={make}
                className="rounded-full border border-gold/35 bg-forest/80 px-4 py-2.5 text-sm font-medium tracking-wide text-gold-light shadow-sm sm:px-5 sm:text-base"
              >
                {make}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-24 bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl md:text-4xl">Services</h2>
            <p className="mt-3 text-navy/75">
              Full-service import care.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {SERVICES.map((s) => (
              <article
                key={s.title}
                className="flex flex-col rounded-lg border border-navy/10 bg-white p-5 shadow-sm transition hover:border-gold/40 hover:shadow-md"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-forest/5">
                  <ServiceIcon name={s.icon} />
                </div>
                <h3 className="font-display text-lg font-semibold leading-snug text-navy">{s.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="border-y border-navy/10 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-2xl font-semibold text-navy sm:text-3xl">
            Why Import Palace
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-forest text-gold-light font-display text-xl font-bold">
                40+
              </div>
              <h3 className="font-display text-xl font-semibold text-navy">40+ Years in Missoula</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/75">
                In business since 1983.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold text-gold">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-navy">OEM Parts &amp; Quality Fluids</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/75">
                The right components and fluids for your import.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold text-gold">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                  <path d="M9 12l2 2 4-4M12 3a9 9 0 100 18 9 9 0 000-18z" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-navy">Upfront Estimates, No Surprises</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/75">
                Know what you&apos;re paying for before we turn a wrench.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="scroll-mt-24 bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-2xl font-semibold text-navy sm:text-3xl md:text-4xl">
            40 Years of Happy Customers
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-navy/70">
            Real words from people who brought their VWs, Minis, and more.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r) => (
              <blockquote
                key={r.name + r.text.slice(0, 20)}
                className="flex flex-col rounded-lg border border-navy/10 bg-white p-6 shadow-sm"
              >
                <Stars />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-navy/85">&ldquo;{r.text}&rdquo;</p>
                <footer className="mt-4 border-t border-navy/10 pt-4">
                  <p className="font-semibold text-navy">{r.name}</p>
                  {r.badge && (
                    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gold">{r.badge}</p>
                  )}
                  {r.meta && (
                    <p className="mt-0.5 text-xs text-navy/55">{r.meta}</p>
                  )}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-navy/10 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-14">
            <div className="w-full shrink-0 lg:w-96">
              <img
                src={`${import.meta.env.BASE_URL}service.png`}
                alt="Import auto service at Import Palace"
                className="rounded-lg object-cover shadow-md"
              />
            </div>
            <div className="flex-1 max-w-3xl">
              <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">About Import Palace</h2>
              <p className="mt-6 text-left text-base leading-relaxed text-navy/80 sm:text-lg">
                Import Palace Auto Service opened its doors in 1983, and owner{' '}
                <strong className="font-semibold text-navy">John Trimble</strong> has built it into Missoula&apos;s go-to
                for drivers who won&apos;t settle for a generic garage. We&apos;re European and Asian import specialists. OEM parts
                and quality fluids are our baseline, not a premium tier. We give you an upfront estimate and stick to it:
                no games, no sticker shock.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="scroll-mt-24 bg-navy pb-12 pt-16 text-cream sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <p className="font-display text-xl font-semibold">Import Palace Auto Service</p>
              <p className="mt-1 text-sm text-gold-light/90">Import specialists since 1983</p>
              <address className="mt-6 not-italic text-cream/85 leading-relaxed">
                1358 W Broadway St
                <br />
                Missoula, MT 59802
              </address>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-gold-light">Get in touch</h3>
              <p className="mt-3 text-cream/80">
                Call for an estimate or to book service. We&apos;ll tell you what your import needs.
              </p>
              <a href="tel:+14065436396" className="mt-4 inline-block text-xl font-semibold text-gold hover:text-gold-light">
                (406) 543-6396
              </a>
              <p className="mt-8 text-sm text-cream/60">
                <span className="font-semibold text-cream/80">Hours</span>
                <br />
                Monday–Friday, hours TBC
                <br />
                Call ahead to confirm.
              </p>
            </div>
          </div>
          <p className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-cream/45">
            © {new Date().getFullYear()} Import Palace Auto Service · Missoula, Montana · Prototype site
          </p>
        </div>
      </footer>
    </div>
  )
}
