import React from "react";
import { createRoot } from "react-dom/client";

function Pizza({ name, description }) {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("p", {}, description),
  ]);
}

function App() {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Pixel Perfect Pizzas"),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description: "Mozzarella Cheese, Pepperoni",
    }),
    React.createElement(Pizza, {
      name: "The Big Meat Pizza",
      description: "Bacon, Pepperoni, Italian Sausage, Chorizo Sausage",
    }),
    React.createElement(Pizza, {
      name: "The Hawaiian Pizza",
      description: "Sliced Ham, Pineapple, Mozzarella Cheese",
    }),
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
