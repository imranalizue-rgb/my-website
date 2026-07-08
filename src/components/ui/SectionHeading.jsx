import { motion } from 'framer-motion'
import { fadeInUp } from '../../utils/animations'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}) {
  const alignClass =
    align === 'center'
      ? 'text-center mx-auto'
      : align === 'left'
        ? 'text-left'
        : 'text-right ml-auto'

  return (
    <motion.div
      className={`max-w-3xl mb-12 md:mb-16 ${alignClass}`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {eyebrow && (
        <span className="inline-block text-red-500 text-sm font-semibold uppercase tracking-widest mb-3">
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${light ? 'text-white' : 'text-white'}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed ${light ? 'text-zinc-400' : 'text-zinc-400'}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
