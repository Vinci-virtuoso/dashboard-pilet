# 📊 my-pilet

This project is a Piral microfrontend module (pilet) for the `my-app` Piral instance. It registers a **Dashboard** route and menu item, fetches posts from a public API, supports optimistic updates for adding posts, and provides a dedicated detail view for individual posts.

## ✨ Features

- ✅ **Piral Integration:** Registers a new page at `/dashboard` and a "Dashboard" menu item in the Piral shell.
- ✅ **Paginated Data Display:** Fetches and displays a list of posts from the JSONPlaceholder API in a paginated view.
- ✅ **Scalable Pagination:** Pagination control efficiently handles thousands of pages by rendering a dynamic window of page links.
- ✅ **Efficient Data Fetching:** Only fetches data required for the current page, reducing load time and memory usage.
- ✅ **Add New Item:** Users can add a new post via a form, which is optimistically added to the top of the list.
- ✅ **Detail View:** Clicking an item navigates to a dedicated detail page.
- ✅ **Performance Optimized:** The detail page fetches data only if navigated to directly; otherwise, post data is passed via router state to avoid redundant API calls.
- ✅ **Lazy Loading:** The detail page component is lazy-loaded to keep the initial bundle size small.
- ✅ **Reusable Components:** Built with generic, reusable components (`InputField`, `ItemCard`, `Pagination`, etc.).
- ✅ **Robust Error Handling:** Both dashboard and detail pages feature explicit loading and error states for a better user experience.
- ✅ **Accessibility:** Form inputs are correctly linked with labels for screen reader support.

## 🛠️ Technical Stack

- **Framework:** Piral
- **Library:** React (v18, with Hooks)
- **Language:** TypeScript (strict mode enabled)
- **Styling:** Tailwind CSS (integrated via CDN)
- **Routing:** React Router (v5)
- **Build Tool:** Webpack 5 (via piral-cli)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd <your-repo-folder>
   ```

2. **Install the Piral instance dependencies**  
   (This step is only needed once to set up the emulator):
   ```bash
   cd my-app
   npm install
   cd ..
   ```

3. **Install the pilet dependencies:**
   ```bash
   cd my-pilet
   npm install
   ```

### Running the Project

Start the development server (with hot-reload):
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


```

