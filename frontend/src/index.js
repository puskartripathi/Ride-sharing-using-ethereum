import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import { hydrate, render } from "react-dom";
import Routes from "./Routes";

const rootElement = document.getElementById("root")


if (rootElement.hasChildNodes()) {
  hydrate(<Routes />, rootElement);
} else {
  render(<Routes />, rootElement);
}




  








serviceWorker.unregister();
