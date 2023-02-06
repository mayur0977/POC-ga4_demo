import "./App.css";
import ReactGA from "react-ga4";
function App() {
  const click1Handle = () => {
    console.log("Click 1");
    //click_button_one
    ReactGA.event({
      category: "User",
      action: "click_button_one",
    });
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
