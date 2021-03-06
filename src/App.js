import UIJSX from "./components/ui";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <UIJSX />
    </Provider>
  );
}

export default App;
