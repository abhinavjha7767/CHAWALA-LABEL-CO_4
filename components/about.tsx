"use client";

import Image from "next/image";
import { Award, Factory, Users, Globe } from "lucide-react";

const highlights = [
  { icon: Factory, label: "State-of-the-Art Facility", value: "20,000 sq ft" },
  { icon: Users, label: "Expert Team", value: "150+ Members" },
  { icon: Award, label: "Industry Certifications", value: "ISO 9001:2015" },
  { icon: Globe, label: "Serving Across", value: "Pan India" },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
          {/* Left - Image Composition */}
          <div className="lg:col-span-2 relative">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
              <Image
                src="/images/about-team.jpg"
                alt="AS PRINTERS team and production facility"
                fill
                className="object-cover"
              />
            </div>
            {/* Overlapping accent card */}
            <div className="absolute -bottom-8 -right-4 lg:-right-10 bg-primary rounded-2xl p-6 text-primary-foreground shadow-xl">
              <p className="font-serif text-4xl font-bold">30+</p>
              <p className="text-sm opacity-80 mt-1">Years of Excellence</p>
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              About Us
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground leading-tight text-balance">
              A Legacy of Precision & Quality in Every Label
            </h2>
            <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
              <p>
                AS PRINTERS, a unit of Chawala Company, has been at the
                forefront of the brand labeling industry since 1995. What began
                as a small printing press has grown into one of India&apos;s
                most trusted manufacturers of woven labels, hang tags, printed
                stickers, and complete packaging solutions.
              </p>
              <p>
                Our state-of-the-art facility in Delhi NCR houses the latest in
                digital and flexographic printing technology, alongside
                traditional craftsmanship that ensures every label meets the
                exacting standards of global fashion brands.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 rounded-xl border border-border p-5 bg-card"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-serif text-xl font-bold text-foreground">
                        {item.value}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
