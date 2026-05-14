FROM node:20-alpine
WORKDIR /app
COPY . .
RUN corepack enable && pnpm install --no-frozen-lockfile
RUN pnpm --filter server build
CMD ["pnpm", "--filter", "server", "start"]
