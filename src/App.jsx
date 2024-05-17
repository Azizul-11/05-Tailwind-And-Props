import React from "react";
import "./App.css";
import Card from "./Component/Card";
const App = () => {

  let myObj = {
    username: "Ramiz",
    age: 20,
  };

  let newArr = [1, 2, 3, 4, 5, 6];
  return (
    <>
  
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind Test</h1>
      <Card username = "Ramiz" someObj={newArr} btnText="Click Me" />
      <Card username="Azizul" />

    </>
  );
};

export default App;
