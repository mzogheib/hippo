## Getting Started

First, create a `.env.local` file in the root directory with the following content

```sh
AUTH0_SECRET='use [openssl rand -hex 32] to generate a 32 bytes value'
AUTH0_BASE_URL='replace with URL for this app'
AUTH0_AUDIENCE='replace with Profile API audience from Auth0 dashboard'
AUTH0_ISSUER_BASE_URL='replace with domain from Auth0 dashboard'
AUTH0_CLIENT_ID='replace with app client id from Auth0 dashboard'
AUTH0_CLIENT_SECRET='replace with app secret from Auth0 dashboard'
```

Then run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

To create [API routes](https://nextjs.org/docs/app/building-your-application/routing/router-handlers) add an `api/` directory to the `app/` directory with a `route.ts` file. For individual endpoints, create a subfolder in the `api` directory, like `api/hello/route.ts` would map to [http://localhost:3000/api/hello](http://localhost:3000/api/hello).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn/foundations/about-nextjs) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_source=github.com&utm_medium=referral&utm_campaign=turborepo-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
