import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import BlogCard from "@/components/blog/blog-card";
import type { BlogPost } from "@shared/schema";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog-posts"]
  });

  const categories = ["All", "Technology", "Fiction", "Career", "Lifestyle"];

  const filteredPosts = posts?.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === "All" || post.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-foreground" data-testid="text-blog-title">All Posts</h1>
        <p className="text-xl text-muted-foreground" data-testid="text-blog-description">
          Thoughts, stories, and insights from my journey in tech and life.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              data-testid="input-search-posts"
            />
          </div>
          <div className="flex gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeFilter === category
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary"
                }`}
                data-testid={`button-filter-${category.toLowerCase()}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid gap-8 mb-12">
        {isLoading ? (
          // Loading skeleton
          Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-card rounded-lg shadow-md overflow-hidden border border-border animate-pulse">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="w-full h-48 md:h-full bg-muted"></div>
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="h-4 bg-muted rounded mb-3 w-1/4"></div>
                  <div className="h-6 bg-muted rounded mb-3"></div>
                  <div className="h-4 bg-muted rounded mb-4"></div>
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                </div>
              </div>
            </div>
          ))
        ) : filteredPosts?.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg" data-testid="text-no-posts">
              No posts found matching your criteria.
            </p>
          </div>
        ) : (
          filteredPosts?.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))
        )}
      </div>

      {/* Load More Button */}
      {filteredPosts && filteredPosts.length > 0 && (
        <div className="text-center">
          <button className="px-8 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-all duration-200" data-testid="button-load-more">
            Load More Posts
          </button>
        </div>
      )}
    </div>
  );
}
