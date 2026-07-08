import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEO from '../components/seo/SEO'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'
import AnimatedSection from '../components/ui/AnimatedSection'
import ServiceIcon from '../components/ui/ServiceIcon'
import { company, stats, testimonials } from '../data/company'
import { services } from '../data/services'
import { fadeInUp, staggerContainer } from '../utils/animations'

export default function Home() {
  const featuredServices = services.slice(0, 3)

  return (
    <>
      <SEO
        title="Enterprise Technology & Consulting"
        description={company.description}
        path="/"
      />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-950 to-red-950/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-600/10 via-transparent to-transparent" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-red-500 text-sm font-semibold uppercase tracking-widest mb-6"
            >
              Welcome to {company.name}
            </motion.span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              {company.tagline.split('.')[0]}
              <span className="text-red-500">.</span>
              <br />
              <span className="text-zinc-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
                Delivered.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">
              We partner with enterprises to architect, build, and optimize technology
              solutions that drive measurable business outcomes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" size="lg">
                Start a Project
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Button>
              <Button to="/services" variant="secondary" size="lg">
                Explore Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-zinc-800 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeInUp} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-1">{stat.value}</div>
                <div className="text-sm text-zinc-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Solutions Built for Enterprise Scale"
          description="From strategy to execution, we deliver end-to-end technology services that transform how you operate."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service) => (
            <Card key={service.id}>
              <div className="w-14 h-14 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center mb-5">
                <ServiceIcon name={service.icon} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">{service.shortDescription}</p>
              <Link
                to={`/services#${service.id}`}
                className="inline-flex items-center gap-1 text-red-500 text-sm font-semibold hover:text-red-400 transition-colors"
              >
                Learn more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button to="/services" variant="secondary">
            View All Services
          </Button>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <section className="bg-zinc-900/30 border-y border-zinc-800">
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Client Stories"
            title="Trusted by Industry Leaders"
            description="Our clients rely on us to deliver complex projects on time and exceed expectations."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((item) => (
              <Card key={item.author}>
                <svg className="w-8 h-8 text-red-600/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-zinc-300 leading-relaxed mb-6">{item.quote}</blockquote>
                <div>
                  <div className="font-semibold text-white">{item.author}</div>
                  <div className="text-sm text-zinc-500">{item.title}</div>
                </div>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          className="relative rounded-3xl overflow-hidden border border-zinc-800"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-zinc-900 to-zinc-900" />
          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8">
              Let&apos;s discuss how {company.name} can help you achieve your technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" size="lg">Schedule a Consultation</Button>
              <Button to="/careers" variant="secondary" size="lg">Join Our Team</Button>
            </div>
          </div>
        </motion.div>
      </AnimatedSection>
    </>
  )
}
