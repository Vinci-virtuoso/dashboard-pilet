# 📊 my-pilet – Senior React Developer Take-Home Test

This project is a Piral microfrontend module (pilet) for the `my-app` Piral instance. It registers a **Dashboard** route and menu item, fetches posts from a public API, supports optimistic updates for adding posts, and provides a dedicated detail view for individual posts.

## 🎯 Features

- ✅ **Piral Integration** via `app.createConnector()`
- ✅ **Modern React** (hooks, functional components, `useReducer`)
- ✅ **Reusable components** (`ItemCard`, `ItemList`, `AddItemForm`, etc.)
- ✅ **API Data Fetching** from `https://jsonplaceholder.typicode.com/posts`
- ✅ **Pagination** for lists with simple page controls
- ✅ **Optimistic UI** updates when adding new posts
- ✅ **Detail View** at `/dashboard/:id`
- ✅ **Tailwind CSS** styling via CDN
- ✅ **TypeScript** support and declaration generation
- ✅ **Production-ready build** via Piral CLI

## 🗂 Folder Structure

```plaintext
my-pilet/
├── package.json           # Pilet manifest and scripts
├── pilet.json             # Pilet configuration for Piral integration
├── tsconfig.json          # TypeScript configuration
├── package-lock.json      # Lockfile for reproducible installs
└── src/
    ├── assets.d.ts         # Global asset declarations
    ├── injectTailwind.ts   # Injects Tailwind CSS via CDN
    ├── index.tsx           # Pilet entry point and Piral connector setup
    ├── components/         # Reusable UI components
    │   ├── AddItemForm.tsx
    │   ├── InputField.tsx
    │   ├── ItemCard.tsx
    │   ├── ItemList.tsx
    │   └── Pagination.tsx
    └── pages/              # Route components
        ├── DashboardPage.tsx
        └── DetailPage.tsx
```

## 🚀 Getting Started

1. Install Piral CLI (if not installed):

   ```bash
   npm install -g piral-cli
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run in development mode (Piral emulator):

   ```bash
   npm start
   ```

4. Generate TypeScript declarations (post-install):

   ```bash
   npm run postinstall
   ```

5. Build for production:

   ```bash
   npm run build
   ```

6. Upgrade pilet dependencies:

   ```bash
   npm run upgrade
   ```

## 🔌 Piral Integration

The pilet registers:

- A **Dashboard** menu item in the `my-app` Piral instance.
- A **route** at `/dashboard` that:
  - Fetches posts from the public API.
  - Displays a paginated list of posts with optimistic UI for new items.
- A **detail view** at `/dashboard/:id` for full post content.

Integration is implemented using:

```ts
app.createConnector()
```

to fetch and inject post data as props into React components.

## 🧱 Components

| Component        | Description                                |
| ---------------- | ------------------------------------------ |
| `ItemCard`       | Renders a post preview with title & body   |
| `ItemList`       | Displays a list of `ItemCard` components   |
| `AddItemForm`    | Form to add a new post with optimistic UI  |
| `InputField`     | Reusable input/textarea component          |
| `Pagination`     | Simple pagination controls                 |

## 📄 Pages

| Page            | Description                                     |
| --------------- | ----------------------------------------------- |
| `DashboardPage` | Main dashboard with paginated list and add form |
| `DetailPage`    | Detail view displaying full post content        |

## 📦 State Management

Local state is managed via `useReducer`, initialized with data from the Piral connector. Optimistic updates are applied when adding new posts. No external state library is used.

## 🎨 Styling

Tailwind CSS is included via CDN in `injectTailwind.ts`. Styles are responsive and accessible.


## 📌 Assumptions

- Posts added are **not persisted** to the API (local only).
- New post `id` values are generated with `Date.now()`.
- Pagination logic can be extended via array slicing 
- Assumes a running Piral shell or emulator for integration.

## 📧 Submission

To run against a custom feed:

```bash
npm start -- --target <feed-url>
```

