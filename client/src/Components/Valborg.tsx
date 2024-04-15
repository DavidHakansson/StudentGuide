import React, { Component } from "react";
import EventsByNation from "./EventsByNation"; // Adjust the import path as needed
import NationDropDown from "./NationDropDown";
import { DefaultNationOptions } from "./Nations"; // Import the default category options
import ReactGA from "react-ga4";



const TRACKING_ID = "G-5TL155XBJ9"; // OUR_TRACKING_ID

class Valborg extends React.Component{
    state = {
        events: [],
        selectedNations: DefaultNationOptions.map((option) => option.value), // Default or initial nations
      };

    componentDidMount() {
        ReactGA.initialize(TRACKING_ID);
        const { selectedNations } = this.state;
        ReactGA.send({ hitType: "pageview", page: "/Valborg", title: "Valborg .)" });
        fetch("/SampleData/ValborgData.json")
        .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
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

    handleNationChange = (nations: string[]) => {
        this.setState({ selectedNations: nations });
        ReactGA.event({
          category: 'User Interaction',
          action: 'Nation Change',
          label: nations.join(', ')
        });
      };

      render() {
        const { events, selectedNations } = this.state;
    
        return (
          <div>
            <div className="container">
              <div className="row">
                <div className="col-md-6 d-md-flex mb-3 mt-2">
                  <NationDropDown onChange={this.handleNationChange} />
                </div>
              </div>
            </div>
    
            <EventsByNation
              events={events}
              nations={selectedNations}
            />
            <p>
              *This website is not affiliated with Uppsalas studentnationer or kuratorskonventet, it is
              an independent project hoping to temporarly fill the gap. This means that the information shown here
              might be faulty at times where we have not been able to update the
              information or find the correct information through the nations channels.
            </p>
          </div>
        );
      }
}
    
export default Valborg;
