import Card08, { MobileCard08 } from "./card-08"

export default function GradientCards() {
  const cardProps = [
    {
      title: "Fiery Beginnings",
      subtitle: "Ignite your design journey",
      badge: { text: "Hot", variant: "orange" as const },
      gradientFrom: "#FF0000",
      gradientTo: "#FF4500",
      imageSrc: "/placeholder.svg?height=160&width=280",
      href: "#",
    },
    {
      title: "Vibrant Core",
      subtitle: "Energize your creativity",
      badge: { text: "Trending", variant: "orange" as const },
      gradientFrom: "#FF4500",
      gradientTo: "#FFA500",
      imageSrc: "/placeholder.svg?height=160&width=280",
      href: "#",
    },
    {
      title: "Golden Horizons",
      subtitle: "Illuminate your vision",
      badge: { text: "Bright", variant: "orange" as const },
      gradientFrom: "#FFA500",
      gradientTo: "#FFD700",
      imageSrc: "/placeholder.svg?height=160&width=280",
      href: "#",
    },
  ]

  return (
    <div className="p-8">
      {/* Desktop and Tablet version */}
      <div className="hidden sm:flex flex-wrap justify-center gap-4">
        {cardProps.map((props, index) => (
          <div key={index} className="w-[280px]">
            <Card08 {...props} />
          </div>
        ))}
      </div>

      {/* Mobile version */}
      <div className="sm:hidden space-y-4">
        {cardProps.map((props, index) => (
          <MobileCard08 key={index} {...props} />
        ))}
      </div>
    </div>
  )
}

