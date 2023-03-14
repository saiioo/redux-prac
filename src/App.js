import "./styles.css";
import { Provider } from "react-redux";
import { store } from "./redux/index";
import Counter from "./components/Counter";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}
