AuthFlow — Authentication System

A modern, secure authentication application built with React, TypeScript, and Supabase.

AuthFlow provides a clean authentication experience with account registration, login, password recovery, session management, and protected routes.

Features

* User Registration — Create accounts with name, email, and password.
* User Login — Authenticate using Supabase Auth.
* Password Recovery — Request password reset emails.
* Password Updates — Reset and update account passwords.
* Protected Routes — Restrict dashboard access to authenticated users.
* Session Management — Maintain and monitor authentication sessions.
* Password Visibility — Toggle password visibility.
* Password Strength — Visual password-strength feedback.
* Form Validation — Validate email addresses, passwords, and names.

Tech Stack

* React 19
* TypeScript
* Vite
* Supabase Authentication
* React Router
* Lucide React
* Vitest
* Testing Library
* Oxlint

Getting Started

1. Clone the repository

git clone https://github.com/wickedceo/authflow.git
cd authflow

2. Install dependencies

npm install

3. Configure environment variables

Create a .env.local file in the project root:

VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_publishable_key

Get these values from your Supabase project settings.

4. Start the development server

npm run dev

Available Scripts

Command	Description
npm run dev	Start development server
npm run build	Build production application
npm run lint	Run code quality checks
npm test	Run automated tests
npm run preview	Preview production build

Testing

AuthFlow includes automated validation tests covering:

* Valid and invalid email addresses
* Password requirements
* Name validation
* Empty input handling

Run tests with:

npm test

Security

* Supabase handles authentication.
* Environment variables are used for project configuration.
* Local environment files are excluded from Git.
* Protected routes prevent unauthenticated dashboard access.

Project Status

Core authentication functionality implemented and tested.

Author

WICKEDCEO

GitHub: @wickedceo

⸻

Built with React, TypeScript, and Supabase.