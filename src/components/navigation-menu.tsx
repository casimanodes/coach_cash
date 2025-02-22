"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function ChadNavigationMenu() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container grid grid-cols-3 h-14 items-center px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">ChadCN</span>
          </Link>
        </div>
        <div className="flex justify-center">
          <DesktopNav />
        </div>
        <div className="flex justify-end">
          <MobileNav />
          <div className="hidden md:flex items-center ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
              <line x1="9" y1="9" x2="9.01" y2="9" />
              <line x1="15" y1="9" x2="15.01" y2="9" />
            </svg>
             </div>
        </div>
      </div>
    </header>
    
  )
}

function DesktopNav() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">ChadCN UI</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and paste into your apps. Accessible.
                      Customizable. Open Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {/* <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem> */}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem key={component.title} title={component.title} href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Documentation</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleOpenChange = (open: boolean) => {
    console.log("Menu state changed:", open)
    setIsOpen(open)
  }

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]" style={{ animationDuration: "200ms" }}>
        <nav className="flex flex-col space-y-4">
          <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <span className="font-bold text-2xl">ChadCN</span>
          </Link>
          <Link href="/docs" onClick={() => setIsOpen(false)} className="text-lg font-semibold">
            Getting Started
          </Link>
          <div className="space-y-2">
            <Link href="/docs/introduction" onClick={() => setIsOpen(false)} className="block">
              Introduction
            </Link>
            <Link href="/docs/installation" onClick={() => setIsOpen(false)} className="block">
              Installation
            </Link>
            <Link href="/docs/typography" onClick={() => setIsOpen(false)} className="block">
              Typography
            </Link>
          </div>
          <Link href="/components" onClick={() => setIsOpen(false)} className="text-lg font-semibold">
            Components
          </Link>
          <div className="space-y-2">
            {components.map((component) => (
              <Link key={component.title} href={component.href} onClick={() => setIsOpen(false)} className="block">
                {component.title}
              </Link>
            ))}
          </div>
          <Link href="/docs" onClick={() => setIsOpen(false)} className="text-lg font-semibold">
            Documentation
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string
  href: string
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, children, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            href={href}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

