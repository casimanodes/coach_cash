import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Card08Props {
  title?: string
  subtitle?: string
  badge?: {
    text: string
    variant: "pink" | "indigo" | "orange"
  }
  href?: string
  gradientFrom: string
  gradientTo: string
  imageSrc: string
}

export default function Card08({
  title = "Modern Design Systems",
  subtitle = "Explore the fundamentals of contemporary UI design",
  badge = { text: "New", variant: "orange" },
  href = "#",
  gradientFrom,
  gradientTo,
  imageSrc,
}: Card08Props) {
  return (
    <Link href={href} className="block w-full group">
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl",
          "shadow-xs",
          "transition-all duration-300",
          "hover:shadow-md",
          "border border-orange-400/50",
          "hover:border-orange-300/50",
        )}
        style={{
          background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
        }}
      >
        <div className="h-[320px] flex flex-col">
          <div className="flex-1 p-4">
            <div className="relative w-full h-full overflow-hidden rounded-xl">
              <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
            </div>
          </div>
          <div className="p-4 space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white leading-snug drop-shadow-sm">{title}</h3>
              <span
                className={cn(
                  "px-2.5 py-1 rounded-full text-xs font-medium",
                  "bg-white/90",
                  "backdrop-blur-md",
                  "shadow-xs",
                  "border border-white/20",
                )}
                style={{ color: gradientFrom }}
              >
                {badge.text}
              </span>
            </div>
            <p className="text-sm text-orange-50 line-clamp-2 drop-shadow-sm">{subtitle}</p>
            <div className="flex justify-end">
              <div
                className={cn(
                  "p-2 rounded-full",
                  "bg-white/20",
                  "backdrop-blur-md",
                  "group-hover:bg-white/30",
                  "transition-colors duration-300 group",
                )}
              >
                <ArrowUpRight className="w-4 h-4 text-white group-hover:-rotate-12 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export function MobileCard08({
  title = "Modern Design Systems",
  subtitle = "Explore the fundamentals of contemporary UI design",
  badge = { text: "New", variant: "orange" },
  href = "#",
  gradientFrom,
  gradientTo,
  imageSrc,
}: Card08Props) {
  return (
    <Link href={href} className="block w-full group">
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl",
          "shadow-xs",
          "transition-all duration-300",
          "hover:shadow-md",
          "border border-orange-400/50",
          "hover:border-orange-300/50",
        )}
        style={{
          background: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})`,
        }}
      >
        <div className="flex flex-col">
          <div className="p-4">
            <div className="relative w-full h-40 overflow-hidden rounded-xl">
              <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
            </div>
          </div>
          <div className="p-4 space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white leading-snug drop-shadow-sm">{title}</h3>
              <span
                className={cn(
                  "px-2.5 py-1 rounded-full text-xs font-medium",
                  "bg-white/90",
                  "backdrop-blur-md",
                  "shadow-xs",
                  "border border-white/20",
                )}
                style={{ color: gradientFrom }}
              >
                {badge.text}
              </span>
            </div>
            <p className="text-sm text-orange-50 line-clamp-2 drop-shadow-sm">{subtitle}</p>
            <div className="flex justify-end">
              <div
                className={cn(
                  "p-2 rounded-full",
                  "bg-white/20",
                  "backdrop-blur-md",
                  "group-hover:bg-white/30",
                  "transition-colors duration-300 group",
                )}
              >
                <ArrowUpRight className="w-4 h-4 text-white group-hover:-rotate-12 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

