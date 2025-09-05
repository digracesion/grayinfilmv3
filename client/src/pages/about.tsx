import { Code, Heart, Users, Lightbulb, Leaf } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { Link } from "wouter";

export default function About() {
  const skills = [
    "QA (Manual and Automation)",
    "Photography",
    "Technical Writing & Documentation",
    "Team Leadership & Mentoring",
  ];

  const interests = [
    "Street and Portrait Photography",
    "Reading Literary Fiction and Horror",
    "Writing Fiction",
  ];

  const values = [
    {
      icon: Users,
      title: "Inclusive Tech",
      description:
        "Technology should serve everyone, not just a privileged few. I'm committed to building products and communities that welcome diverse perspectives.",
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description:
        "The best part of working in tech is that there's always something new to discover. I believe in staying curious and sharing knowledge freely.",
    },
    {
      icon: Leaf,
      title: "Sustainable Growth",
      description:
        "Whether it's code, careers, or communities, the best solutions are built for the long term with care and intentionality.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <img
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1681747803260/SnTnpWUuF.JPG?w=400&h=300&fit=crop&crop=faces&auto=compress,format&format=webp"
          alt="Gray Area"
          className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary shadow-xl mb-8"
          data-testid="img-about-profile"
        />
        <h1
          className="text-4xl font-bold mb-4 text-foreground"
          data-testid="text-about-title"
        >
          Welcome to Gray Area
        </h1>
        <p
          className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          data-testid="text-about-subtitle"
        >
          Software engineer, writer, and lifelong learner passionate about
          building meaningful technology and sharing stories that matter.
        </p>
      </div>

      {/* Story Section */}
      <div className="prose prose-lg max-w-none mb-16">
        <h2
          className="text-3xl font-bold mb-6 text-foreground"
          data-testid="text-story-title"
        >
          My Story
        </h2>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p data-testid="text-story-paragraph-1">
            I started my journey in tech 7 years ago as a Computer Science
            undergraduate. I've lived in the Philippines, Japan, and now the US,
            and each place has shaped my perspective and skills in unique ways.
          </p>
          <p data-testid="text-story-paragraph-2">
            Today, I work as a senior QA Engineer at an IT company, where I
            spend my days testing and figuring out ways to make the testing
            process easier and more streamlined. But beyond the interfaces and
            code, I'm fascinated by the human side of technology: how it shapes
            our relationships, changes the way we work, and creates new
            possibilities for connection and creativity.
          </p>
          <p data-testid="text-story-paragraph-3">
            This blog is where I explore those intersections—the technical
            challenges I'm wrestling with, the lessons I'm learning about
            leadership and collaboration, and the bigger questions about how we
            can use technology to create a more inclusive and thoughtful world.
          </p>
        </div>
      </div>

      {/* Skills & Interests */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-card rounded-lg p-6 border border-border">
          <h3
            className="text-xl font-semibold mb-4 text-card-foreground flex items-center"
            data-testid="text-skills-title"
          >
            <Code className="mr-3 text-primary" size={20} />
            What I Do
          </h3>
          <div className="space-y-3">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center"
                data-testid={`skill-item-${index}`}
              >
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                <span className="text-muted-foreground">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <h3
            className="text-xl font-semibold mb-4 text-card-foreground flex items-center"
            data-testid="text-interests-title"
          >
            <Heart className="mr-3 text-primary" size={20} />
            What I Love
          </h3>
          <div className="space-y-3">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="flex items-center"
                data-testid={`interest-item-${index}`}
              >
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                <span className="text-muted-foreground">{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2
          className="text-3xl font-bold mb-8 text-foreground text-center"
          data-testid="text-values-title"
        >
          What I Believe In
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-6"
              data-testid={`value-item-${index}`}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="text-2xl text-primary" size={32} />
              </div>
              <h3
                className="text-lg font-semibold mb-3 text-foreground"
                data-testid={`value-title-${index}`}
              >
                {value.title}
              </h3>
              <p
                className="text-muted-foreground"
                data-testid={`value-description-${index}`}
              >
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Connect Section */}
      <div className="bg-muted rounded-lg p-8 text-center">
        <h3
          className="text-2xl font-semibold mb-4 text-foreground"
          data-testid="text-connect-title"
        >
          Let's Connect
        </h3>
        <p
          className="text-muted-foreground mb-6 max-w-md mx-auto"
          data-testid="text-connect-description"
        >
          I love connecting with fellow creators, developers, and curious minds.
          Don't hesitate to reach out!
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/digracesion/"
            className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:opacity-90 transition-all"
            data-testid="link-connect-github"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/mary-grygjeanne-grace-icay-diaz/"
            className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:opacity-90 transition-all"
            data-testid="link-connect-linkedin"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://www.threads.com/gray__in__film/"
            className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:opacity-90 transition-all"
            data-testid="link-connect-threads"
          >
            <FaThreads size={20} />
          </a>
          <a
            href="https://www.instagram.com/gray__in__film/"
            className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:opacity-90 transition-all"
            data-testid="link-connect-instagram"
          >
            <FaInstagram size={20} />
          </a>
          <Link href="/contact">
            <button
              className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:opacity-90 transition-all"
              data-testid="button-connect-contact"
            >
              <FaEnvelope size={20} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
