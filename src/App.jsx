import { useState } from "react";
import Header from "./Components/Header/Header";
import RepeatText from "./Components/RepeatText/RepeatText";
import List from "./Components/List/List";
import Counter from "./Components/Counter/Counter";
import Check from "./Components/Check/Check";
import Radio from "./Components/Radio/Radio";
const App = () => {
  return (
    <>
      <p>liten-kod-kata-react</p>
      <Header headerText='Steg 4 klart' />
      <RepeatText count='7' text='En liten Zebra som hade häst till mamma' />
      <List animalArray={["ko", "häst", "åsna", "hund"]} />
      <Counter />
      <Check />
      <Radio />
    </>
  );
};

export default App;
