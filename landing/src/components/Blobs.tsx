import { motion, useScroll, useTransform } from 'framer-motion'

export function Blobs() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -250])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        style={{ y: y1 }}
        className="absolute w-[600px] h-[600px] rounded-full top-[-10%] left-[-5%]"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
            filter: 'blur(100px)',
            animation: 'blob-float 22s ease-in-out infinite',
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute w-[500px] h-[500px] rounded-full top-[20%] right-[-10%]"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)',
            filter: 'blur(100px)',
            animation: 'blob-float-reverse 18s ease-in-out infinite',
            animationDelay: '-5s',
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: y3 }}
        className="absolute w-[450px] h-[450px] rounded-full bottom-[10%] left-[20%]"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)',
            filter: 'blur(100px)',
            animation: 'blob-float 25s ease-in-out infinite',
            animationDelay: '-10s',
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: y4 }}
        className="absolute w-[400px] h-[400px] rounded-full top-[60%] right-[15%]"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
            filter: 'blur(100px)',
            animation: 'blob-float-reverse 20s ease-in-out infinite',
            animationDelay: '-3s',
          }}
        />
      </motion.div>
    </div>
  )
}
