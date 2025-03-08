# Nuxt.js Local Deployment Guide

This guide walks you through setting up and running a Nuxt.js project on your local machine.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (Recommended: LTS version)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

## Installation

1. Clone your Nuxt.js project:
   ```sh
   git clone https://github.com/evoaiman/boilerplate-nuxt.git
   cd boilerplate-nuxt
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

## Running in Development Mode

Start the Nuxt development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```

By default, the app will be accessible at `http://localhost:3000/`.

## Building and Running in Production Mode

1. Build the project:
   ```sh
   npm run build
   # or
   yarn build
   ```

2. Start the production server:
   ```sh
   npm run start
   # or
   yarn start
   ```

## Running as a Static Site

If you are using Nuxt in static mode:

1. Generate static files:
   ```sh
   npm run generate
   # or
   yarn generate
   ```

2. Serve the `dist/` folder:
   ```sh
   npx serve dist
   ```
   The static site will be available at `http://localhost:5000/` (depending on the port assigned).

## Environment Variables

Create a `.env` file in the root directory and add your environment variables:
   ```sh
   API_URL=http://localhost:3000/api
   ```

Make sure to use `@nuxtjs/dotenv` or built-in Nuxt environment variable handling to access them in your project.

## Troubleshooting

- **Port Conflict**: If port `3000` is in use, run `nuxt dev -p 4000` to use port `4000`.
- **Dependency Issues**: Try deleting `node_modules` and `package-lock.json/yarn.lock`, then reinstall dependencies:
  ```sh
  rm -rf node_modules package-lock.json yarn.lock
  npm install
  ```

## Conclusion

You have successfully set up and deployed a Nuxt.js project locally. 🚀
