# Deployment

## Client

Build the frontend with npm run build in client and serve the build directory through a CDN or edge platform.

## Server

Run the Express server behind a reverse proxy and set CLIENT_URL, DATABASE_URL, REDIS_URL, and Stripe/email credentials through environment variables.

## Docker

The root Dockerfile packages the Express API for production-style deployment.

Use docker-compose.yml for local development with separate client and server containers.

Use docker-compose.prod.yml for a production-style API deployment behind Nginx.

## Production Compose

1. Copy .env.example to .env and set production values.
2. Start the stack with `docker compose -f docker-compose.prod.yml up --build -d`.
3. Send API traffic to the reverse proxy on port 80.

The production compose stack includes:

- `api`: the Express API built from the root Dockerfile.
- `proxy`: an Nginx container forwarding `/api/*` requests to the API container.

The React client should still be built separately and deployed as static assets through a CDN, object storage site, or edge platform.

## Vercel

This repository is configured for a single Vercel project:

- the React frontend is built from `client` using Vercel static build output
- the Express API is exposed through Vercel Functions in `api`
- `vercel.json` explicitly routes `/api/*` to the serverless API and all other routes to the React app

Recommended Vercel environment variables:

- `CLIENT_URL=https://your-domain.vercel.app`
- `ALLOWED_ORIGINS=https://your-domain.vercel.app`
- `NODE_ENV=production`
- `REACT_APP_API_URL=/api` or leave it unset to use the same-origin default

Deploy flow:

1. Import the repository into Vercel.
2. Keep the project root at the repository root.
3. Add the production environment variables.
4. Deploy.

Preview deployments will also work because the API CORS policy accepts Vercel preview domains.

If the deployment shows a plain 404, the most common causes are:

- the wrong project root was imported into Vercel
- an older deployment is still using the previous `vercel.json`
- the project needs a fresh deploy after the explicit API/static route configuration change
