"use client"

import { MessageSquare, Palette, Factory, Truck, CheckCircle2 } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Consultation",
    description:
      "Share your brand vision and requirements. Our design experts work with you to understand your exact needs.",
  },
  {
    icon: Palette,
    step: "02",
    title: "Design & Proofing",
    description:
      "We create digital proofs with your brand colors, logos, and materials. Revise until perfect.",
  },
  {
    icon: Factory,
    step: "03",
    title: "Production",
    description:
      "State-of-the-art machinery ensures precision printing. Rigorous quality checks at every stage.",
  },
  {
    icon: Truck,
    step: "04",
    title: "Delivery",
    description:
      "On-time dispatch with secure packaging. Pan-India delivery and international shipping available.",
  },
  {
    icon: CheckCircle2,
    step: "05",
    title: "After-Sales Support",
    description:
      "Ongoing support for reorders, design modifications, and scaling your label requirements.",
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "hsl(var(--plum-light))" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header - Right Aligned */}
        <div className="max-w-2xl ml-auto text-right mb-20">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            How It Works
          </span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
            From Concept to Delivery
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Our streamlined process ensures your brand materials are produced with
            precision and delivered on schedule, every single time.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={step.step}
                  className="relative flex flex-col items-center text-center gap-5"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Step Number Circle */}
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 text-xs font-bold text-primary bg-background rounded-full px-2 py-0.5 border border-primary/20">
                    {step.step}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mt-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
