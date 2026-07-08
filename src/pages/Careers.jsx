import { useState } from 'react'
import { motion } from 'framer-motion'
import SEO from '../components/seo/SEO'
import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'
import AnimatedSection from '../components/ui/AnimatedSection'
import Button from '../components/ui/Button'
import { company } from '../data/company'
import { benefits, openings, cultureHighlights } from '../data/careers'
import { fadeInUp } from '../utils/animations'

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null)

  return (
    <>
      <SEO
        title="Careers"
        description={`Join ${company.name}. Explore open positions in engineering, security, data, design, and client success. Competitive benefits and remote-friendly culture.`}
        path="/careers"
        keywords="tech jobs, software engineer careers, remote engineering jobs, cybersecurity careers, consulting jobs"
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
            <span className="text-red-500 text-sm font-semibold uppercase tracking-widest">Careers</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 tracking-tight">
              Build Your Career With Us
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Join a team of passionate technologists solving complex problems for the
              world&apos;s leading enterprises. Your next chapter starts here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture */}
      <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Life at Vertex"
              title="Where Talent Meets Impact"
              description="We invest in our people because they're the foundation of everything we deliver."
            />
            <ul className="grid sm:grid-cols-2 gap-3">
              {cultureHighlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-zinc-300 text-sm">
                  <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <motion.div variants={fadeInUp} className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-red-600/10 to-zinc-900 p-8 md:p-10">
            <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-6">
              &ldquo;The best part about working here is the autonomy and trust. You&apos;re empowered
              to make decisions and see the direct impact of your work.&rdquo;
            </blockquote>
            <div className="text-zinc-400 text-sm">
              <span className="text-white font-semibold">Alex Thompson</span> — Senior Engineer, 4 years
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Benefits */}
      <section className="bg-zinc-900/30 border-y border-zinc-800">
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Benefits"
            title="More Than Just a Paycheck"
            description="We offer comprehensive benefits designed to support your health, growth, and well-being."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title}>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Open Positions */}
      <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Open Positions"
          title="Current Opportunities"
          description={`We're actively hiring across ${openings.length} roles. Find your fit below.`}
        />

        <div className="space-y-4">
          {openings.map((job) => (
            <motion.div key={job.id} variants={fadeInUp}>
              <button
                type="button"
                onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                className="w-full text-left rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-red-600/40 transition-colors p-6 md:p-8"
                aria-expanded={selectedJob === job.id}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 mt-2 text-sm text-zinc-400">
                      <span>{job.department}</span>
                      <span className="text-zinc-600">|</span>
                      <span>{job.location}</span>
                      <span className="text-zinc-600">|</span>
                      <span className="text-red-500">{job.type}</span>
                    </div>
                  </div>
                  <svg
                    className={`w-5 h-5 text-zinc-400 transition-transform flex-shrink-0 ${selectedJob === job.id ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                {selectedJob === job.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 pt-4 border-t border-zinc-800"
                  >
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">{job.description}</p>
                    <Button to="/contact" size="sm">
                      Apply Now
                    </Button>
                  </motion.div>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <motion.div variants={fadeInUp} className="text-center">
          <p className="text-zinc-400 mb-4">
            Don&apos;t see the right role? We&apos;re always looking for exceptional talent.
          </p>
          <Button to="/contact" variant="secondary">
            Send Us Your Resume
          </Button>
        </motion.div>
      </AnimatedSection>
    </>
  )
}
