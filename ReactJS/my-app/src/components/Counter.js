import { useCounterContext } from "../context/CounterContext";

let Counter = (props) => {
  let { start, index } = props;
  let { incCount } = useCounterContext();
  return (
    <>
      <h1>{start}</h1>
      <button onClick={() => incCount(index)}>Click</button>
    </>
  );
};
export default Counter;
