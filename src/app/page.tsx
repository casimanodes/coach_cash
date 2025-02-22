import Image from "next/image"
import Link from "next/link"
import ProductTriangle from "@/components/ProductTriangle"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import GradientCards from "@/components/gradient-cards"
import DynamicFrameLayout from "@/components/DynamicFrameLayout"
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="px-4">
      <h1 className="text-5xl font-bold text-center my-8">Welcome to Our Store</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center pb-8">
        <div className="space-y-6">
          <div className="relative w-full max-w-[50vh] min-h-96 overflow-hidden rounded-xl shadow-md">
            <Image
              src="/images/Cassio_Mateo.jpg"
              alt="Featured Image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <h2 className="text-2xl font-semibold">Discover Our Products</h2>
          <p className="text-xl text-gray-600">Find amazing items for your lifestyle</p>
          <Link
            href="/shop"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Shop Now
          </Link>
        </div>
        <div className="w-full max-w-md mx-auto">
          <ProductTriangle />
        </div>
      </div>
      </div>
      < GradientCards />
      <div className="w-[60vw] md:flex-grow h-[60vh] md:h-[80vh]">


      <DynamicFrameLayout />

      </div>

      
      {/* Professional Photoshoots Section */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"> 
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[40vh]">
              <Image
                src="/images/Cassio_Mateo.jpg"
                alt="Dress Transformation"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-xl "
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Professional photoshoots without the hassle</h2>
              <p className="text-gray-600 text-lg">
                Get photoshoot-quality images in minutes, not weeks. Train your AI, then instantly generate endless
                lifestyle photos with or without human models - at a fraction of the cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Understanding Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"> 
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">AI that gets your products</h2>
              <p className="text-gray-600 text-lg">
                Unlike basic AI tools, Custom AI learns every detail of your products, from fabric textures to intricate
                designs. This means your products always look their best, naturally fitting into any scene.
              </p>
            </div>
            <div className="relative h-[40vh]">
              <Image
                src="/images/Cassio_Mateo.jpg"
                alt="Scarf Transformation"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Market Faster Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
           <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold">Market faster, sell more</h2>
              <p className="text-gray-600 text-lg">
                Generate fresh, engaging content for every channel, in minutes. Create variations for different markets,
                design seasonal promotions, and keep your social media feeds buzzing - all with a few clicks.
              </p>
            </div>
            <div className="relative order-2 md:order-1 h-[40vh]">
              <Image
                src="/images/Cassio_Mateo.jpg"
                alt="Tent Transformation"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">How it works</h2>
          <div className="relative">
            <div className="flex justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-purple-600 font-semibold">1</span>
                </div>
                <span className="font-semibold">Upload</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400 font-semibold">2</span>
                </div>
                <span className="text-gray-400">Training</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400 font-semibold">3</span>
                </div>
                <span className="text-gray-400">Generate</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="space-y-6">
                <div className="text-purple-600 font-semibold">STEP 1: TRAIN</div>
                <h3 className="text-2xl font-bold">Train your AI in minutes</h3>
                <p className="text-gray-600">
                  Simply upload 3-20 photos of your product, taken from different angles to capture all the details.
                  Custom AI will quickly learn the unique characteristics of your item, from its shape and texture to
                  its finest details.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <Image
                    src="/images/Cassio_Mateo.jpg"
                    alt="Product Training"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">One AI, endless product stories</h2>
          <p className="text-center text-gray-600 mb-12">
            Create engaging lifestyle photos that connect with your customers. Show your products in real-life
            situations, on models, or in any setting you imagine
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["Clothes", "Shoes", "Bags", "Accessories", "Any product (almost)"].map((category) => (
              <Button
                key={category}
                variant={category === "Clothes" ? "default" : "outline"}
                className={category === "Clothes" ? "bg-black text-white" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">FAQs</h2>
            <Link href="#" className="text-gray-500 hover:text-gray-700">
              More info in help centre
            </Link>
          </div>
          <Accordion type="single" collapsible>
            {[
              "Can I use Custom AI to put my clothes on virtual human models?",
              "What kind of products work best with Custom AI?",
              "Are there any products that Custom AI doesn't support?",
              "How is Custom AI different from AI Backgrounds?",
              "How can I create lifestyle product photos with AI?",
              "What's the best way to generate product photos with virtual models?",
              "How can I make AI-generated product photos look more realistic?",
              "What's the best AI tool for product photography?",
            ].map((question, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>Content for {question} goes here...</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Explore more features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Image
                src="/images/Cassio_Mateo.jpg"
                alt="Generative Resize"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-center">Generative Resize</h3>
            </Card>
            <Card className="p-6">
              <Image
                src="/images/Cassio_Mateo.jpg"
                alt="Generate Background"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-center">Generate Background</h3>
            </Card>
            <Card className="p-6">
              <Image
                src="/images/Cassio_Mateo.jpg"
                alt="Background removal"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-center">Background removal</h3>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-purple-100 rounded-lg" />
                <span className="font-bold">CLAID.AI</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Copyright © 2025 Let's Enhance, Inc.
                <br />
                All Rights Reserved
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span className="w-2 h-2 bg-gray-500 rounded-full" />
                <span>support@claid.ai</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3 text-sm text-gray-500">
                <li>Blog</li>
                <li>About us</li>
                <li>Jobs</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-3 text-sm text-gray-500">
                <li>Pricing</li>
                <li>Customers</li>
                <li>AI image generation</li>
                <li>AI Photoshoot</li>
                <li>Generative Resize</li>
                <li>Enhancement</li>
                <li>Product Demo</li>
                <li>Help Center (FAQ)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">API</h3>
              <ul className="space-y-3 text-sm text-gray-500">
                <li>API Pricing</li>
                <li>Our APIs</li>
                <li>API Docs</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-3 text-sm text-gray-500">
                <li>Join to our community (beta)</li>
                <li>LinkedIn</li>
                <li>Twitter</li>
                <li>YouTube</li>
                <li>Affiliate program</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    
    </main>
  )
}
