"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["9986, SARAI ROHILLA, NEW ROHTAK ROAD, NEW DELHI-110005"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 9873705056"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["chawla@chawlalabel.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: Closed"],
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "hsl(var(--plum-light))" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <div className="flex flex-col gap-8">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Get In Touch
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground leading-tight text-balance">
              Let&apos;s Bring Your Brand Vision to Life
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ready to elevate your brand with premium labels and tags? Reach
              out to us and our team will get back to you within 24 hours.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-serif text-base font-semibold text-foreground">
                        {item.title}
                      </p>
                      {item.lines.map((line) => (
                        <p key={line} className="text-sm text-muted-foreground">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-background rounded-3xl p-8 lg:p-12 shadow-xl border border-border">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-8">
              Request a Quote
            </h3>
            <form
              className="flex flex-col gap-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="company"
                    className="text-sm font-medium text-foreground"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Your company"
                    className="rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-foreground"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="product"
                  className="text-sm font-medium text-foreground"
                >
                  Product Interest
                </label>
                <select
                  id="product"
                  className="rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a product
                  </option>
                  <option value="woven">Woven Labels</option>
                  <option value="tags">Hang Tags</option>
                  <option value="stickers">Printed Stickers</option>
                  <option value="care">Care Labels</option>
                  <option value="ribbons">Satin Ribbons</option>

                  <option value="other">Other / Multiple</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                />
              </div>
              <button
                type="submit"
                className="mt-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground hover:bg-accent transition-colors"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
