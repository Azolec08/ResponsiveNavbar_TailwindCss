import { useGlobalContext } from "../contextStore/GlobalContext";

const Home = () => {
  const { state, dispatch } = useGlobalContext();

  const handleIncrement = () => {
    dispatch({ type: "increment", payload: state.pay + 1 });
  };

  const handleSwitch = () => {
    dispatch({ type: "changeBoolean", payload: !state.switch });
  };

  const handleValueOnchange = (e: any) => {
    dispatch({ type: "nameValue", payload: e.target.value });
  };
  return (
    <div>
      <h1>Mark Angelo Celoza</h1>
      <div>{state.pay}</div>
      <button onClick={handleIncrement}>Increment</button>
      {state.switch ? <div>mark</div> : <div>becca</div>}
      <button onClick={handleSwitch}>Change Boolean</button>
      <input type="text" value={state.nameVal} onChange={handleValueOnchange} />
    </div>
  );
};

export default Home;
