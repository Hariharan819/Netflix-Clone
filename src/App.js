import Body from "./Components/Body";
import { Provider } from "react-redux";
import appstore from "./ReduxUtils/appstore";
function App() {
  return (
    <div className="">
      <Provider store={appstore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
