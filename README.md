 <div align="center">
<img src="https://capsule-render.vercel.app/api?type=venom&color=0:080B18,50:142D50,100:2563EB&height=180&section=header&text=AUTHFLOW&fontSize=55&fontColor=FFFFFF&fontAlignY=48&stroke=3B82F6&strokeWidth=1" width="100%" />

AUTHENTICATION & ACCESS MANAGEMENT

Secure authentication. Seamless access. Reliable user sessions.

<br/>
<img src="https://img.shields.io/badge/REACT_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/TYPESCRIPT-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/SUPABASE-181818?style=for-the-badge&logo=supabase&logoColor=3ECF8E" />
<img src="https://img.shields.io/badge/VITE-646CFF?style=for-the-badge&logo=vite&logoColor=white" />

FEATURES · TECH STACK · INSTALLATION · TESTING · SECURITY

</div>

⸻

◈ OVERVIEW

AuthFlow is a modern authentication application built with React 19, TypeScript, and Supabase.

It delivers a streamlined authentication experience with account registration, secure login, password recovery, session management, and protected application routes.

Designed with a focus on usability, validation, and authentication workflows.

◈ CORE FEATURES

<table>
<tr>
<td width="50%">

◉ User Registration

Create accounts using name, email, and password.

</td>
<td width="50%">

◉ Authentication

Sign in and authenticate through Supabase Auth.

</td>
</tr>
<tr>
<td>

◉ Password Recovery

Request password reset emails.

</td>
<td>

◉ Password Updates

Reset and update account passwords.

</td>
</tr>
<tr>
<td>

◉ Protected Routes

Restrict dashboard access to authenticated users.

</td>
<td>

◉ Session Management

Maintain and monitor authentication sessions.

</td>
</tr>
<tr>
<td>

◉ Password Strength

Visual feedback for password strength.

</td>
<td>

◉ Form Validation

Validate names, email addresses, passwords, and required inputs.

</td>
</tr>
<tr>
<td colspan="2">

◉ Password Visibility

Toggle password visibility during authentication.

</td>
</tr>
</table>

◈ TECHNOLOGY STACK

<div align="center">

FRONTEND & FRAMEWORKS

<img src="https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" />
<img src="https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white" />

BACKEND & AUTHENTICATION

<img src="https://img.shields.io/badge/Supabase-181818?style=flat-square&logo=supabase&logoColor=3ECF8E" />

DEVELOPMENT & QUALITY

<img src="https://img.shields.io/badge/Vitest-6E9F18?style=flat-square&logo=vitest&logoColor=white" />
<img src="https://img.shields.io/badge/Testing_Library-E33332?style=flat-square&logo=testinglibrary&logoColor=white" />
<img src="https://img.shields.io/badge/Lucide_React-111111?style=flat-square&logo=lucide&logoColor=white" />
<img src="https://img.shields.io/badge/Oxlint-111111?style=flat-square" />
</div>

◈ GETTING STARTED

Prerequisites

* Node.js
* npm
* Git
* A Supabase project

01 — Clone Repository

git clone https://github.com/wickedceo/authflow.git
cd authflow

02 — Install Dependencies

npm install

03 — Configure Environment Variables

Create a .env.local file in the project root.

VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_publishable_key

Obtain your project URL and publishable key from your Supabase project settings.

04 — Launch Development Server

npm run dev

◈ AVAILABLE SCRIPTS

COMMAND	DESCRIPTION
npm run dev	Start development server
npm run build	Build production application
npm run lint	Run code quality checks
npm test	Run automated tests
npm run preview	Preview production build

◈ TESTING & VALIDATION

AuthFlow includes automated validation tests covering:

<table>
<tr>
<td>✓</td>
<td>Valid and invalid email addresses</td>
</tr>
<tr>
<td>✓</td>
<td>Password requirements</td>
</tr>
<tr>
<td>✓</td>
<td>Name validation</td>
</tr>
<tr>
<td>✓</td>
<td>Empty input handling</td>
</tr>
</table>

Run the test suite:

npm test

◈ SECURITY & AUTHENTICATION

AuthFlow incorporates the following security-related implementation:

* Supabase Auth handles user authentication.
* Environment variables provide project configuration.
* Local environment files are excluded from Git.
* Protected routes restrict unauthenticated dashboard access.

Configuration note: Never commit private credentials or service-role keys to your repository. Only use the appropriate public Supabase client key in browser-exposed environment variables.

◈ EMAIL DELIVERY

Password recovery uses Supabase Auth email functionality.

Supabase’s default email service has sending restrictions. Production deployments should configure a custom SMTP provider for reliable email delivery.

◈ PROJECT STATUS

<img src="https://img.shields.io/badge/CORE_FUNCTIONALITY-IMPLEMENTED-16A34A?style=for-the-badge" />
<img src="https://img.shields.io/badge/TESTING-INCLUDED-2563EB?style=for-the-badge" />

Core authentication functionality implemented and tested.

◈ AUTHOR & OWNERSHIP

<div align="center">
<img src="https://img.shields.io/badge/DEVELOPED_BY-WICKEDCEO-111111?style=for-the-badge&logo=github&logoColor=white" />

WICKEDCEO

GitHub Profile · AuthFlow Repository

Original project work and intellectual property belong to WICKEDCEO unless otherwise stated. Repository-specific licensing terms apply.

<br/>

AUTHFLOW

IDENTITY. ACCESS. CONTROL.

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:2563EB,100:080B18&height=4&section=footer" width="100%" />
</div>