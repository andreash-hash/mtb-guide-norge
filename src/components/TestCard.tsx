interface TestCardProps {
  image: string;
  title: string;
  description: string;
  href?: string;
}

const TestCard = ({ image, title, description, href = "#" }: TestCardProps) => {
  return (
    <article className="bg-card rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-200">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
};

export default TestCard;