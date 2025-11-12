# ---- Base image ----
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./

# ---- Dependencies layer (with cache) ----
FROM base AS deps
RUN npm install

# ---- Build layer ----
FROM deps AS build
# Copy source code after dependencies
COPY . .
# Fix permissions for tsc
RUN chmod +x ./node_modules/.bin/tsc
# Compile TypeScript -> dist/
RUN npm run build

# ---- Runtime image ----
FROM node:18-alpine AS runtime
WORKDIR /app

# Copy only the compiled output and package info
COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules

# Expose app port
EXPOSE 3000

# Start the app
CMD ["node", "dist/index.js"]
