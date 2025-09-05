import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Mail, Send, Clock, Calendar } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { InsertContactMessage } from "@shared/schema";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: () => {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: () => <Mail className="text-xl text-primary" size={20} />,
      title: "Email",
      value: "mggicay@gmail.com",
    },
    {
      icon: () => <FaLinkedin className="text-xl text-primary" size={20} />,
      title: "LinkedIn",
      value: "Connect on LinkedIn",
      link: "https://www.linkedin.com/in/mary-grygjeanne-grace-icay-diaz/",
    },
    {
      icon: () => <Calendar className="text-xl text-primary" size={20} />,
      title: "Schedule a Call",
      value: "Book a meeting with me",
      link: "https://cal.com/mggicay",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <h1
          className="text-4xl font-bold mb-4 text-foreground"
          data-testid="text-contact-title"
        >
          Get In Touch
        </h1>
        <p
          className="text-xl text-muted-foreground"
          data-testid="text-contact-description"
        >
          I'd love to hear from you. Whether you have a question, want to
          collaborate, or just want to say hello, feel free to reach out.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {contactMethods.map((method, index) => {
          const cardContent = (
            <>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                {method.icon()}
              </div>
              <h3
                className="font-semibold mb-2 text-card-foreground"
                data-testid={`contact-method-title-${index}`}
              >
                {method.title}
              </h3>
              <p
                className="text-muted-foreground text-sm"
                data-testid={`contact-method-value-${index}`}
              >
                {method.value}
              </p>
            </>
          );

          if (method.link) {
            return (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center p-6 bg-card rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-all duration-200 cursor-pointer"
                data-testid={`contact-method-${index}`}
              >
                {cardContent}
              </a>
            );
          }

          return (
            <div
              key={index}
              className="text-center p-6 bg-card rounded-lg border border-border"
              data-testid={`contact-method-${index}`}
            >
              {cardContent}
            </div>
          );
        })}
      </div>

      {/* Contact Form */}
      <div className="bg-card rounded-lg p-8 border border-border shadow-md">
        <h2
          className="text-2xl font-semibold mb-6 text-card-foreground"
          data-testid="text-form-title"
        >
          Send me a message
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2 text-card-foreground"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                required
                data-testid="input-contact-name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-card-foreground"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                required
                data-testid="input-contact-email"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium mb-2 text-card-foreground"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              required
              data-testid="input-contact-subject"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2 text-card-foreground"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me more..."
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
              required
              data-testid="textarea-contact-message"
            />
          </div>
          <button
            type="submit"
            disabled={contactMutation.isPending}
            className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-all duration-200 shadow-lg flex items-center justify-center disabled:opacity-50"
            data-testid="button-contact-submit"
          >
            {contactMutation.isPending ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2" size={16} />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>

      {/* Response Time Note */}
      <div className="mt-8 p-4 bg-muted rounded-lg text-center">
        <p
          className="text-sm text-muted-foreground flex items-center justify-center"
          data-testid="text-response-time"
        >
          <Clock className="mr-2" size={16} />I typically respond within 24-48
          hours. Thanks for your patience!
        </p>
      </div>
    </div>
  );
}
