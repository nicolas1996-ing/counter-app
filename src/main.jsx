import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CounterApp from "./components/Counter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* enviar propiedades al componente hijo */}
    <CounterApp initialValue={10} title="contador-app" />
    <h1 className="text-xs uppercase font-bold underline">Hello world!</h1>
  </React.StrictMode>
);
