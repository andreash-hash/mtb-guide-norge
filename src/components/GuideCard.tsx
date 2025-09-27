interface GuideCardProps {
  title: string;
  description: string;
  href?: string;
}

const GuideCard = ({ title, description, href = "#" }: GuideCardProps) => {
  return (
    <article className="bg-secondary/5 p-6 rounded-lg border-l-4 border-secondary hover:bg-secondary/10 transition-all duration-300 group">
      <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-200">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed mb-4">
        {description}
      </p>
      
      <div className="flex items-center text-secondary font-medium group-hover:text-accent transition-colors duration-200">
        <span>Les guiden</span>
        <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
      </div>
    </article>
  );
};

export default GuideCard;