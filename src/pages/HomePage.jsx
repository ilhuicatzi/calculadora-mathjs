import { useState } from "react";
import { evaluate } from "mathjs";

function HomePage() {
  const [pushButtonEqual, setPushButtonEqual] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [operation, setOperation] = useState("");
  const [error, setError] = useState(null); // Agrega un estado para el manejo de errores.

  const handleNumberClick = (number) => {
    if (error) {
      // Si hay un error, borrarlo al ingresar un nuevo número.
      setError(null);
      setInputValue(number.toString());
    } else {
      setInputValue((prevValue) => prevValue + number.toString());
    }
  };

  const handleEqualClick = () => {
    try {
      const result = evaluate(operation + inputValue);
      setInputValue(result.toString());
      setOperation((prevValue) => prevValue + inputValue + "=");
      setPushButtonEqual(true);
      setError(null); // Borra cualquier error anterior si la evaluación fue exitosa.
    } catch (err) {
      setError("Error"); // Captura y maneja el error si la evaluación falla.
      setInputValue("");
      setOperation("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-5">Calculadora</h1>
      <section className="flex justify-center items-center px-4 md:px-10 md:w-11/12 lg:w-3/4 xl:w-3/5">
        <div className="xl:h-[calc(70vh)] border-2 w-full rounded-lg bg-gray-100 px-3 dark:bg-slate-950 dark:border-indigo-950">
          <div className="h-20 xl:h-28 bg-slate-300 dark:bg-zinc-900 mt-3 rounded-md py-2 px-4 mb-2 font-mono text-end flex flex-col">
            <input
              type="text"
              value={operation}
              readOnly
              className="text-end bg-slate-300 dark:bg-zinc-900"
            />
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                readOnly
                className="text-3xl xl:text-5xl xl:py-3 text-end bg-slate-300 dark:bg-zinc-900 w-full"
              />
              {error && (
                <div className="text-red-500 text-xl relative">
                  {error}
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-2 xl:h-[calc(48vh)]  ">
            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => {
                  handleNumberClick(7);
                }}
                className="px-4 py-2 bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-md m-1 hover:bg-gray-400"
              >
                7
              </button>
              <button
                onClick={() => {
                  handleNumberClick(8);
                }}
                className="px-4 py-2 bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-800  rounded-md m-1 hover:bg-gray-400"
              >
                8
              </button>
              <button
                onClick={() => {
                  handleNumberClick(9);
                }}
                className="px-4 py-2 bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-md m-1 hover:bg-gray-400"
              >
                9
              </button>
              <button
                onClick={() => {
                  handleNumberClick(4);
                }}
                className="px-4 py-2 bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-md m-1 hover:bg-gray-400"
              >
                4
              </button>
              <button
                onClick={() => {
                  handleNumberClick(5);
                }}
                className="px-4 py-2 bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-md m-1 hover:bg-gray-400"
              >
                5
              </button>
              <button
                onClick={() => {
                  handleNumberClick(6);
                }}
                className="px-4 py-2 bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-md m-1 hover:bg-gray-400"
              >
                6
              </button>
              <button
                onClick={() => {
                  handleNumberClick(1);
                }}
                className="px-4 py-2 bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-md m-1 hover:bg-gray-400"
              >
                1
              </button>
              <button
                onClick={() => {
                  handleNumberClick(2);
                }}
                className="px-4 py-2 bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-md m-1 hover:bg-gray-400"
              >
                2
              </button>
              <button
                onClick={() => {
                  handleNumberClick(3);
                }}
                className="px-4 py-2 bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-md m-1 hover:bg-gray-400"
              >
                3
              </button>
              <button
                onClick={() => {
                  handleNumberClick(0);
                }}
                className="px-4 py-2 bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-md m-1 hover:bg-gray-400"
              >
                0
              </button>
              <button
                onClick={() => {
                  handleNumberClick(".");
                }}
                className="px-4 py-2 bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-md m-1 hover:bg-stone-400"
              >
                .
              </button>
              <button
                onClick={() => {
                  handleEqualClick();
                }}
                className="px-4 py-2 bg-slate-300 dark:bg-slate-900 dark:hover:bg-sky-800  rounded-md m-1 hover:bg-sky-400"
              >
                =
              </button>
            </div>
            <div className="grid grid-cols-2">
              <button
                onClick={() => {
                  if (pushButtonEqual) {
                    setOperation("");
                    setInputValue("");
                    setPushButtonEqual(false);
                  } else {
                    setInputValue(inputValue.slice(0, -1));
                  }
                }}
                className="px-4 py-2 bg-zinc-300 dark:bg-zinc-900 dark:hover:bg-indigo-800  rounded-md m-1 hover:bg-indigo-400"
              >
                C
              </button>
              <button
                onClick={() => {
                  setOperation("");
                  setInputValue("");
                  setError(null); // Borra cualquier error anterior al borrar la operación.
                }}
                className="px-4 py-2 bg-zinc-300 dark:bg-zinc-900 dark:hover:bg-red-800  rounded-md m-1 hover:bg-red-300"
              >
                CE
              </button>
              <button
                onClick={() => {
                  if (inputValue !== "") {
                    setOperation((prevValue) =>prevValue + "sqrt("+ inputValue + ")" );
                    setInputValue("");
                  }
                }}
                className="px-4 py-2 bg-gray-300 dark:bg-neutral-900 dark:hover:bg-teal-950  rounded-md m-1 hover:bg-gray-400"
              >
                √
              </button>
              <button 
              onClick={() => {
                setOperation((prevValue) => prevValue + inputValue + "^");
                setInputValue("");
              }}
              className="px-4 py-2 bg-zinc-300 dark:bg-neutral-900 dark:hover:bg-teal-950 rounded-md m-1 hover:bg-zinc-400">
                ^
              </button>
              <button
                onClick={() => {
                  setOperation((prevValue) => prevValue + inputValue + "*");
                  setInputValue("");
                }}
                className="px-4 py-2 bg-zinc-300 dark:bg-neutral-900 dark:hover:bg-teal-950 rounded-md m-1 hover:bg-zinc-400"
              >
                *
              </button>
              <button
                onClick={() => {
                  setOperation((prevValue) => prevValue + inputValue + "/");
                  setInputValue("");
                }}
                className="px-4 py-2 bg-zinc-300 dark:bg-neutral-900 dark:hover:bg-teal-950 rounded-md m-1 hover:bg-zinc-400"
              >
                /
              </button>
              <button
                onClick={() => {
                  setOperation((prevValue) => prevValue + inputValue + "+");
                  setInputValue("");
                }}
                className="px-4 py-2 bg-zinc-300 dark:bg-neutral-900 dark:hover:bg-teal-950 rounded-md m-1 hover:bg-zinc-400"
              >
                +
              </button>
              <button
                onClick={() => {
                  setOperation((prevValue) => prevValue + inputValue + "-");
                  setInputValue("");
                }}
                className="px-4 py-2 bg-zinc-300 dark:bg-neutral-900 dark:hover:bg-teal-950 rounded-md m-1 hover:bg-zinc-400"
              >
                -
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
