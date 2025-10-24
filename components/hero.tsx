"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          style={{ top: "10%", left: "10%" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
          style={{ bottom: "10%", right: "10%" }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <Zap size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Introducing Fixed-Rate Lending</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance mb-6">
          Secure Fixed-Rate{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Lending on Celo
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-foreground/70 text-balance mb-8 max-w-2xl mx-auto"
        >
          Transparent, secure, and efficient fixed-rate lending protocol. Earn predictable returns with zero
          counterparty risk.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
            Get Started
            <ArrowRight size={18} className="ml-2" />
          </Button>
          <Button size="lg" variant="outline">
            Read Whitepaper
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-border/50">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-primary">$50M+</div>
            <div className="text-sm text-foreground/60">Total Value Locked</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-primary">12.5%</div>
            <div className="text-sm text-foreground/60">Average APY</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-primary">5K+</div>
            <div className="text-sm text-foreground/60">Active Users</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
