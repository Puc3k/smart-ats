# Smart ATS – AI-Powered Recruitment Platform

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 🚀 About The Project

**Smart ATS** is a modern Applicant Tracking System designed to automate the initial stages of the recruitment process.

In traditional workflows, HR specialists spend hours manually entering data from PDF resumes into systems. Smart ATS solves this problem by leveraging **Artificial Intelligence (OpenAI)** to parse, analyze, and structure candidate data automatically.

This project was built to demonstrate full-stack capabilities in the **Next.js ecosystem**, migrating robust backend concepts (relational databases, strict typing, architecture) into a modern JavaScript environment.

### Key Features

* **📄 AI Resume Parsing:** Automatically extracts candidate details (Name, Email, Skills, Summary) from PDF files using OpenAI.
* **🗄️ Automated Data Entry:** Converts unstructured PDF text into structured database records.
* **📊 Interactive Dashboard:** Kanban-style or Table view for managing candidates (New, Interview, Hired, Rejected).
* **🔐 Secure Authentication:** Role-based access control using Clerk (recruiters only).
* **⚡ Server-Side Performance:** Heavy lifting (parsing, database operations) is handled via Next.js Server Actions.

---

## 🛠️ Tech Stack

The project is built using a modern, type-safe stack:

* **Frontend:** [Next.js 14+](https://nextjs.org/) (App Router), [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/)
* **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (Radix UI based)
* **Backend Logic:** Next.js Server Actions (Node.js runtime)
* **Database:** [PostgreSQL](https://www.postgresql.org/)
* **ORM:** [Prisma](https://www.prisma.io/) (for type-safe database queries)
* **AI Integration:** [OpenAI API](https://openai.com/) (GPT-4o-mini / GPT-3.5-turbo)
* **Authentication:** [Clerk](https://clerk.com/)
* **File Parsing:** `pdf-parse`

---

## ⚙️ Architecture & Decisions

* **Why Next.js App Router?** To leverage React Server Components (RSC) for better performance and SEO, while keeping the backend logic close to the UI via Server Actions.
* **Why PostgreSQL + Prisma?** To ensure data integrity with a relational model. Prisma provides a type-safe bridge between the application and the database, minimizing runtime errors.
* **Why shadcn/ui?** To build an accessible and professional-looking Enterprise UI without fighting with CSS, allowing focus on business logic.

---

## 💻 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

* Node.js (v18 or higher)
* npm or yarn
* PostgreSQL database (local or cloud, e.g., Supabase/Neon)

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/Puc3k/smart-ats.git](https://github.com/Puc3k/smart-ats.git)
    cd smart-ats
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Environment Setup**
    Create a `.env` file in the root directory and add your keys:
    ```env
    # Database
    DATABASE_URL="postgresql://user:password@localhost:5432/smart_ats"

    # Auth (Clerk)
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
    CLERK_SECRET_KEY=sk_test_...

    # AI
    OPENAI_API_KEY=sk-...
    ```

4.  **Database Migration**
    Push the Prisma schema to your database:
    ```bash
    npx prisma db push
    ```

5.  **Run the development server**
    ```bash
    npm run dev
    ```

6.  Open [http://localhost:3000](http://localhost:3000) in your browser.

---
