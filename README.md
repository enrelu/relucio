# Enrique Relucio - Personal Portfolio & CV

![Astro](https://img.shields.io/badge/Astro-5.0-orange?style=flat&logo=astro)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38bdf8?style=flat&logo=tailwindcss)
![Status](https://img.shields.io/badge/Status-Active-success)

This is the personal portfolio and professional CV website for **Enrique Relucio**, a Cybersecurity Consultant and Telecommunications Engineer. The site highlights professional experience, projects, and includes a blog section.

## 🚀 Key Features

-   **Performance First**: Built with [Astro](https://astro.build/) for zero-JavaScript by default and lightning-fast load times.
-   **Modern Styling**: Styled with [Tailwind CSS v4](https://tailwindcss.com/) for a sleek, responsive, and maintainable design.
-   **Dark Mode**: Native dark mode support with smooth transitions.
-   **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
-   **Blog Integration**: Fetches and displays blog posts (optionally integrated with external sources like Substack or local collections).
-   **Interactive Components**:
    -   Expandable "Accordions" for detailed project/experience views.
    -   Dynamic project filtering.
    -   Contact form with FormSubmit integration.

## 🛠️ Tech Stack

-   **Framework**: [Astro v5](https://astro.build/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Typography**: `@tailwindcss/typography` plugin
-   **Icons**: SVG Icons (Lucide / Custom)
-   **Deployment**: Ready for Vercel, Netlify, or any static host.

## 📂 Project Structure

```text
/
├── public/           # Static assets (images, fonts, icons)
├── src/
│   ├── components/   # Reusable UI components (Header, Footer, Cards)
│   ├── layouts/      # Base layouts (BaseHead, Layout)
│   ├── pages/        # Route pages (index, blog, about, contact)
│   ├── styles/       # Global styles and Tailwind directives
│   └── content/      # Content collections (optional)
├── astro.config.mjs  # Astro configuration
├── package.json      # Project dependencies and scripts
└── ...
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## ⚡ Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/enrelu/relucio.git
    cd relucio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open in browser**:
    Navigate to `http://localhost:4321` to see the site in action.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

Designed & Developed by **Enrique Relucio**.
