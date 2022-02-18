import React, { ChangeEvent, useState } from "react";
import CalculateBtn from "./components/CalculateBtn";
import Input from "./components/Input";
import "./App.css";

import { Oval } from "react-loader-spinner";

import { getFibonacci } from "./redux/actionCreators/getFibonacci";

import { useDispatch } from "react-redux";
import { useTypedSelector } from "./hooks/useTypeSelector";

function App() {
  const dispatch = useDispatch();
  const [fibNum, setFibNum] = useState("");

  const { apiFibNumber, loading, error } = useTypedSelector(
    (state) => state.fibonacciNumbers
  );

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("requesting backend");
    await dispatch(getFibonacci(+fibNum));
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFibNum(e.target.value);
  };

  return (
    <>
      <div>
        <div className="App">
          <form onSubmit={onSubmitHandler}>
            <h1>Calculate Fibonacci!</h1>
            <h2>Write the number</h2>
            <div className="input-group my-5 w-25 mx-auto">
              <Input value={fibNum} onChange={onChange} />
              <CalculateBtn />
            </div>

            <div>
              Fibonacci Result:
              {loading ? (
                <div className="loader-container">
                  <Oval
                    color="#000000"
                    secondaryColor="#FFFFFF"
                    height={50}
                    width={50}
                  />
                </div>
              ) : (
                <span className="fib-number-text">{apiFibNumber}</span>
              )}
            </div>
            {error && <p>{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
