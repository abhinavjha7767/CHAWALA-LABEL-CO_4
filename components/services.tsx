"use client";

import {
  Tag,
  Sticker,
  Layers,
  Printer,
  Ribbon,
  PackageCheck,
} from "lucide-react";

const services = [
  {
    icon: Tag,
    title: "Woven Labels",
    description:
      "High-density woven labels with intricate detailing. Perfect for premium fashion brands seeking a refined, long-lasting identity on every garment.",
  },
  {
    icon: Sticker,
    title: "Printed Stickers",
    description:
      "Full-color, weather-resistant stickers with custom die-cuts. From holographic to matte finish, ideal for branding and identity.",
  },
  {
    icon: Layers,
    title: "Hang Tags",
    description:
      "Thick cardstock hang tags with options for foil stamping, embossing, and spot UV. Make a first impression that lasts.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            What We Offer
          </span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
            Our Expertise, Your Brand
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            From concept to delivery, we provide comprehensive branding
            solutions that elevate your clothing line with premium quality
            materials.
          </p>
        </div>

        {/* Services Grid - Asymmetric Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLarge = index === 0 || index === 5;
            return (
              <div
                key={service.title}
                className={`group relative rounded-2xl border border-border p-8 lg:p-10 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 ${
                  isLarge ? "md:col-span-2 lg:col-span-1" : ""
                }`}
                style={{
                  background:
                    index % 2 === 0
                      ? "hsl(var(--card))"
                      : "hsl(var(--plum-light))",
                }}
              >
                <div className="flex flex-col gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="h-px w-full bg-border group-hover:bg-primary/20 transition-colors" />
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
