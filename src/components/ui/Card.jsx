import { motion } from 'framer-motion'
import { fadeInUp } from '../../utils/animations'

export default function Card({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      className={`rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm p-6 md:p-8 ${hover ? 'hover:border-red-600/40 hover:bg-zinc-900/80 transition-colors duration-300' : ''} ${className}`}
      variants={fadeInUp}
      {...props}
    >
      {children}
    </motion.div>
  )
}
