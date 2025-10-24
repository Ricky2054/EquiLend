"use client"

import { motion } from "framer-motion"
import { AlertCircle, TrendingDown, Lock } from "lucide-react"

export function ProblemSection() {
  const problems = [
    {
      icon: AlertCircle,
      title: "Unpredictable Returns",
      description:
        "Traditional lending offers variable rates that fluctuate with market conditions, making planning impossible.",
    },
    {
      icon: TrendingDown,
      title: "High Counterparty Risk",
      description:
        "Centralized platforms expose you to institutional risk. One failure can wipe out your entire investment.",
    },
    {
      icon: Lock,
      title: "Locked Capital",
      description: "Most protocols require long lock-up periods, limiting your flexibility and access to capital.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">The Problem with Traditional Lending</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Current lending solutions lack transparency, predictability, and security. lCelo changes that.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} className="text-destructive" />
                </div>
                <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                <p className="text-foreground/60">{problem.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
