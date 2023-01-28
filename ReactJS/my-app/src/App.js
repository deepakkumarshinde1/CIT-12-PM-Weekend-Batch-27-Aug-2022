import Counter from "./components/Counter";
import { useCounterContext } from "./context/CounterContext";

// create functional component
function App() {
  let { counterList } = useCounterContext();
  return (
    <>
      <center>
        {counterList.map((counter, index) => {
          return <Counter start={counter} index={index} />;
        })}
      </center>
    </>
  );
}

// export
// module.exports = App
export default App;

// App Component Main
