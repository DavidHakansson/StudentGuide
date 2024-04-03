import React, { Component } from "react";
import EventsByDate from "./Components/EventsByDate"; // Adjust the import path as needed
import DatePicker from "./Components/DatePicker"; // Import the new DatePicker component
import CategoryDropDown from "./Components/CategoryDropDown";
import NationDropDown from "./Components/NationDropDown";
import Header from "./Components/Header"; //importerar headern
import { DefaultCategoryOptions } from "./Components/Types"; // Import the default category options
import { DefaultNationOptions } from "./Components/Nations"; // Import the default category options
import ReactGA from "react-ga4";

const TRACKING_ID = "G-5TL155XBJ9"; // OUR_TRACKING_ID

class App extends Component {
  state = {
    events: [],
    selectedDate: "2024-04-30", // Default or initial date
    selectedCategories: DefaultCategoryOptions.map((option) => option.value), // Default or initial categories
    selectedNations: DefaultNationOptions.map((option) => option.value), // Default or initial nations
  };


  componentDidMount() {
    const { selectedCategories } = this.state;
    const { selectedNations } = this.state;
    ReactGA.initialize(TRACKING_ID);

    ReactGA.send({ hitType: "pageview", page: "/", title: "Visitor :)" });
    fetch("/SampleData/EventData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        this.handleCategoryChange(selectedCategories); //Load the default categories when the page loads
        this.handleNationChange(selectedNations); //Load the default nations when the page loads
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Data:", data);
        this.setState({ events: data });
      })
      .catch((error) => {
        console.error("Error during fetch:", error);
      });
  }

  handleDateChange = (date: string) => {
    this.setState({ selectedDate: date });
  };
  handleCategoryChange = (categories: string[]) => {
    this.setState({ selectedCategories: categories });
  };
  handleNationChange = (nations: string[]) => {
    this.setState({ selectedNations: nations });
  };

  render() {
    const { events, selectedDate, selectedCategories, selectedNations } =
      this.state;

    return (
      <div>
        <Header></Header>
        <DatePicker onChange={this.handleDateChange} />
        <CategoryDropDown onChange={this.handleCategoryChange} />
        <NationDropDown onChange={this.handleNationChange} />

        <EventsByDate
          categories={selectedCategories}
          events={events}
          date={selectedDate}
          nations={selectedNations}
        />
        <p>
          *This website is not affiliated with Uppsalas studentnationer, it is
          an independent project. This means that the information shown here
          might be faulty at times where we have not been able to update the
          information or find the correct information through the nations
          channels.
        </p>
      </div>
    );
  }
}

export default App;
