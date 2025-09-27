interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
}

const SectionTitle = ({ children, subtitle, className = "" }: SectionTitleProps) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;