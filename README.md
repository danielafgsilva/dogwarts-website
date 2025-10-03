# 🐕 Dogwarts - Professional Dog Care Services

A modern, responsive website for professional dog care services built with Next.js 14, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Multi-language Support**: Portuguese and English localization
- **Accessibility**: WCAG 2.1 compliant with ARIA labels and semantic HTML
- **Performance**: Optimized with Next.js 14 App Router and image optimization
- **SEO Ready**: Meta tags, structured data, and sitemap generation
- **Testing**: Comprehensive test suite with Jest and React Testing Library
- **CI/CD**: Automated testing and deployment with GitHub Actions

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + SASS with BEM methodology
- **UI Components**: Radix UI + Custom components
- **Icons**: Lucide React
- **Testing**: Jest + React Testing Library
- **Deployment**: Vercel + GitHub Pages
- **Internationalization**: next-intl

## 📁 Project Structure

```
dogwarts-website/
├── app/                    # Next.js App Router pages
│   ├── blog/              # Blog page
│   ├── contactos/         # Contact page
│   ├── faq/               # FAQ page
│   ├── servicos/          # Services page
│   ├── sobre/             # About page
│   ├── testemunhos/       # Testimonials page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── navbar.tsx        # Navigation component
│   └── theme-provider.tsx # Theme context
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
├── styles/               # SASS stylesheets
├── __tests__/            # Test files
├── .github/              # GitHub workflows
└── locales/              # Translation files
```

## 🛠 Development Setup

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/danielafgsilva/dogwarts-website.git
   cd dogwarts-website
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development server**

   ```bash
   pnpm dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development
pnpm dev                 # Start development server
pnpm build              # Build for production
pnpm start              # Start production server
pnpm lint               # Run ESLint
pnpm type-check         # Run TypeScript type checking

# Testing
pnpm test               # Run tests
pnpm test:watch         # Run tests in watch mode
pnpm test:coverage      # Run tests with coverage report

# Styling
pnpm sass:build         # Compile SASS to CSS
pnpm sass:watch         # Watch SASS files for changes
```

## 🧪 Testing

The project includes comprehensive testing with Jest and React Testing Library:

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Generate coverage report
pnpm test:coverage
```

### Test Coverage

- **Components**: All UI components are tested
- **Pages**: All pages have basic rendering tests
- **Hooks**: Custom hooks are tested
- **Utilities**: Utility functions are tested

## 🌐 Internationalization

The website supports multiple languages:

- **Portuguese (pt-PT)**: Default language
- **English (en)**: Secondary language

Language switching is available in the navigation menu.

## 🎨 Styling Guidelines

### BEM Methodology

We use BEM (Block Element Modifier) for CSS class naming:

```scss
// Block
.navbar {
}

// Element
.navbar__item {
}
.navbar__link {
}

// Modifier
.navbar__item--active {
}
.navbar--mobile {
}
```

### SASS Structure

```
styles/
├── abstracts/           # Variables, mixins, functions
├── base/               # Reset, typography, base styles
├── components/         # Component-specific styles
├── layout/            # Layout-related styles
├── pages/             # Page-specific styles
└── main.scss          # Main SASS file
```

## ♿ Accessibility

The website follows WCAG 2.1 guidelines:

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliant color ratios
- **Focus Management**: Visible focus indicators

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on every push to main

### GitHub Pages

The project is configured for GitHub Pages deployment:

1. Push to main branch
2. GitHub Actions will automatically build and deploy
3. Site will be available at `https://danielafgsilva.github.io/dogwarts-website`

## 🔄 CI/CD Pipeline

GitHub Actions automatically:

- **Runs tests** on every push and PR
- **Checks code quality** with ESLint and TypeScript
- **Builds the project** to ensure it compiles
- **Deploys to GitHub Pages** when merging to main

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js Image component with WebP support
- **Code Splitting**: Automatic code splitting with Next.js

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Workflow

1. **Work on `dev` branch** for new features
2. **Create feature branches** for specific tasks
3. **Write tests** for new functionality
4. **Ensure all tests pass** before submitting PR
5. **Code review** required before merging to main

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Daniela Silva** - Lead Developer
- **Dogwarts Team** - Content and Design

## 📞 Contact

- **Website**: [dogwarts-website.vercel.app](https://dogwarts-website.vercel.app)
- **Email**: contact@dogwarts.com
- **GitHub**: [@danielafgsilva](https://github.com/danielafgsilva)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Radix UI](https://www.radix-ui.com/) for accessible components
- [Lucide](https://lucide.dev/) for beautiful icons

---

Made with ❤️ for our furry friends 🐕
