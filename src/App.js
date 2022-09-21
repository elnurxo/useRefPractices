import { Fragment } from "react";
import Chat from "./components/Chat";
import Chat2 from "./components/Chat2";
import { DebouncedButton } from "./components/DebouncedButton";
import Toggle from "./components/Toggle";

function App() {
  return (
   <Fragment>
     <Chat/>
    <Chat2/>
    <DebouncedButton/>
    <Toggle/>
   </Fragment>
  );
}

export default App;
