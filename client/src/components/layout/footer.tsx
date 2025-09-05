import { Link } from "wouter";
import { Feather } from "lucide-react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

export default function Footer() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-muted border-t border-border mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Feather
                  className="text-primary-foreground text-sm"
                  size={16}
                />
              </div>
              <h3 className="text-lg font-bold text-foreground">Gray Area</h3>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Exploring the intersection of technology, creativity, and human
              experience through thoughtful writing and authentic storytelling.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    data-testid={`footer-link-${item.name.toLowerCase()}`}
                  >
                    <span className="text-muted-foreground hover:text-primary transition-colors">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com/in/mary-grygjeanne-grace-icay-diaz/"
                className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                data-testid="link-linkedin"
              >
                <FaLinkedin size={14} />
              </a>
              <a
                href="https://www.threads.com/gray__in__film/"
                className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                data-testid="link-threads"
              >
                <FaThreads size={14} />
              </a>
              <a
                href="https://www.instagram.com/gray__in__film/"
                className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                data-testid="link-instagram"
              >
                <FaInstagram size={14} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 mt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Gray Area. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
