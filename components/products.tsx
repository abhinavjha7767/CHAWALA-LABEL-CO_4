"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    title: "Woven Labels",
    subtitle: "Damask & Satin Weave",
    image: "/images/product-woven.jpg",
    features: [
      "High-density weave",
      "Custom colors",
      "Fold types available",
      "Washable & durable",
    ],
  },
  {
    title: "Hang Tags",
    subtitle: "Premium Card Stock",
    image: "/images/product-tags.jpg",
    features: [
      "Foil stamping",
      "Emboss & deboss",
      "Spot UV finish",
      "Custom shapes",
    ],
  },
  {
    title: "Printed Stickers",
    subtitle: "Vinyl & Paper Stock",
    image: "/images/product-stickers.jpg",
    features: [
      "Full-color CMYK",
      "Die-cut shapes",
      "Weather resistant",
      "Holographic options",
    ],
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="py-24 lg:py-32 bg-[hsl(var(--plum-dark))] relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-[hsl(var(--plum))]/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[hsl(var(--plum))]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-[hsl(280,60%,70%)]">
            Our Products
          </span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[hsl(300,20%,95%)] text-balance">
            Products That Define Your Brand
          </h2>
          <p className="mt-6 text-lg text-[hsl(280,15%,70%)] leading-relaxed">
            Explore our curated range of labeling and packaging products crafted
            specifically for the fashion and clothing industry.
          </p>
        </div>

        {/* Products Horizontal Cards */}
        <div className="flex flex-col gap-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              className={`group flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } rounded-3xl overflow-hidden border border-[hsl(280,30%,25%)] hover:border-[hsl(280,60%,45%)]/50 transition-all duration-500`}
              style={{ background: "hsl(280, 50%, 15%)" }}
            >
              {/* Image */}
              <div className="relative lg:w-1/2 aspect-[16/10] lg:aspect-auto overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="lg:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-sm font-medium uppercase tracking-[0.15em] text-[hsl(280,60%,70%)]">
                  {product.subtitle}
                </span>
                <h3 className="mt-3 font-serif text-3xl lg:text-4xl font-bold text-[hsl(300,20%,95%)]">
                  {product.title}
                </h3>
                <ul className="mt-6 flex flex-col gap-3">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-[hsl(280,15%,70%)]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent))]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full border border-[hsl(280,60%,45%)] px-6 py-3 text-sm font-medium text-[hsl(280,60%,70%)] hover:bg-[hsl(280,60%,45%)] hover:text-[hsl(300,20%,95%)] transition-colors"
                  >
                    Request Samples
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
