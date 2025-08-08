# Padre Gino's 🍕

This project is a web application for a pizza restaurant, built as part of Brian Holt's **Complete Intro to React** course on Frontend Masters. It's designed to teach fundamental concepts of modern React development by creating a fully functional front-end application.

## 🚀 **Features**

- **Responsive Design**: The application is fully responsive, ensuring a great user experience on both desktop and mobile devices.
- **Menu Display**: The home page displays a dynamic menu of pizzas, including their names, ingredients, and prices.
- **Order Status**: The application shows a clear message indicating whether the restaurant is currently open or closed, and displays the opening hours.
- **Item Availability**: Each pizza on the menu is marked as either **available** or **sold out**, with sold-out items visually distinguished.
- **Functional Components**: The project is built using functional components and **React Hooks** like `useState` and `useEffect`, reflecting modern React best practices.
- **Component Composition**: It demonstrates effective component composition by breaking down the UI into smaller, reusable pieces (e.g., `Header`, `Footer`, `Menu`, `Pizza`).

---

## 🛠️ **Technologies Used**

- **React**: A JavaScript library for building user interfaces.
- **JavaScript (ES6+)**: The core programming language used.
- **CSS**: For styling the application and making it visually appealing.
- **Vite**: A fast front-end build tool that provides a great development experience.
- **Vitest**: A modern, fast testing framework for running unit tests.
- **TanStack Router**: A powerful, type-safe routing library for React applications.
- **TanStack Query**: A library for fetching, caching, and updating asynchronous data in React.

---

## 🏃 **Getting Started**

### **Prerequisites**

- **Node.js**: Make sure you have Node.js installed on your machine. You can download it from the official website.

### **Installation**

1.  **Clone the repository:**
    `git clone https://github.com/AbdellahElAzyfy/Padre-Gino-s.git`
2.  **Navigate to the project directory:**
    `cd Padre-Gino-s`
3.  **Install the dependencies:**
    `npm install`

### **Running the Application**

1.  **Start the development server:**
    `npm run dev`
2.  Open your browser and visit `http://localhost:5173` to see the application running.

### **Running Tests**

To run the unit tests for the project, use the following command:
`npm test`

---

## 📖 **Learning Outcomes**

This project was a fantastic learning experience, covering key React concepts such as:

- **Component-based architecture**: Building a user interface from a collection of smaller components.
- **Props**: Passing data from parent components to child components.
- **State management**: Using `useState` to manage component-specific data.
- **Conditional rendering**: Displaying different UI elements based on specific conditions (e.g., showing "sold out" when a pizza is unavailable).
- **List rendering**: Displaying a list of items (e.g., the menu of pizzas) dynamically.
- **Data Fetching**: Handling asynchronous data with **TanStack Query**.
- **Routing**: Managing client-side navigation with **TanStack Router**.
- **Styling in React**: Applying CSS to components.
- **Unit Testing**: Writing and running tests using **Vitest** to ensure code functionality.
