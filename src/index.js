import { Suspense } from "react";
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
      suspense: true,
    }}
  >
    <Suspense
      fallback={
        <div className="grid grid-cols-1 place-content-center h-screen">
          <p className="text-center font-semibold text-5xl">Cargando...</p>
        </div>
      }
    >
      <BrowserRouter>
        <GlobalContextProvider>
          <App />
        </GlobalContextProvider>
      </BrowserRouter>
    </Suspense>
  </SWRConfig>
);
