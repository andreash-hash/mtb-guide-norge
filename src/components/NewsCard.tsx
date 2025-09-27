interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  href?: string;
}

const NewsCard = ({ title, excerpt, date, href = "#" }: NewsCardProps) => {
  return (
    <article className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300 group">
      <div className="flex items-start justify-between mb-3">
        <span className="text-sm text-secondary font-medium">{date}</span>
      </div>
      
      <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-200">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed">
        {excerpt}
      </p>
      
      <div className="mt-4">
        <span className="text-accent font-medium group-hover:underline">
          Les mer →
        </span>
      </div>
    </article>
  );
};

export default NewsCard;