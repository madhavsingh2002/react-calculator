import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
function App() {
  const [input, setInput] = useState("");
  const handleSubmit = () => {
    try {
      setInput(eval(input));
    } catch (err) {
      setInput(err);
    }
  };
  const handleClear = () => {
    setInput("");
  };
  const handleBack = () => {
    setInput(input.slice(0, input.length - 1));
  };
  return (
    <>
      <div className="row" style={{ height: "100vh" }}>
        <div
          className="col-md-6 d-flex p-5 justify-content-center"
          style={{ flexDirection: "column" }}
        >
          <h1>Calculator In React.js 🧮</h1>
          <p>
            The React calculator project is a dynamic web application that
            enables users to perform basic arithmetic operations with ease.
            Developed using React's component-based architecture, this
            calculator provides an intuitive user interface with responsive
            design. Through state management and event handling, it delivers
            real-time calculations, enhancing user experience and showcasing
            fundamental React concepts in action.
          </p>
          <div>
            <a  href="https://www.youtube.com/channel/UCxa2ohbPle_N94lsGrV8Fhw">
              <button className="btn btn-outline-danger  ">Youtube </button>
            </a>
            <a href="https://github.com/madhavsingh2002/react-calculator">
            <button className="btn btn-outline-success ms-3">
              Source Code
            </button>
            </a>
            
          </div>
        </div>
        <div
          className=" col-md-6 d-flex justify-content-center "
          style={{ alignItems: "center" }}
        >
          <div className="calculator">
            <input className="value" type="text" value={input}></input>
            <button onClick={handleClear} className="numclear">
              Clear
            </button>
            <button onClick={handleBack} className="numclear">
              Back
            </button>
            <button
              name="/"
              onClick={(e) => setInput(input.concat(e.target.name))}
              className="num"
            >
              /
            </button>
            <button
              name="*"
              onClick={(e) => setInput(input.concat(e.target.name))}
              className="num"
            >
              *
            </button>
            <button
              name="7"
              onClick={(e) => setInput(input.concat(e.target.name))}
              className="num"
            >
              7
            </button>
            <button
              name="8"
              onClick={(e) => setInput(input.concat(e.target.name))}
              className="num"
            >
              8
            </button>
            <button
              name="9"
              onClick={(e) => setInput(input.concat(e.target.name))}
              className="num"
            >
              9
            </button>
            <button
              name="-"
              onClick={(e) => setInput(input.concat(e.target.name))}
              className="num"
            >
              -
            </button>
            <button
              name="4"
              onClick={(e) => setInput(input.concat(e.target.name))}
              className="num"
            >
              4
            </button>
            <button
              name="5"
              onClick={(e) => setInput(input.concat(e.target.name))}
              className="num"
            >
              5
            </button>
            <button
              name="6"
              onClick={(e) => setInput(input.concat(e.target.name))}
              className="num"
            >
              6
            </button>
            <button
              name="+"
              onClick={(e) => setInput(input.concat(e.target.name))}
              className="num plus"
            >
              +
            </button>
            <button
              name="3"
              onClick={(e) => setInput(input.concat(e.target.name))}
              className="num"
            >
              3
            </button>
            <button
              name="2"
              onClick={(e) => setInput(input.concat(e.target.name))}
              className="num"
            >
              2
            </button>
            <button
              name="1"
              onClick={(e) => setInput(input.concat(e.target.name))}
              className="num"
            >
              1
            </button>
            <button
              name="0"
              onClick={(e) => setInput(input.concat(e.target.name))}
              className="num"
            >
              0
            </button>
            <button name="=" onClick={handleSubmit} className="num equal">
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
