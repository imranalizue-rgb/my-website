import { motion } from 'framer-motion'
import { staggerContainer } from '../../utils/animations'

export default function AnimatedSection({
  children,
  className = '',
  id,
  as: Component = 'section',
}) {
  return (
    <Component id={id} className={`py-16 md:py-24 lg:py-28 ${className}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {children}
      </motion.div>
    </Component>
  )
}
