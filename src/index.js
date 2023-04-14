import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { IconContext } from "react-icons";
import { Provider } from "react-redux";

import Store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <IconContext.Provider value={{ className: "global-class-name" }}>
    <Provider store={Store}>
      <App />
    </Provider>
  </IconContext.Provider>
);
