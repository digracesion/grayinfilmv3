import { type User, type InsertUser, type BlogPost, type InsertBlogPost, type ContactMessage, type InsertContactMessage } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getBlogPosts(): Promise<BlogPost[]>;
  getFeaturedBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private blogPosts: Map<string, BlogPost>;
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.users = new Map();
    this.blogPosts = new Map();
    this.contactMessages = new Map();
    
    // Initialize with sample blog posts
    this.initializeBlogPosts();
  }

  private initializeBlogPosts() {
    const samplePosts: BlogPost[] = [
      {
        id: "1",
        title: "The Future of Remote Work: Building Meaningful Connections in a Digital World",
        content: "Exploring how remote work is reshaping not just where we work, but how we connect, collaborate, and find meaning in our professional lives...",
        excerpt: "Exploring how remote work is reshaping not just where we work, but how we connect, collaborate, and find meaning in our professional lives...",
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
        category: "Technology",
        readTime: 8,
        likes: 24,
        comments: 8,
        featured: 1,
        createdAt: new Date("2024-03-15"),
        updatedAt: new Date("2024-03-15"),
      },
      {
        id: "2",
        title: "Nurturing Creativity in the Digital Age",
        content: "In a world of constant notifications and digital distractions, how do we create space for deep, meaningful creative work? Here's what I've learned...",
        excerpt: "In a world of constant notifications and digital distractions, how do we create space for deep, meaningful creative work? Here's what I've learned...",
        imageUrl: "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
        category: "Lifestyle",
        readTime: 6,
        likes: 42,
        comments: 15,
        featured: 1,
        createdAt: new Date("2024-03-10"),
        updatedAt: new Date("2024-03-10"),
      },
      {
        id: "3",
        title: "Building Sustainable Software: Lessons from 5 Years in Tech",
        content: "After half a decade of building software products, I've learned that the most successful projects aren't just about the code—they're about creating systems that can evolve, scale, and serve users for years to come...",
        excerpt: "After half a decade of building software products, I've learned that the most successful projects aren't just about the code—they're about creating systems that can evolve, scale, and serve users for years to come...",
        imageUrl: "https://pixabay.com/get/g01736cb857721e48688a1198a2e54fb38811d2d3f9a2e1f9f254ef8d92c574be72c58ef8c60c658e4ac373dcd624d6dbac031e2b67e659e596fb2caf001b611e_1280.jpg",
        category: "Technology",
        readTime: 12,
        likes: 31,
        comments: 12,
        featured: 0,
        createdAt: new Date("2024-03-20"),
        updatedAt: new Date("2024-03-20"),
      },
      {
        id: "4",
        title: "Finding Balance: My Journey from Burnout to Mindful Living",
        content: "Two years ago, I was the poster child for hustle culture. Working 70-hour weeks, convinced that more was always better. Then I hit a wall...",
        excerpt: "Two years ago, I was the poster child for hustle culture. Working 70-hour weeks, convinced that more was always better. Then I hit a wall...",
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
        category: "Lifestyle",
        readTime: 7,
        likes: 56,
        comments: 23,
        featured: 0,
        createdAt: new Date("2024-03-18"),
        updatedAt: new Date("2024-03-18"),
      },
      {
        id: "5",
        title: "The Art of Giving Feedback: Building Better Teams Through Communication",
        content: "Effective feedback is one of the most powerful tools we have for growth, yet it's something many of us struggle with...",
        excerpt: "Effective feedback is one of the most powerful tools we have for growth, yet it's something many of us struggle with...",
        imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
        category: "Career",
        readTime: 10,
        likes: 38,
        comments: 16,
        featured: 0,
        createdAt: new Date("2024-03-12"),
        updatedAt: new Date("2024-03-12"),
      },
    ];

    samplePosts.forEach(post => {
      this.blogPosts.set(post.id, post);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort(
      (a, b) => new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    );
  }

  async getFeaturedBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.featured === 1)
      .sort((a, b) => new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime());
  }

  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const post: BlogPost = { 
      ...insertPost,
      id,
      likes: insertPost.likes ?? 0,
      comments: insertPost.comments ?? 0,
      featured: insertPost.featured ?? 0,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = {
      ...insertMessage,
      id,
      createdAt: new Date()
    };
    this.contactMessages.set(id, message);
    return message;
  }
}

export const storage = new MemStorage();
