const Footer = () => {
  const menuItems = [
    { name: "Tester", href: "#tester" },
    { name: "Nyheter", href: "/nyheter" },
    { name: "Guider", href: "#guider" },
    { name: "Butikk", href: "/butikk" },
    { name: "Om oss", href: "#om-oss" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Logo */}
          <h2 className="text-2xl font-bold text-primary mb-8">mtb-test</h2>
          
          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-8 mb-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-secondary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          {/* Copyright */}
          <div className="pt-8 border-t border-border">
            <p className="text-muted-foreground">
              © 2025 mtb-test. Alle rettigheter reservert.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;