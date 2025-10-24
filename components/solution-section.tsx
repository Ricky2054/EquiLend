"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Shield, Zap, TrendingUp } from "lucide-react"

export function SolutionSection() {
  const solutions = [
    {
      icon: CheckCircle2,
      title: "Fixed Rates",
      description: "Lock in your rate at origination. Know exactly what you'll earn, guaranteed.",
    },
    {
      icon: Shield,
      title: "Zero Counterparty Risk",
      description: "Smart contracts eliminate intermediaries. Your funds are secured by code, not institutions.",
    },
    {
      icon: Zap,
      title: "Instant Liquidity",
      description: "Exit your position anytime. No lock-up periods, no restrictions. Your capital, your control.",
    },
    {
      icon: TrendingUp,
      title: "Transparent Yields",
      description: "Every transaction is on-chain and auditable. See exactly where your returns come from.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            The lCelo <span className="text-primary">Solution</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            A revolutionary approach to lending that puts you in control.
          </p>
        </motion.div>

        {/* Solution Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-4 p-6 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Icon size={24} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{solution.title}</h3>
                  <p className="text-foreground/60">{solution.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
