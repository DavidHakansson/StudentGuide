import React, { Component } from "react";
import EventsByDate from "./EventsByDate"; // Adjust the import path as needed
import DatePicker from "./DatePicker"; // Import the new DatePicker component
import CategoryDropDown from "./CategoryDropDown";
import NationDropDown from "./NationDropDown";
import { DefaultCategoryOptions, EventObject } from "./Types"; // Import the default category options
import { DefaultNationOptions } from "./Nations"; // Import the default category options
import ReactGA from "react-ga4";

const TRACKING_ID = "G-5TL155XBJ9"; // OUR_TRACKING_ID

class MainPage extends React.Component {
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
        // Sort the data based on category order
        const categoryOrder = [
          "Breakfast",
          "Brunch",
          "Lunch",
          "Fika",
          "Pub",
          "Restaurant",
          "Club",
          "Gasque",
          "Sport",
          "ReceptionHours",
          "Other",
        ];

        const sortedData = data.sort((a: EventObject, b: EventObject) => {
          const categoryAIndex = categoryOrder.indexOf(a.category);
          const categoryBIndex = categoryOrder.indexOf(b.category);
          return categoryAIndex - categoryBIndex;
        });

        this.setState({ events: sortedData });
      })
      .catch((error) => {
        console.error("Error during fetch:", error);
      });
  }

  handleDateChange = (date: string) => {
    this.setState({ selectedDate: date });
    ReactGA.event({
      category: "User Interaction",
      action: "Date Change",
      label: date,
    });
  };
  handleCategoryChange = (categories: string[]) => {
    this.setState({ selectedCategories: categories });
    ReactGA.event({
      category: "User Interaction",
      action: "Category Change",
      label: categories.join(", "),
    });
  };
  handleNationChange = (nations: string[]) => {
    this.setState({ selectedNations: nations });
    ReactGA.event({
      category: "User Interaction",
      action: "Nation Change",
      label: nations.join(", "),
    });
  };

  render() {
    const { events, selectedDate, selectedCategories, selectedNations } =
      this.state;

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <DatePicker onChange={this.handleDateChange} />
            </div>
          </div>

            <div className="row">
              <div className=" mb-3 mr-1 ml-3">
                <CategoryDropDown onChange={this.handleCategoryChange} />
              </div>
              <div className="mb-3 justify-content-right">
                <NationDropDown onChange={this.handleNationChange} />
              </div>
            </div>
        </div>

        <EventsByDate
          categories={selectedCategories}
          events={events}
          date={selectedDate}
          nations={selectedNations}
        />
        <p>
          *This website is not affiliated with Uppsalas studentnationer or
          kuratorskonventet, it is an independent project hoping to temporarly
          fill the gap. This means that the information shown here might be
          faulty at times where we have not been able to update the information
          or find the correct information through the nations channels.
        </p>
      </div>
    );
  }
}

export default MainPage;
