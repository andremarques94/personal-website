# Personal Portfolio & Blog

A modern personal website and blog built with Next.js and Strapi CMS, organized as a Turborepo monorepo for efficient development and deployment.

## 📦 This monorepo contains:

### Applications

- **`web`**: Personal website built with Next.js 15 featuring:
  - React 19 with server components
  - TypeScript for type safety
  - Tailwind CSS for styling
  - Custom fonts (Geist)
  - Shared UI components from `@workspace/ui`
  - Blog post display and navigation
  - Responsive design for all devices

- **`crm`**: Strapi 5 CMS for blog content management:
  - PostgreSQL database support
  - Blog post creation and editing
  - Content publishing workflow
  - Media management for blog assets
  - User authentication and permissions
  - RESTful API for content delivery

### Packages

- **`@workspace/ui`**: Shared React component library with:
  - Radix UI primitives
  - Tailwind CSS integration
  - Lucide React icons
  - Theme support with next-themes
- **`@workspace/eslint-config`**: Shared ESLint configurations
- **`@workspace/typescript-config`**: Shared TypeScript configurations

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Backend**: Strapi 5 CMS with PostgreSQL
- **Styling**: Tailwind CSS with custom fonts
- **Linting**: ESLint with shared configurations
- **Monorepo**: Turborepo for efficient builds and development
- **Package Manager**: pnpm for fast, disk-efficient package management
- **Database**: PostgreSQL (via Docker Compose)

### Prerequisites

- Node.js >= 20
- pnpm (recommended)
- Docker (for PostgreSQL database)

## 🚀 Getting Started

1. **Install dependencies**:

   ```bash
   pnpm install
   ```

2. **Start the database**:

   ```bash
   docker-compose up -d
   ```

3. **Start development servers**:
   ```bash
   pnpm dev
   ```

This will start:

- Next.js app at `http://localhost:3000`
- Strapi CMS at `http://localhost:1337`

## 📁 Project Structure

```
portfolio-monorepo/
├── apps/
│   ├── web/                    # Next.js website
│   │   ├── app/               # App router pages
│   │   ├── components/        # React components
│   │   └── package.json
│   └── crm/                   # Strapi CMS
│       ├── src/               # Strapi source code
│       ├── config/            # Strapi configuration
│       ├── database/          # Database migrations
│       └── package.json
├── packages/
│   ├── ui/                    # Shared UI components
│   ├── eslint-config/         # ESLint configurations
│   └── typescript-config/     # TypeScript configurations
├── docker-compose.yml         # PostgreSQL setup
└── package.json              # Root package.json
```

## 🎨 Features

### Personal Website (`/web`)

- **Portfolio Showcase**: Display your projects, skills, and experience
- **Blog Integration**: Seamless blog post display and navigation
- **Modern Design**: Clean, responsive layout with Tailwind CSS
- **Performance**: Optimized with Next.js 15 and Turbopack
- **TypeScript**: Full type safety across the application
- **Component Library**: Reusable UI components with Radix UI
- **Theme Support**: Dark/light mode with next-themes
- **SEO Optimized**: Built-in Next.js SEO features

### Blog CMS (`/crm`)

- **Content Management**: Easy blog post creation and editing
- **Rich Text Editor**: Full-featured content editing experience
- **Content Publishing**: Draft, review, and publish workflow
- **Media Management**: Image and asset uploads for blog posts
- **API**: RESTful API for content delivery to the frontend
- **Authentication**: Secure admin access for content management
- **Database**: PostgreSQL with Docker support

## 🔧 Development

### Available Scripts

- `pnpm dev` - Start all development servers
- `pnpm build` - Build all applications
- `pnpm lint` - Lint all packages
- `pnpm format` - Format code with Prettier

### Database Setup

The project uses PostgreSQL via Docker Compose. The database configuration is in `docker-compose.yml` and connects to the Strapi CMS.
