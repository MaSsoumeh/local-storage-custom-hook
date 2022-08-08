import "./App.css";
import { useLocalStorage } from "./useLocalStorage";

function App() {
  const initialName = "guest";
  const [state, setState] = useLocalStorage("name", initialName);
  const handleChange = (e) => {
    setState(e.target.value);
  };

  return (
    <div className="App">
      <p>Name: </p>
      <input name="name" value={state} onChange={handleChange} />
      <p>Hello {state}, welcome!</p>
    </div>
  );
}

export default App;
