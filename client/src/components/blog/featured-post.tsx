import { Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@shared/schema";

interface FeaturedPostProps {
  post: BlogPost;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <article className="bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group" data-testid={`featured-post-${post.id}`}>
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-6">
        <div className="flex items-center text-sm text-muted-foreground mb-3">
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
        <h3 className="text-xl font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors" data-testid={`post-title-${post.id}`}>
          {post.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed" data-testid={`post-excerpt-${post.id}`}>
          {post.excerpt}
        </p>
      </div>
    </article>
  );
}
