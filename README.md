# Next.js Auth0 Authentication System

This project was developed as a technical assignment for a potential employer.  
It demonstrates a modern authentication and authorization system using Next.js, Auth0, and NextAuth.js.
All code comments and this README file are in english. The UI language is turkish.

## Features

- Next.js 14+ (App Router)
- TypeScript & Tailwind CSS for modern UI
- Auth0 + NextAuth.js (OAuth) user authentication
- JWT-based session management
- Route protection with Middleware
- Clean code following SOLID principles & 12-Factor methodology

---

## Setup & Getting Started

1. **Clone the repository**
    ```bash
    git clone https://github.com/<your-username>/next-auth.git
    cd next-auth
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Create a `.env.local` file**
    ```env
    AUTH0_CLIENT_ID=...
    AUTH0_CLIENT_SECRET=...
    AUTH0_ISSUER=...
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=...
    ```

4. **Start the development server**
    ```bash
    npm run dev
    ```

---

## Usage

- Go to the main page and log in via Auth0.
- After successful login, you will see a link to the "Protected Area".
- The `/protected` page is only accessible to authenticated users.
- Use the "Sign Out" button to log out.

---

## Creating a Test User

- In the Auth0 Dashboard, go to **User Management > Users**.
- Create a test user (with email and password) for login testing.

---

## Technical Notes

- All authentication and session management is handled via NextAuth and Auth0.
- Route protection for `/protected` is implemented using Next.js Middleware and JWT.
- The project structure follows SOLID and 12-Factor App principles.
- Tailwind CSS is used for basic UI styling.

---

## Commit & Pull Request Process

- All development took place on the `dev/v1.0.0` branch.
- After adding this README, a pull request will be opened and merged into `prod/v1.0.0`.
