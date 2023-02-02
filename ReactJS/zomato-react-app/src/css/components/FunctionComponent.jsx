import { useEffect, useState } from "react";

const FunctionComponent = () => {
  console.log("init");
  let [count, setCount] = useState(0);

  let updateCount = () => {
    setCount(++count);
  };
  // useEffect
  useEffect(() => {
    console.log("function mounting ");

    return () => {
      console.log("function unmounting ");
    };
  }, []); // cbFun,DependencyList

  useEffect(() => {
    console.log("function updating ");
  }, [count]);

  return (
    <>
      {console.log("render")}
      <h1>This is a function FunctionComponent {count}</h1>
      <button onClick={updateCount}>Fun Btn</button>
    </>
  );
};

export default FunctionComponent;
