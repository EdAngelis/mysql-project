# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development (hot-reload)
npm run dev

# Production build + run
npm run build

# Database management
npm run db:create       # Create the database
npm run db:migrate      # Run pending migrations
npm run db:seed         # Run seeders
npm run db:reset        # Undo all migrations, then re-migrate and re-seed
```

TypeScript type-checking only (no emit):
```bash
npx tsc --noEmit
```

No test runner or linter is configured yet; `chai` is installed as a dev dependency but no test scripts exist.

## Architecture

This is a Node.js/Express REST API written in TypeScript targeting a MySQL database via Sequelize ORM.

**Request flow (intended, partially implemented):**
```
Express routes (src/routes/) → Controllers (src/controller/) → Services (src/services/) → Repositories (src/repository/) → Sequelize Models (src/models/)
```

**Key files:**
- `src/server.ts` — entry point, starts HTTP server
- `src/app.ts` — Express app setup (CORS, Morgan, JSON body parsing, routes mounted, DB connection verified on startup)
- `src/config/config.ts` — reads `NODE_ENV`, exports `port` and `apiKey` (dev key: `f00f3020932fddf`)
- `src/config/database.ts` — Sequelize instance, connects using `DB_*` env vars (defaults to the `sakila` DB if env not set)
- `src/middlewares/api-key.ts` — validates `x-api-key` header, returns 403 on failure
- `src/routes/index.ts` — router, currently empty

**Database tooling:**
- `.sequelizerc` maps Sequelize CLI paths to `src/database/` (config, migrations, seeders)
- `src/database/config.js` — plain JS config consumed by the CLI (reads `.env` via dotenv)
- Migrations and seeders live under `src/database/migrations/` and `src/database/seeders/`
- Models live in `src/models/` and are defined as TypeScript Sequelize classes

**TypeScript config:**
- `strict: true`, `module: NodeNext`, output to `dist/`, source root `src/`

## Environment

Copy `.env` and fill in values before running locally:

```
PORT=3001
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=admin
DB_NAME=movies
```
