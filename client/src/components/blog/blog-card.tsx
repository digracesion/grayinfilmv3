import { Calendar, Clock, Heart, MessageCircle, Share } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";
import type { BlogPost } from "@shared/schema";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'technology':
        return 'bg-primary/10 text-primary';
      case 'lifestyle':
        return 'bg-accent/20 text-accent-foreground';
      case 'career':
        return 'bg-chart-2/20 text-chart-2';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <article className="bg-card rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group border border-border" data-testid={`blog-card-${post.id}`}>
      <div className="md:flex">
        <div className="md:w-1/3">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="md:w-2/3 p-6">
          <div className="flex items-center text-sm text-muted-foreground mb-3">
            <span
              className={`px-2 py-1 rounded-md text-xs font-medium mr-3 ${getCategoryColor(post.category)}`}
              data-testid={`post-category-${post.id}`}
            >
              {post.category}
            </span>
            <Calendar className="mr-2" size={14} />
            <span data-testid={`post-date-${post.id}`}>
              {new Date(post.createdAt!).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
            <span className="mx-2">•</span>
            <Clock className="mr-1" size={14} />
            <span data-testid={`post-read-time-${post.id}`}>{post.readTime} min read</span>
          </div>
          <h2 className="text-2xl font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors" data-testid={`post-title-${post.id}`}>
            {post.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4" data-testid={`post-excerpt-${post.id}`}>
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <button className="text-primary hover:text-primary/80 font-medium flex items-center" data-testid={`button-read-more-${post.id}`}>
              Read More
              <FaArrowRight className="ml-1" size={12} />
            </button>
            <div className="flex items-center space-x-3 text-muted-foreground">
              <button className="hover:text-primary transition-colors flex items-center" data-testid={`button-like-${post.id}`}>
                <Heart className="mr-1" size={16} />
                <span data-testid={`post-likes-${post.id}`}>{post.likes}</span>
              </button>
              <button className="hover:text-primary transition-colors flex items-center" data-testid={`button-comment-${post.id}`}>
                <MessageCircle className="mr-1" size={16} />
                <span data-testid={`post-comments-${post.id}`}>{post.comments}</span>
              </button>
              <button className="hover:text-primary transition-colors" data-testid={`button-share-${post.id}`}>
                <Share size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
