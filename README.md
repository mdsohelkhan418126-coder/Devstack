# Dev Stack Builder

Dev Stack Builder

Explore, compare, and assemble your ideal development stack — one technology at
a time.

React TypeScript Tailwind CSS License: MIT

Overview

Dev Stack Builder is an interactive web app that helps developers browse
frontend, backend, database, and tooling options, compare them side by side, and
build a personalized tech stack for their next project — all through a clean,
card-based interface with a persistent "cart" of selections.

Pick a technology, add it to your stack, and see your choices update live in a
sticky sidebar — no page reloads, no clutter, just a fast way to plan what
you're building with next.

Built With Technology Purpose React 19 (use, Suspense) Component architecture &
concurrent data loading TypeScript Type-safe props, models, and state Tailwind
CSS Utility-first, responsive styling React Icons Lightweight icon set
(react-icons/io, react-icons/fa) React Toastify Non-intrusive toast
notifications for user actions Key Features Browse & Discover Technologies

A responsive, filterable grid of technology cards — each showing an icon,
category, difficulty level, star rating, and short description — so you can
quickly scan and compare your options before adding them to your stack.

🛒 Build Your Stack in Real Time

Add technologies to a running "stack" with a single click. A sticky sidebar cart
tracks every selection, lets you remove individual items or clear the whole
stack, and gives instant toast feedback for every action.

Smooth, Modern Data Loading

Technology data streams in via React's Suspense and the use hook, with a
graceful loading state — keeping the UI responsive and the experience seamless
as data is fetched.

Getting Started bash

## Clone the repository

git clone
[https://github.com/your-username/dev-stack-builder.git](https://github.com/your-username/dev-stack-builder.git)

## Install dependencies

cd dev-stack-builder npm install

## Run the development server

npm run dev Project Structure src/ ├── assets/ # Logos, hero illustrations ├──
components/ │ ├── Navbar.tsx # Responsive nav with mobile menu │ ├── Hero.tsx #
Landing hero section │ ├── Skill.tsx # Technology section wrapper (Suspense
boundary) │ ├── SkillCard.tsx# Renders the grid of technology cards │ ├──
AddCart.tsx # Individual technology card + "add to stack" │ └── Cart.tsx #
Sticky sidebar cart of selected technologies └── types.ts # Shared TypeScript
interfaces Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the
issues page.

📄 License

This project is licensed under the MIT License — see the LICENSE file for
details.

## write the answers

1. What is JSX, and why is it used in React?

JSX (JavaScript XML) is a syntax extension that lets you write HTML-like markup
directly inside JavaScript/TypeScript. Under the hood, it compiles down to
React.createElement() calls.

1. Difference between props and state.

Props are data passed into a component from its parent. They're read-only from
the child's perspective. State is data a component owns and manages internally,
and can change over time, triggering re-renders.

What does useState do, and where did you use it?

useState gives a component a piece of state and a function to update it. Calling
the updater function triggers a re-render with the new value.

You only use it once in this project — in Navbar.tsx, to track whether the
mobile menu is open.

1. What does useEffect do — and did you actually need it here?

Worth flagging: you didn't use useEffect in this project — and that's actually a
nice detail worth explaining, since it shows a more modern pattern.

useEffect normally lets you run side effects (like fetching data) after render,
typically like a fetch or subscription setup.

1. Why does every item in .map() need a unique key?

React uses key to track which items in a list changed, were added, or were
removed between renders — so it can update the DOM efficiently instead of
re-rendering the whole list. Without stable keys, React may mismatch items
(e.g., wrong item gets removed, or state gets attached to the wrong row).

1. What is conditional rendering? Example from your code.

Conditional rendering means showing different UI depending on some condition —
using if, ternaries, or &&.

Parent → child data, and child → parent communication

Parent to child: via props, passed as JSX attributes.

In Skill.tsx (parent) rendering SkillCard child.
