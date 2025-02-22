import Link from "next/link"
import Image from "next/image"

const products = [
  { id: 1, name: "Product 1", image: "/images/Cassio_Mateo.jpg" },
  { id: 2, name: "Product 2", image: "/images/Cassio_Mateo.jpg" },
  { id: 3, name: "Product 3", image: "/images/Cassio_Mateo.jpg" },
]

export default function ProductTriangle() {
  // The side length of our equilateral triangle, as a percentage of container width
  const sideLength = 50

  // Calculate the height of the equilateral triangle
  const height = (Math.sqrt(3) / 2) * sideLength

  // Calculate the coordinates for each point of the triangle
  const points = [
    { x: 50, y: 50 - height / 2 }, // Top point
    { x: 50 - sideLength / 2, y: 50 + height / 2 }, // Bottom left
    { x: 50 + sideLength / 2, y: 50 + height / 2 }, // Bottom right
  ]

  return (
    <div className="relative w-full aspect-square max-w-xl">
      {products.map((product, index) => {
        const point = points[index]

        return (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="absolute w-32 h-32 md:w-48 md:h-48 transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform duration-300"
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
              
            }}
          >
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 text-center text-base font-medium">
              {product.name}
            </span>
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>
          </Link>
        )
      })}
    </div>
  )
}

