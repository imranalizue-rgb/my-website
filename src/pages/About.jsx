import { motion } from 'framer-motion'
import SEO from '../components/seo/SEO'
import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'
import AnimatedSection from '../components/ui/AnimatedSection'
import { company, stats, values, team } from '../data/company'
import { fadeInUp, slideInLeft, slideInRight } from '../utils/animations'

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description={`Learn about ${company.name} — our mission, values, leadership team, and ${new Date().getFullYear() - company.founded}+ years of enterprise technology excellence.`}
        path="/about"
        keywords="about vertex solutions, technology consulting company, enterprise IT firm, leadership team"
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
            <span className="text-red-500 text-sm font-semibold uppercase tracking-widest">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 tracking-tight">
              Building the Future of Enterprise Technology
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Since {company.founded}, {company.name} has been at the forefront of digital
              transformation, helping organizations navigate complexity and unlock new possibilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div variants={slideInLeft}>
            <SectionHeading
              align="left"
              eyebrow="Our Mission"
              title="Empowering Organizations to Thrive in a Digital World"
              description="We believe technology should be an enabler, not a barrier. Our mission is to deliver solutions that are robust, scalable, and aligned with our clients' strategic vision."
            />
            <p className="text-zinc-400 leading-relaxed">
              With {company.employees} professionals across {company.offices} global offices, we
              combine deep industry expertise with cutting-edge engineering to solve the toughest
              challenges facing modern enterprises.
            </p>
          </motion.div>

          <motion.div variants={slideInRight} className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-red-500 mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Values */}
      <section className="bg-zinc-900/30 border-y border-zinc-800">
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Values"
            title="What Drives Us Every Day"
            description="Our culture is built on principles that guide every decision, every project, and every client interaction."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title}>
                <div className="w-2 h-2 rounded-full bg-red-500 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Leadership */}
      <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Leadership"
          title="Meet Our Executive Team"
          description="Experienced leaders with decades of combined expertise in technology, business, and innovation."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <Card key={member.name} hover={false}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white text-xl font-bold mb-4">
                {member.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <h3 className="text-lg font-bold text-white">{member.name}</h3>
              <p className="text-red-500 text-sm font-medium mb-3">{member.role}</p>
              <p className="text-zinc-400 text-sm leading-relaxed">{member.bio}</p>
            </Card>
          ))}
        </div>
      </AnimatedSection>

      {/* Timeline */}
      <section className="bg-zinc-900/30 border-t border-zinc-800">
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Journey"
            title="Milestones That Shaped Us"
          />

          <div className="max-w-2xl mx-auto space-y-8">
            {[
              { year: '2008', event: 'Founded in San Francisco with a team of five engineers.' },
              { year: '2013', event: 'Expanded to East Coast with New York office. Reached 100 clients.' },
              { year: '2018', event: 'Launched cybersecurity practice. Opened European headquarters.' },
              { year: '2023', event: 'Surpassed 1,000 projects delivered. Named top consulting firm.' },
              { year: '2026', event: 'Continuing to innovate with AI-driven solutions and global expansion.' },
            ].map((item, i) => (
              <motion.div
                key={item.year}
                variants={fadeInUp}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-16 text-right">
                  <span className="text-red-500 font-bold">{item.year}</span>
                </div>
                <div className="relative flex-1 pb-8 border-l border-zinc-800 pl-6">
                  {i < 4 && (
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-red-600 border-2 border-zinc-950" />
                  )}
                  <p className="text-zinc-300">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
