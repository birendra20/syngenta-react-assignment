import "./App.css";

import Circle from "./components/Circle";

function App() {
  return (
    <>
      <div className="App">
        <div className="empty_div"></div>

        <div className="circle">
          <Circle />
        </div>
        <form className="shoot">
          <input
            // onChange={(e) => setShootNum(e.target.value)}
            id="outlined-basic"
            label="enter a number"
            variant="outlined"
            type="number"
          />
          <submit type="button">shoot</submit>
        </form>
      </div>
    </>
  );
}

export default App;
