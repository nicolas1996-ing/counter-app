import { useState } from "react";
import ".././index.css";

function CounterApp({ initialValue, title }) {
  // hook
  // hook contador
  const [counter, setCounter] = useState(initialValue);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(initialValue);

  /*
    actividad. 
      - crear un botón que permita cambiar el titulo = "nuevo-titulo"
      - crear un botón que permita re-establece el valor inicial del titulo
  */

  // hook titulo
  // setTitle
  // resetTitle
  const [tit, setTitle] = useState(title);
  const changeTitle = () => setTitle("nuevo-titulo");
  const resetTitle = () => setTitle(title);
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        {" "}
        <h1 className="text-xs uppercase font-bold underline">Hello world!</h1>
        <h1>{tit}</h1>
        <div>
          <button onClick={changeTitle}>cambiar-titulo</button>
          <button onClick={resetTitle}>reset-titulo</button>
        </div>
        <p>{counter}</p>
        <div>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={increment}
          >
            +1
          </button>

          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={reset}
          >
            reset
          </button>

          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={decrement}
          >
            -1
          </button>
        </div>
      </div>
    </>
  );
}

export default CounterApp;
