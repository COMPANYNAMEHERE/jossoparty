FROM node:20-alpine AS deps
WORKDIR /app
RUN apk add --no-cache python3 make g++
COPY package.json ./
RUN npm install --omit=dev --no-audit --no-fund && npm cache clean --force

FROM node:20-alpine
WORKDIR /app
RUN addgroup -S app && adduser -S app -G app \
 && mkdir -p /data && chown -R app:app /data
COPY --from=deps /app/node_modules ./node_modules
COPY --chown=app:app server.js ./server.js
COPY --chown=app:app package.json ./package.json
ENV NODE_ENV=production
USER app
EXPOSE 3000
CMD ["node", "server.js"]
