import MemoExample from "./components/MemoExample";
import Test from "./components/Test";
import TestUseCallback from "./components/TestUseCallback";
import TestUseEffect from "./components/TestUseEffect";
import TestUsememo from "./components/TestUsememo";
import TestUseRef from "./components/TestUseRef";
import TestUseRef1 from "./components/TestUseRef1";
import TestUseState from "./components/TestUseState";

function App() {
  console.log("App");

  return (
    <>
      {/* <TestUseState from="App"/>
      <Test /> */}
      {/* <TestUseEffect/> */}
      {/* <TestUseRef /> */}
      {/* <TestUseRef1 /> */}
      {/* <MemoExample /> */}
      {/* <TestUseCallback/> */}
      <TestUsememo />
    </>
  );
}

export default App;
