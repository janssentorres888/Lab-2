# Student Information Portal

A simple Student Information Portal developed using React, JSX, and React Router. This project demonstrates reusable components, page navigation, and basic CSS styling.

## Features

- Home page with a welcome message
- Students page with reusable StudentCard components
- Courses page with reusable CourseCard components
- About page containing project information
- Navigation bar linking all four pages
- React Router for page navigation
- Responsive layout with CSS Grid

## Technologies Used

- React
- JavaScript
- JSX
- React Router DOM
- HTML
- CSS
- Vite

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── Navbar.jsx
│   ├── StudentCard.jsx
│   └── CourseCard.jsx
├── pages/
│   ├── Home.jsx
│   ├── Students.jsx
│   ├── Courses.jsx
│   └── About.jsx
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

## Application Routes

| Page | URL |
|---|---|
| Home | `/` |
| Students | `/students` |
| Courses | `/courses` |
| About | `/about` |

## Installation and Setup

1. Clone the repository:

```bash
git clone https://github.com/janssentorres888/Lab-2.git
```

2. Navigate to the project folder:

```bash
cd Lab-2
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the local URL displayed in your terminal.

## Git Branches

- `no-style` – Functional Student Information Portal without custom CSS styling.
- `main` – Complete Student Information Portal with CSS styling.

## Author

Developed as part of DCIT26: Application Development and Emerging Technologies – Laboratory Exercise 2.
