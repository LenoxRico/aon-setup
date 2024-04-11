import React from "react";
import { BrowserRouter } from "react-router-dom";
import Route from "./Route";

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  );
};
export default App;