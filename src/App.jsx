import { Provider } from "react-redux";
import Routes from "./components/Routes";
import appStore from "./utils/appStore";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <Routes />
      </Provider>
    </>
  );
}

export default App;
