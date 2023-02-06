import "./App.css";

function App() {
  const click1Handle = () => {
    console.log("Click 1");
  };

  const click2Handle = () => {
    console.log("Click 2");
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => click1Handle()}>click me one</button>
        <br></br>
        <button onClick={() => click2Handle()}>click me two</button>
      </header>
    </div>
  );
}

export default App;
