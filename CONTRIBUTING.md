# Contributing to SmartResto

Thank you for your interest in contributing to SmartResto! This document provides guidelines and instructions for contributing.

## Code of Conduct

Be respectful, inclusive, and professional in all interactions.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/smart_resto.git`
3. Add upstream: `git remote add upstream https://github.com/triveni1323-crypto/smart_resto.git`
4. Create a feature branch: `git checkout -b feature/your-feature-name`

## Development Workflow

### Setup
```bash
cd smart_resto
pnpm install
cp .env.example .env.local
docker-compose up -d
```

### Making Changes
1. Make your changes in your feature branch
2. Follow the code style (TypeScript, ESLint)
3. Write or update tests as needed
4. Run linting: `pnpm lint`
5. Run type checking: `pnpm type-check`

### Commit Messages
Use clear, descriptive commit messages:
```
feat: Add order status real-time updates
fix: Correct inventory deduction logic
docs: Update API documentation
refactor: Simplify auth middleware
test: Add tests for billing service
```

## Pull Request Process

1. Ensure your branch is up to date: `git pull upstream main`
2. Push to your fork: `git push origin feature/your-feature-name`
3. Open a PR with a clear title and description
4. Link any related issues: "Closes #123"
5. Wait for CI checks to pass
6. Respond to review feedback
7. Get approval before merging

## Code Style

### TypeScript
- Use strict type checking
- Avoid `any` unless absolutely necessary
- Export types alongside implementations

### React
- Functional components with hooks
- Meaningful component names
- Props interfaces prefixed with `I` (e.g., `IMenuCardProps`)

### Database
- Use Drizzle ORM for all queries
- Define schemas in `db/schema.ts`
- Keep migrations clean and reversible

## Testing

- Write unit tests for services
- Write integration tests for API routes
- Aim for >80% coverage
- Test files: `*.test.ts` or `*.spec.ts`

## Documentation

- Update README if adding features
- Add JSDoc comments to functions
- Update ARCHITECTURE.md for structural changes
- Document API routes in code comments

## Issues

### Reporting Bugs
1. Check if issue already exists
2. Use bug report template
3. Provide reproducible steps
4. Include error logs and screenshots

### Requesting Features
1. Check if feature is already planned
2. Use feature request template
3. Explain use case and benefits
4. Suggest implementation approach

## Areas for Contribution

- [ ] UI/UX improvements
- [ ] Backend optimizations
- [ ] Test coverage
- [ ] Documentation
- [ ] Bug fixes
- [ ] Performance enhancements
- [ ] Accessibility improvements
- [ ] Internationalization (i18n)

## Questions?

Open a discussion or ask in our community channels.

---

**Thank you for contributing!** 🚀
