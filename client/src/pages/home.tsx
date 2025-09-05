import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import FeaturedPost from "@/components/blog/featured-post";
import type { BlogPost } from "@shared/schema";

export default function Home() {
  const { toast } = useToast();

  const { data: featuredPosts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog-posts/featured"],
  });

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    if (email) {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive updates when new articles are published.",
      });
      e.currentTarget.reset();
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <div className="mb-8">
          <img
            src="https://pixabay.com/get/ga48a786630997fa3517b8dce4cd814d072d947dcbb2c26dec83a14b67ad83a04b6053e04eb96ae678314e641a8e21562f03ffa19560da05a6cf48fbd77766d13_1280.jpg"
            alt="Gray Area profile photo"
            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary shadow-lg"
            data-testid="img-hero-profile"
          />
        </div>
        <h1
          className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
          data-testid="text-hero-title"
        >
          Welcome
        </h1>
        <p
          className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
          data-testid="text-hero-description"
        >
          Exploring the intersection of technology, creativity, and human
          experience through thoughtful writing and authentic storytelling.
        </p>
        <Link href="/blog">
          <button
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-all duration-200 shadow-lg"
            data-testid="button-read-posts"
          >
            Read My Latest Posts
            <ArrowRight className="ml-2" size={16} />
          </button>
        </Link>
      </section>

      {/* Featured Posts Section */}
      <section className="mb-16">
        <h2
          className="text-3xl font-bold mb-8 text-foreground"
          data-testid="text-featured-title"
        >
          Featured Posts
        </h2>
        {isLoading ? (
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="bg-card rounded-lg shadow-md overflow-hidden animate-pulse"
              >
                <div className="w-full h-48 bg-muted"></div>
                <div className="p-6">
                  <div className="h-4 bg-muted rounded mb-3"></div>
                  <div className="h-6 bg-muted rounded mb-3"></div>
                  <div className="h-4 bg-muted rounded"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts?.map((post) => (
              <FeaturedPost key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>

      {/* Newsletter Signup */}
      <section className="bg-muted rounded-lg p-8 text-center">
        <h3
          className="text-2xl font-semibold mb-4 text-foreground"
          data-testid="text-newsletter-title"
        >
          Stay Updated
        </h3>
        <p
          className="text-muted-foreground mb-6 max-w-md mx-auto"
          data-testid="text-newsletter-description"
        >
          Get notified when I publish new articles. No spam, just thoughtful
          content delivered to your inbox.
        </p>
        <form
          onSubmit={handleNewsletterSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            required
            data-testid="input-newsletter-email"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-all duration-200"
            data-testid="button-newsletter-subscribe"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}
