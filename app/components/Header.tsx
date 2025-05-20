"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { EnrollForm } from "./Enroll";
export default function Header() {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // Handle scroll effect for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smart navigation - handles section links correctly based on current page
  const handleNavigation = (href: string) => {
    if (isOpen) setOpen(false);

    if (href.startsWith("/#") || href.startsWith("#")) {
      if (pathname === "/") {
        const sectionId = href.split("#")[1];
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const navigationItems = [
    { title: "Home", href: "/", description: "Go to homepage" },
    { title: "Features", href: pathname === "/" ? "#features" : "/#features", description: "Discover features" },
    { title: "Gallery", href: pathname === "/" ? "#gallery" : "/#gallery", description: "Our kids in action" },
    // { title: "Why Us", href: pathname === "/" ? "#why-us" : "/#why-us", description: "Why choose MotherCare" },
    { title: "Contact", href: pathname === "/" ? "#contact" : "/#contact", description: "Get in touch" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-white/95 py-4"}`}>
      <div className="mx-auto px-6 max-w-screen-xl flex items-center justify-between min-h-[64px]">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-black">
            Mothers<span className="text-2xl font-bold text-blue-600">Care</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-2">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                      onClick={() => handleNavigation(item.href)}
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden lg:flex space-x-2">
          <Link href={"/construction"}>
            <Button variant="outline" className="text-blue-600 border-blue-200 hover:border-blue-300 hover:bg-blue-50">
              Sign in
            </Button>
          </Link>
          <Button
        className="bg-blue-600 hover:bg-blue-700"
        onClick={() => setIsDialogOpen(true)}
      >
        Get Started
      </Button>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enrollment Form</DialogTitle>
          </DialogHeader>
          <EnrollForm />
        </DialogContent>
      </Dialog>
        </div>

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
              <Link
                key={item.title}
                href={item.href}
                className="flex items-center justify-between py-2 text-lg text-gray-800 hover:text-blue-600"
                onClick={() => handleNavigation(item.href)}
              >
                {item.title}
              </Link>
            ))}

            {/* Mobile Buttons */}
            {/* <div className="flex flex-col space-y-2 pt-4 border-t">
              <Button variant="outline" className="w-full text-blue-600">
                Sign in
              </Button>
              <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => setOpen(!isOpen)}>Get Started</Button>
             */}
            </div>
          </div>
        
      )}
    </header>
  );
}
