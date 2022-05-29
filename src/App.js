import logo from "./logo.svg";
import "./App.css";
import EmptyDiv from "./components/EmptyDiv";
import Circle from "./components/Circle";
import Input from "./components/Input";

function App() {
  return (
    <>
      <div className="App">
        <div className="empty_div">
          <EmptyDiv />
        </div>

        <div className="circle">
          <Circle />
        </div>
      </div>

      <Input />
    </>
  );
}

export default App;
