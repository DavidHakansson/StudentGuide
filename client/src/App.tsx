import React, { Component } from "react";
import EventsByDate from "./Components/EventsByDate"; // Adjust the import path as needed
import DatePicker from "./Components/DatePicker"; // Import the new DatePicker component
import CategoryDropDown from "./Components/CategoryDropDown";
import NationDropDown from "./Components/NationDropDown";
import Header from "./Components/Header"; //importerar headern
import { DefaultCategoryOptions } from "./Components/Types"; // Import the default category options
import { DefaultNationOptions } from "./Components/Nations"; // Import the default category options
import ReactGA from "react-ga4";
import {
  Route,
  Routes,
  Link
} from 'react-router-dom'

import Valborg from "./Components/Valborg";
import MainPage from "./Components/MainPage";


class App extends Component {
  render() {
    return (
      <>
      <Header/>
      <Routes>
      <Route path="/" Component={MainPage}/>
      <Route path="/Valborg" Component={Valborg}/>
      </Routes>
      </>
      );
  }
}

export default App;


