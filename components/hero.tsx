"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const words = ["Labels", "Tags", "Stickers", "Packaging"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[hsl(var(--plum-light))]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%234a1a6b' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-12 lg:py-0">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 w-fit">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Premium Quality Since 1995
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight text-balance">
              <span className="text-foreground">Crafting</span>
              <br />
              <span className="text-foreground">Premium</span>
              <br />
              <span
                className={`text-primary inline-block transition-all duration-400 ${
                  fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
              >
                {words[wordIndex]}
              </span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              AS PRINTERS delivers world-class brand labels, hang tags, woven
              labels, stickers, and printed packaging. Trusted by 500+ fashion
              brands across India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#services"
                className="flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground hover:bg-accent transition-colors"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#products"
                className="flex items-center justify-center gap-2 rounded-full border-2 border-primary px-8 py-4 text-base font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                View Products
              </Link>
            </div>

            {/* Stats Row */}
            <div className="flex items-center gap-8 pt-4">
              <div className="flex flex-col">
                <span className="font-serif text-3xl font-bold text-primary">
                  500+
                </span>
                <span className="text-sm text-muted-foreground">
                  Brands Served
                </span>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="flex flex-col">
                <span className="font-serif text-3xl font-bold text-primary">
                  30+
                </span>
                <span className="text-sm text-muted-foreground">
                  Years Experience
                </span>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="flex flex-col">
                <span className="font-serif text-3xl font-bold text-primary">
                  10M+
                </span>
                <span className="text-sm text-muted-foreground">
                  Labels Delivered
                </span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-primary/20">
              <Image
                src="/images/hero-labels.jpg"
                alt="Premium brand labels and tags by AS PRINTERS"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--plum-dark))]/40 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl p-5 shadow-xl border border-border animate-float">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    ISO Certified
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Quality Assured
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
