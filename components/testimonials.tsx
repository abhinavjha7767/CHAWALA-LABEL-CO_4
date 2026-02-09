"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Mehra",
    role: "Founder, UrbanThread Apparel",
    quote:
      "AS PRINTERS transformed our brand identity. Their woven labels are impeccable in quality, and the turnaround time is unmatched in the industry. Highly recommended for any serious fashion brand.",
  },
  {
    name: "Priya Sharma",
    role: "Creative Director, Luxe Couture",
    quote:
      "We switched to AS PRINTERS two years ago and haven't looked back. Their attention to detail on our hang tags and care labels is outstanding. The quality speaks for itself.",
  },
  {
    name: "Amit Gupta",
    role: "CEO, Desi Drapes Pvt. Ltd.",
    quote:
      "From custom packaging to holographic stickers, AS PRINTERS handles everything with precision. They've been instrumental in elevating our brand across 200+ retail locations.",
  },
  {
    name: "Neha Kapoor",
    role: "Brand Manager, EcoWear India",
    quote:
      "Their sustainable label options were exactly what our eco-conscious brand needed. Great communication, excellent quality, and always on time. A true partner in our brand journey.",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      {/* Decorative large quote */}
      <div className="absolute top-12 right-12 opacity-[0.06]">
        <Quote className="h-72 w-72 text-primary-foreground" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/60">
          Testimonials
        </span>
        <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground">
          Trusted by Leading Brands
        </h2>

        {/* Testimonial Card */}
        <div className="mt-16 relative">
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-10 lg:p-14 border border-primary-foreground/10">
            <Quote className="h-10 w-10 text-primary-foreground/30 mx-auto mb-6" />
            <blockquote className="font-serif text-2xl lg:text-3xl text-primary-foreground leading-relaxed italic">
              &ldquo;{testimonials[current].quote}&rdquo;
            </blockquote>
            <div className="mt-8">
              <p className="text-lg font-semibold text-primary-foreground">
                {testimonials[current].name}
              </p>
              <p className="text-sm text-primary-foreground/60">
                {testimonials[current].role}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              type="button"
              onClick={prev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  type="button"
                  key={`dot-${testimonials[i].name}`}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === current
                      ? "w-8 bg-primary-foreground"
                      : "w-2.5 bg-primary-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
