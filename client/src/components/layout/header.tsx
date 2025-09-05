import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Feather, Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";
import { cn } from "@/lib/utils";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navigation = [
    { name: "HOME", href: "/" },
    { name: "BLOG", href: "/blog" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3" data-testid="link-home">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Feather className="text-primary-foreground text-sm" size={16} />
            </div>
            <h1 className="text-xl font-bold text-foreground">Gray Area</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} data-testid={`link-${item.name.toLowerCase()}`}>
                <span
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors duration-200",
                    isActive(item.href)
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>

          {/* Desktop Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="hidden md:block p-2 text-muted-foreground hover:text-primary transition-colors"
            data-testid="button-theme-toggle"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} data-testid={`mobile-link-${item.name.toLowerCase()}`}>
                  <span
                    className={cn(
                      "block w-full text-left px-3 py-2 text-base font-medium transition-colors",
                      isActive(item.href)
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
              <button
                onClick={() => {
                  toggleTheme();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary"
                data-testid="mobile-button-theme-toggle"
              >
                {theme === "light" ? <Moon size={20} className="mr-2" /> : <Sun size={20} className="mr-2" />}
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
