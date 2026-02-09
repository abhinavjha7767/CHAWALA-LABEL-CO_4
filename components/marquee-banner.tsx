export default function MarqueeBanner() {
  const items = [
    "Woven Labels",
    "Hang Tags",
    "Printed Stickers",
    "Satin Ribbons",
    "Care Labels",
    "Packaging Solutions",
    "Barcode Labels",
    "Holographic Stickers",
    "Brand Tags",
    "Custom Die-Cuts",
  ]

  return (
    <div className="bg-primary py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="mx-8 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground/80"
          >
            {item}
            <span className="ml-8 text-primary-foreground/30">&#x2022;</span>
          </span>
        ))}
      </div>
    </div>
  )
}
