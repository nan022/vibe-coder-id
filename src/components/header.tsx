"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, Search, Upload, User, MessageSquare, Code, BarChart, GraduationCap, Image, PanelsTopLeft, LayoutTemplate } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Beranda", href: "/" },
    { name: "Kategori", href: "/courses" },
    { name: "Demo Kelas", href: "/demo" },
  ];

  const categories = [
    { name: "Fullstack Web", href: "/courses" },
    { name: "Vibe Coding", href: "/courses" },
    { name: "UI|UX Design", href: "/courses" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-linear-to-br from-indigo-50 to-violet-50 dark:from-gray-950 dark:to-gray-900 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/images/logos/kritme.svg" alt="Logo" className="w-8 h-auto" />
            <Link href="/" className="text-gray-900 dark:text-white flex flex-col">
              <span className="text-2xl text-indigo-600 font-extrabold">Kritme</span>
              <span className="text-xs text-gray-500 font-normal">Create Something With Me!</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center">
                <NavigationMenu>
                <NavigationMenuList className="flex gap-3">
                    <NavigationMenuItem>
                    <NavigationMenuLink
                        href="/"
                        className="px-2 py-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                        Beranda
                    </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                    <NavigationMenuLink
                        href="/courses"
                        className="px-2 py-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                        <span className="flex items-center gap-2">
                            Kelas
                            <span className="w-2 h-2 rounded-full bg-indigo-500" style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
                        </span>
                    </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                    <NavigationMenuLink
                        href="/komunitas"
                        className="px-2 py-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                        Komunitas
                    </NavigationMenuLink>
                    </NavigationMenuItem>
                    
                </NavigationMenuList>
                </NavigationMenu>
            </nav>
            <div className="hidden md:flex items-center space-x-4 ml-8">
                <ModeToggle />
            
                <Link href={"/login"}>
                    <Button variant="outline" className="border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 cursor-pointer">
                        <User className="w-4 h-4 mr-2" />
                        Login
                    </Button>
                </Link>
            </div>

          {/* Mobile Menu - ModeToggle & Hamburger */}
          <div className="md:hidden flex items-center space-x-3">
            <ModeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-4">
          <div className="px-4 space-y-1">
            {/* Navigation Links */}
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 px-4 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="px-4 py-3">
            <div className="h-px bg-gray-200 dark:bg-gray-800"></div>
          </div>

          {/* Categories Section */}
          <div className="px-4">
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">
              Kategori Populer
            </p>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="py-2 px-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
                <Link href={"/login"}>
                    <Button variant="outline" className="w-full border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20">
                        <User className="w-4 h-4 " />
                        Login
                    </Button>
                </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}