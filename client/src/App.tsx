import { Component } from "react";
import Header from "./Components/Header"; //importerar headern
import { Route, Routes } from "react-router-dom";

import Valborg from "./Components/Valborg";
import MainPage from "./Components/MainPage";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" Component={MainPage} />
          <Route path="/Valborg" Component={Valborg} />
        </Routes>
      </>
    );
  }
}

export default App;
