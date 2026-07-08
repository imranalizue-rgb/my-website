import { motion } from 'framer-motion'
import SEO from '../components/seo/SEO'
import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'
import AnimatedSection from '../components/ui/AnimatedSection'
import ServiceIcon from '../components/ui/ServiceIcon'
import Button from '../components/ui/Button'
import { services, processSteps } from '../data/services'
import { fadeInUp } from '../utils/animations'

export default function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="Explore Vertex Solutions' enterprise services: digital strategy, cloud engineering, custom software, cybersecurity, data analytics, and managed services."
        path="/services"
        keywords="cloud engineering, software development, cybersecurity services, digital strategy consulting, managed IT services"
      />

      {/* Page Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 to-zinc-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-red-500 text-sm font-semibold uppercase tracking-widest">Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 tracking-tight">
              End-to-End Technology Solutions
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Comprehensive services designed to accelerate your digital transformation
              and deliver lasting competitive advantage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              id={service.id}
              variants={fadeInUp}
              className="scroll-mt-28"
            >
              <div
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center mb-5">
                    <ServiceIcon name={service.icon} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{service.title}</h2>
                  <p className="text-zinc-400 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-zinc-300 text-sm">
                        <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Card className={index % 2 === 1 ? 'lg:order-1' : ''} hover={false}>
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center border border-zinc-700/50">
                    <div className="text-center p-8">
                      <ServiceIcon name={service.icon} className="mx-auto mb-4 scale-150 opacity-60" />
                      <p className="text-zinc-500 text-sm">{service.shortDescription}</p>
                    </div>
                  </div>
                </Card>
              </div>

              {index < services.length - 1 && (
                <hr className="mt-16 border-zinc-800" />
              )}
            </motion.article>
          ))}
        </div>
      </AnimatedSection>

      {/* Process */}
      <section className="bg-zinc-900/30 border-y border-zinc-800 mt-8">
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Process"
            title="How We Deliver Results"
            description="A proven methodology that ensures transparency, quality, and alignment at every stage."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <Card key={step.step}>
                <span className="text-4xl font-bold text-red-600/30">{step.step}</span>
                <h3 className="text-lg font-bold text-white mt-2 mb-2">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeInUp} className="text-center py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Every business is unique. Tell us about your challenges and we&apos;ll craft a tailored approach.
          </p>
          <Button to="/contact" size="lg">Request a Proposal</Button>
        </motion.div>
      </AnimatedSection>
    </>
  )
}
