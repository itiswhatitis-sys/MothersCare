"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, MoveRight } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Button,
} from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";


export default function Header() {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smart navigation - handles section links correctly based on current page
  const handleNavigation = (href: string) => {
    // Close mobile menu if open
    if (isOpen) setOpen(false);
    
    // Handle section links
    if (href.startsWith("/#")) {
      // If we're already on homepage, just scroll to section
      if (pathname === "/") {
        const sectionId = href.split("#")[1];
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
      // Otherwise, no action needed, Next.js Link will handle navigation
    }
  };

  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "Go to our homepage",
    },
    {
      title: "About",
      href: "/about",
      description: "Learn more about DaaSye",
    },
    {
      title: "Features",
      href: pathname === "/" ? "#features" : "/#features",
      description: "Discover our key features",
    },
    {
      title: "Solutions",
      href: pathname === "/" ? "#solutions" : "/#solutions",
      description: "Our business solutions",
    },
    {
      title: "Services",
      description: "Our key offerings for CPG and D2C brands",
      items: [
        {
          title: "Instant Distribution",
          href: "/services#on-demand",
          description: "End-to-end distribution setup with real-time visibility"
        },
        {
          title: "Smart Tech Stack",
          href: "/services#tech",
          description: "AI-powered SFA, DMS, and RMS tools"
        }
      ],
    },
    {
      title: "Contact",
      href: pathname === "/" ? "#contact" : "/#contact",
      description: "Get in touch with us",
    },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-white/95 py-4"}`}>
      <div className="mx-auto px-6 max-w-screen-xl flex items-center justify-between min-h-[64px]">        <Link href="/" className="flex items-center space-x-2">
          {/* <Image src="/images/logo.png" alt="DaaSye" width={40} height={40} className="h-10 w-auto" /> */}
          <span className="text-2xl font-bold text-black">Mothers<span className="text-2xl font-bold text-blue-600">Care</span></span>
        </Link>

        <div className="hidden lg:flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-2">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href && !item.items ? (
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                        onClick={() => handleNavigation(item.href)}
                      >
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[400px] p-4 shadow-lg bg-white rounded">
                        <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                          <div className="flex flex-col justify-between">
                            <p className="text-base font-semibold">{item.title}</p>
                            <p className="text-sm text-gray-500">
                              {item.description}
                            </p>
                            <Button variant="default" size="sm" className="mt-6">
                              Book a call today
                            </Button>
                          </div>
                          <div className="flex flex-col text-sm">
                            {item.items?.map((subItem) => (
                              <NavigationMenuLink asChild key={subItem.title}>
                                <Link
                                  href={subItem.href}
                                  className="flex flex-col rounded px-3 py-2 hover:bg-gray-100"
                                  onClick={() => handleNavigation(subItem.href)}
                                >
                                  <span className="flex items-center justify-between">
                                    <span className="font-medium">{subItem.title}</span>
                                    <MoveRight className="w-4 h-4 text-gray-400" />
                                  </span>
                                  {subItem.description && (
                                    <span className="text-xs text-gray-500 mt-1">{subItem.description}</span>
                                  )}
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden lg:flex space-x-2">
        <Link href={"/construction"}> <Button variant="outline" className="text-blue-600 border-blue-200 hover:border-blue-300 hover:bg-blue-50">Sign in</Button></Link> 
          <Link href={"/construction"}>  <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
        </Link></div>

        <div className="flex lg:hidden">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg overflow-y-auto max-h-[80vh]">
          <div className="container mx-auto flex flex-col px-6 py-4 space-y-4">
            {navigationItems.map((item) => (
              <div key={item.title} className="flex flex-col">
                {item.href && !item.items ? (
                  <Link
                    href={item.href}
                    className="flex items-center justify-between py-2 text-lg text-gray-800 hover:text-blue-600"
                    onClick={() => handleNavigation(item.href)}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <>
                    <p className="text-lg font-medium text-gray-800 border-b border-gray-100 py-2">{item.title}</p>
                    <div className="mt-2 space-y-1">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="ml-4 flex flex-col py-2 text-gray-600 hover:text-blue-600"
                          onClick={() => handleNavigation(subItem.href)}
                        >
                          <span className="font-medium">{subItem.title}</span>
                          {subItem.description && (
                            <span className="text-xs text-gray-500 mt-1">{subItem.description}</span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}

            {/* Mobile Buttons */}
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <Button variant="outline" className="w-full text-blue-600">
                Sign in
              </Button>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
 