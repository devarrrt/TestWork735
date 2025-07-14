This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Features

- Built with **Next.js** + **TypeScript**
- Code quality ensured by **Prettier**, **ESLint**, and **Stylelint**
- Fake JWT-based authentication with a simulated network delay to mimic real API behavior
- Product data fetched from the public API: [DummyJSON](https://dummyjson.com/)
- Clean and organized code following best practices

## Authentication

To log in, use the following credentials:

* **Username:** admin
* **Password:** 1234

The authentication is simulated using a fake JWT token and includes a delay to emulate network latency.

## Available Scripts

 npm run dev — runs the app in development mode
 npm run build — builds the app for production
 npm start — runs the production build
 npm run lint — runs ESLint checks
 npm run format — runs Prettier and Stylelint formatting