# Use a Debian-based Node.js image to avoid build issues
FROM node:22-bookworm AS builder

# Install dependencies required for native modules and bun
RUN apt-get update && apt-get install -y curl python3 python3-pip build-essential

# Install Bun globally
RUN curl -fsSL https://bun.sh/install | bash

# Add bun to PATH
ENV PATH="/root/.bun/bin:$PATH"

# Set the working directory
WORKDIR /app

# Copy package.json and bun.lockb if available
COPY package.json bun.lockb* ./

# Install dependencies using Bun
RUN bun install

# Copy the rest of the application files
COPY . .

# Build the Next.js app using Bun
RUN bun run build

# Use a lightweight Node.js image for production
FROM node:22-bookworm AS runner

# Install Bun in runner stage too
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:$PATH"

# Set the working directory
WORKDIR /app

# Copy built files from the builder stage
COPY --from=builder /app ./

# Expose the Next.js default port
EXPOSE 3000

# Start the app using Bun
CMD ["bun","start"]
