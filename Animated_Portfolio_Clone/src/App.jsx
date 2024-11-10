import React from "react";
import Page1 from "./Pages/Page1";
import Header from "./Components/Header";
import Page2 from "./Pages/Page2";

const App = () => {
  return (
    <div className="relative">
      <Header/>
      <Page1/>
      <Page2/>
    </div>
  );
};

export default App;
