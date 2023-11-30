import React from "react";
import { AppRoutes } from "./Routes/Routes";
// import reportWebVitals from './reportWebVitals';

function App() {
  // reportWebVitals(console.log);

  console.log = () => {};
  console.debug = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  return (
    <>
      <AppRoutes />
      {/* <h1>Under Maintainence</h1>
      <h1>Under Maintainence Twice</h1>
      <h1>Under Maintainence Thrice</h1> */}
    </>
  );
}

export default App;
