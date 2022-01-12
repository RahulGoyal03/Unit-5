import React, { useEffect, useState } from "react";

const Form = () => {
  const [counter, setCounter] = useState(0);
  const [age, setAge] = useState(0);

  console.log("Before");
  useEffect(() => {
    console.log("First Effect");
  });

  useEffect(() => {
    console.log("Second Effect");
  }, []);

  useEffect(() => {
    console.log("Third Effect");
  }, [counter, age]);

  console.log("After");
  return (
    <div>
      <div>
        <h3>Counter : {counter}</h3>
        <button onClick={() => setCounter(counter + 1)}>Add 1</button>
        <button onClick={() => setAge(age + 1)}>Age</button>
      </div>
    </div>
  );
};

export default Form;
