import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Title from "./component/Title";
import Counter from "./component/Counter";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <Counter />
      </header>
    </div>
  );
}

export default App;
