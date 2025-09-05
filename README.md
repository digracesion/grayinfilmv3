# grayinfilmv3
v3 of grayinflm

## Blog Application
### Overview
This is a full-stack personal blog application built with React frontend and Express backend. The application features a modern, responsive design with a focus on clean typography and user experience. It allows visitors to read blog posts, learn about the author, and send contact messages. The application uses a PostgreSQL database with Drizzle ORM for data persistence and includes comprehensive UI components built with shadcn/ui.
### User Preferences
Preferred communication style: Simple, everyday language.
### System Architecture
#### Frontend Architecture
⦁	Framework: React 18 with TypeScript for type safety and modern development practices
⦁	Routing: Wouter for lightweight client-side routing without the complexity of React Router
⦁	State Management: TanStack Query (React Query) for server state management, caching, and synchronization
⦁	Styling: Tailwind CSS for utility-first styling with shadcn/ui component library for consistent design system
⦁	Build Tool: Vite for fast development and optimized production builds
⦁	Theme System: Custom theme provider supporting light/dark mode with CSS variables
#### Backend Architecture
⦁	Runtime: Node.js with Express.js framework for RESTful API endpoints
⦁	Language: TypeScript with ES modules for modern JavaScript features
⦁	Data Layer: Drizzle ORM with PostgreSQL for type-safe database operations
⦁	Storage Strategy: Dual storage implementation - in-memory storage for development and PostgreSQL for production
⦁	Middleware: Custom logging middleware for API request monitoring and error handling
#### Data Storage
⦁	Database: PostgreSQL with Neon serverless hosting for scalable cloud deployment
⦁	ORM: Drizzle ORM chosen for its type safety, performance, and developer experience
⦁	Schema: Three main entities - users, blog posts, and contact messages with appropriate relationships
⦁	Migrations: Drizzle Kit for database schema management and version control
#### Development Setup
⦁	Monorepo Structure: Organized with separate client, server, and shared directories for clean separation of concerns
⦁	Hot Module Replacement: Vite development server with Express integration for seamless development experience
⦁	Type Sharing: Shared TypeScript types and Zod schemas between frontend and backend for consistency
⦁	Path Aliases: Configured import aliases (@, @shared) for cleaner import statements
#### UI Component System
⦁	Base Library: Radix UI primitives for accessible, unstyled components
⦁	Design System: shadcn/ui components providing consistent styling and behavior
⦁	Responsive Design: Mobile-first approach with Tailwind CSS breakpoints
⦁	Accessibility: Built-in accessibility features through Radix UI components
### External Dependencies
#### Database Services
⦁	Neon Database: Serverless PostgreSQL hosting for production database
⦁	connect-pg-simple: PostgreSQL session store for Express sessions
#### UI and Styling
⦁	shadcn/ui: Complete component library built on Radix UI primitives
⦁	Tailwind CSS: Utility-first CSS framework for rapid styling
⦁	Radix UI: Accessible component primitives for React applications
⦁	Lucide React: Comprehensive icon library for modern web applications
#### Development Tools
⦁	Drizzle Kit: Database schema management and migration tools
⦁	Vite: Next-generation frontend tooling for development and production
⦁	TypeScript: Static type checking for enhanced developer experience
⦁	ESBuild: Fast JavaScript bundler for server-side code compilation
#### State Management and Data Fetching
⦁	TanStack Query: Powerful data synchronization for React applications
⦁	React Hook Form: Performant forms with minimal re-renders and easy validation
⦁	Zod: TypeScript-first schema validation for runtime type safety
#### Utility Libraries
⦁	date-fns: Modern JavaScript date utility library for date manipulation
⦁	clsx/tailwind-merge: Utility functions for conditional CSS class handling
⦁	wouter: Minimalist routing library for React applications
