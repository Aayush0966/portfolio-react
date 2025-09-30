
# 🌐 My Portfolio Website

This is my personal portfolio website built with **React + Vite + Tailwind CSS**.  
It showcases my projects, skills, certificates, and contact information in a clean and modern way.  

You can view the live demo here 👉 [Demo Link](https://aayushbudhathoki.com.np)  

---

## 🚀 Features
- 🖥️ Responsive design (works on desktop & mobile)  
- 📂 Showcases projects with images, tech stack, and links  
- 📜 Displays certificates and skills  
- 🧑‍💻 Easy to update via a single `userData.js` file  
- ⚡ Built with React, Vite, and Tailwind for fast performance  

---

## 📦 Tech Stack
- **React** (UI library)  
- **Vite** (fast development & build tool)  
- **Tailwind CSS** (styling)  

---

## 🛠️ Getting Started

Follow these steps to run the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/Aayush0966/portfolio-react.git
cd portfolio-react
````

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

This will start a local server (default: `http://localhost:5173`).

### 4. Build for production

```bash
npm run build
```

---

## ✏️ Customization

All personal details, skills, and project information are stored in:

```
userData.js
```

Update this file to show **your own details**.
For example:

```js
const userData = {
  name: "Your Name",
  email: "your@email.com",
  phone: "+1234567890",
  projects: [
    {
      title: "My Project",
      description: "Short description here",
      githubLink: "https://github.com/username/project",
      liveLink: "https://project-demo.com",
    },
  ],
};
export default userData;
```

---

## 📄 License

This project is open source and free to use.
Feel free to clone and customize it for your own portfolio!

---

✨ If you like this project, don’t forget to **star ⭐ the repo**!


