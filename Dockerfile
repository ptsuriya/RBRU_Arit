FROM node:18-alpine

WORKDIR /app

# ติดตั้ง pnpm
RUN npm install -g pnpm

COPY package*.json ./
RUN pnpm install

COPY . .

RUN pnpm run build

EXPOSE 3000
CMD ["pnpm", "start"]
