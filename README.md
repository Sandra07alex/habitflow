# 🌊 Habit Flow

> It takes **21 days to build a habit and 90 days to build a lifestyle.**

Habit Flow is a modern habit tracking application that encourages users to stay consistent by visualizing their progress rather than simply checking boxes. Inspired by the **21/90 Rule**, the application transforms daily habit tracking into a rewarding experience with an intuitive and minimal interface.

---

## 🚀 Live Demo

**URL:** https://habitflow-silk-tau.vercel.app/

---

## 📂 Repository

https://github.com/Sandra07alex/habitflow

# Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React

---

# Features

- Create and manage habits
- Daily habit completion tracking
- 21-day habit building phase
- 90-day lifestyle progression
- Progress visualization
- Responsive UI
- Dashboard overview
- Modern minimal design

---

# Running the Project Locally

### Clone the repository

```bash
git clone https://github.com/Sandra07alex/habitflow
```

### Navigate to the project

```bash
cd habit-flow
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:3000
```

---

# Key Decisions and Why

## 1. Next.js App Router

I chose Next.js App Router because it provides a clean project structure, excellent routing, server components, and better scalability for future features such as authentication and cloud syncing.

---

## 2. TypeScript

TypeScript was used to improve maintainability and catch errors during development, making components easier to refactor as the application grows.

---

## 3. Tailwind CSS

Tailwind allowed rapid UI development while keeping styling consistent across the application. Utility classes also made responsive layouts easier to implement.

---

## 4. shadcn/ui Components

Instead of building every component from scratch, I used shadcn/ui for accessible and customizable UI elements. This helped maintain consistency while allowing complete styling control.

---

## 5. Component-Based Architecture

The project is divided into reusable components such as:

- Layout
- Dashboard
- Habit Cards
- Progress Components
- UI Components

This makes the codebase easier to maintain and extend.

---

## 6. Data Model

Each habit stores information such as:

```ts
Habit {
  id
  title
  completedDays
  streak
  createdAt
}
```

This simple model supports tracking progress, calculating streaks, and future analytics without unnecessary complexity.

---

# Hardest Problem

The most challenging part was designing a habit tracker that feels engaging instead of repetitive.

Initially, I experimented with conventional checklists and progress bars, but they lacked motivation and visual appeal. After several iterations, I redesigned the experience around the **21/90 Rule**, focusing on visual progress that encourages users to return every day.

Balancing aesthetics with usability required multiple UI revisions before arriving at a clean, minimal interface.

---

# AI Usage

AI was used as a development assistant throughout the project, but every generated output was reviewed and modified before being integrated.

### AI assisted with

- Brainstorming UI concepts
- Component structure
- Tailwind styling suggestions
- React component scaffolding
- TypeScript improvements
- README writing
- Code debugging

### What I changed

- Refactored generated components to match the project's architecture.
- Simplified overly complex Tailwind class structures.
- Improved responsiveness for mobile devices.
- Renamed components and variables for readability.
- Removed unnecessary abstractions suggested by AI.

### What I rejected

- Generic dashboard layouts that didn't align with the project's visual identity.
- Overly complicated state management solutions that weren't needed.
- Designs that prioritized aesthetics over usability.

### What I fixed

- Layout inconsistencies
- Responsive design issues
- Component organization
- TypeScript errors
- Styling conflicts

AI significantly accelerated development, but the final implementation and design decisions were made manually.

---

# Limitations

Current limitations include:

- No backend database
- No authentication
- Progress is not synchronized across devices
- No reminder or notification system
- Limited analytics
- No offline support

---

# What I Would Do With More Time

Given additional time, I would implement:

- User authentication
- Cloud synchronization
- Habit categories
- Calendar view
- Weekly and monthly analytics
- Achievement system
- Reminder notifications
- Dark mode
- Offline support with local caching
- Data export/import
- Social challenges with friends

---

# Stretch Goals Attempted

The following stretch goals were explored during development:

- Responsive design across desktop and mobile
- Reusable component architecture
- Modern UI using shadcn/ui
- Progress visualization beyond simple checklists
- Scalable project structure for future backend integration

---

# Folder Structure

```
app/
components/
hooks/
lib/
public/
styles/
types/
```

---

# Future Vision

Habit Flow aims to become more than a habit tracker. Future versions will focus on transforming habit formation into a visually rewarding journey through personalized insights, long-term progress tracking, and motivational experiences based on behavioral psychology.

---

# Author

**Sandra Alex**

B.Tech Computer Science and Design

Portfolio: sandraalex.site

GitHub: https://github.com/sandra07alex

LinkedIn: https://linkedin.com/in/sandra07alex

---

## Inspiration

> "It takes **21 days to build a habit and 90 days to build a lifestyle.**"

Habit Flow was built around this philosophy to encourage consistency through meaningful visual feedback rather than simple task completion.
