"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "DeFi Investor",
      content:
        "lCelo gave me the predictability I needed. I finally know exactly what I'll earn, and the process is incredibly simple.",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      role: "Portfolio Manager",
      content:
        "The transparency and security are unmatched. We've allocated a significant portion of our fund to lCelo.",
      rating: 5,
    },
    {
      name: "Elena Rodriguez",
      role: "Crypto Enthusiast",
      content: "No lock-up periods, instant liquidity, and guaranteed returns. This is exactly what DeFi should be.",
      rating: 5,
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">Loved by Users</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Join thousands of satisfied users earning predictable returns.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 rounded-xl border border-border bg-card hover:border-secondary/50 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 mb-6 italic">"{testimonial.content}"</p>

              {/* Author */}
              <div>
                <div className="font-bold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-foreground/60">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
