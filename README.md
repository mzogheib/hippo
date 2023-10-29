# Hippo 🦛

Adventures in multi-app development.

## 📜 Contents

This project was created with [Turborepo](https://turbo.build/) and includes the following:

### Apps

- `rwa`: A [Next.js](https://nextjs.org/) app
- `spa`: A [React](https://react.dev/) app

### APIs

- `profile`: An [Express](https://expressjs.com/) API to fetch user profile data

### Packages

- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `profile-service`: A TypeScript library for interacting with the `profile` API

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

## 📥 Installation

1. Install [`pnpm`](https://pnpm.io/)
2. Clone the repo
3. Install from the root directory

```sh
cd hippo
pnpm i
```

## 🛠️ Usage

### Build

To build all apps and packages, run the following command:

```sh
cd hippo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```sh
cd hippo
pnpm dev
```
