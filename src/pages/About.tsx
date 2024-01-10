import { userStore } from "../zustand/zustandStore";

const About = () => {
  const { mySwitch, switchName, nameVal, nameValue } = userStore(
    (state) => state
  );

  return (
    <div>
      <div>{mySwitch ? "becaa" : "shella"}</div>
      <button onClick={switchName}>ClickChange</button>
      <input type="text" value={nameVal} onChange={nameValue} />
    </div>
  );
};

export default About;
