import { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Takk for påmeldingen!",
        description: "Du vil nå motta vårt nyhetsbrev.",
      });
      setEmail("");
    }
  };

  const shortcuts = [
    { name: "Sammenligninger", href: "/sammenligninger" },
    { name: "Guider", href: "/guider" },
    { name: "Nyheter", href: "/nyheter" },
  ];

  const resources = [
    { name: "Om oss", href: "/om-oss" },
    { name: "Kontakt", href: "/kontakt" },
    { name: "Personvern", href: "/personvern" },
    { name: "Vilkår", href: "/vilkar" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold mb-4">MTB Test</h2>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Din guide til terrengsykling i Norge. Vi sammenligner sykler basert på 
              tekniske spesifikasjoner og deler guider for å hjelpe deg finne riktig utstyr.
            </p>
          </div>

          {/* Column 2: Shortcuts */}
          <div>
            <h3 className="font-semibold mb-4">Snarveier</h3>
            <nav className="space-y-2">
              {shortcuts.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="font-semibold mb-4">Ressurser</h3>
            <nav className="space-y-2">
              {resources.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Social & Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Følg oss</h3>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 bg-primary-foreground/10 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <h3 className="font-semibold mb-3">Nyhetsbrev</h3>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Din e-post"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-sm"
              />
              <Button 
                type="submit" 
                size="sm"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                <Mail className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-primary-foreground/10 bg-primary-foreground/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-xs text-primary-foreground/60 text-center leading-relaxed">
            ℹ️ Informasjon på denne siden er basert på tekniske spesifikasjoner og offisiell produktinformasjon fra produsenter. 
            Vi har ikke testet produktene personlig. Sjekk alltid med fagfolk før kjøp.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-primary-foreground/60">
            <p>© 2025 MTB Test Norge</p>
            <p className="text-center md:text-right">
              Affiliate-informasjon: Vi kan motta provisjon på kjøp via våre lenker, uten ekstra kostnad for deg. 
              Våre sammenligninger er basert på tekniske fakta, ikke provisjon.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
