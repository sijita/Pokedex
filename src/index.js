import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SWRConfig } from "swr";
import axios from "axios";
import { GlobalContextProvider } from "./context/GlobalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SWRConfig
    value={{
      fetcher: (...args) => {
        return axios.get(...args).then((res) => res.data);
      },
    }}
  >
    <BrowserRouter>
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>
    </BrowserRouter>
  </SWRConfig>
);
