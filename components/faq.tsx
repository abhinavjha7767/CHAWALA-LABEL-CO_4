"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "What is the minimum order quantity?",
    answer:
      "Our minimum order quantity varies by product. Woven labels start at 1,000 pieces, hang tags at 500 pieces, and printed stickers at 1,000 pieces. For custom packaging solutions, minimums depend on the complexity and materials involved. Contact us for specific MOQ details for your project.",
  },
  {
    question: "How long does production take?",
    answer:
      "Standard production timelines are 7-10 business days for woven labels, 5-7 days for hang tags, and 3-5 days for printed stickers. Rush orders can be accommodated with prior arrangement. Delivery timelines are in addition to production and depend on your location.",
  },
  {
    question: "Can I get custom shapes and designs?",
    answer:
      "Absolutely. We specialize in custom solutions including die-cut shapes, unique folds for woven labels, custom embossing patterns, and bespoke packaging designs. Our in-house design team can help bring your vision to life or work with your existing brand guidelines.",
  },
  {
    question: "Do you provide design services?",
    answer:
      "Yes, we offer comprehensive design support. Whether you need a complete brand label system designed from scratch or minor adjustments to existing artwork, our experienced design team is here to help. We provide digital proofs for approval before production begins.",
  },
  {
    question: "What materials do you work with?",
    answer:
      "We work with a wide range of materials including satin, damask, taffeta, cotton, and polyester for woven labels; art card, kraft, and specialty textured papers for hang tags; vinyl, paper, BOPP, and holographic films for stickers; and various substrates for packaging.",
  },
  {
    question: "Do you ship outside of India?",
    answer:
      "Yes, we serve clients across the globe. We offer international shipping with reliable logistics partners. International orders typically have a slightly higher MOQ and longer lead times. Get in touch for an international shipping quote tailored to your needs.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            FAQ
          </span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-bold text-foreground">
            Common Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about working with AS PRINTERS.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={faq.question} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
