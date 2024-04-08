import React, { Component } from "react";
import ValborgEvent from "./ValborgEvent"; // Import the Event component
import { EventObject } from "./Types";
import {nationImageMap} from './Types';


interface Props {
  events: EventObject[];
  nations: string[];
}

class EventsByNation extends Component<Props> {
  // Function to group events by category
  groupEventsByNation(events: EventObject[]) {
    return events.reduce(
      (acc: { [key: string]: EventObject[] }, event: EventObject) => {
        (acc[event.nation] = acc[event.nation] || []).push(event);
        return acc;
      },
      {}
    );
  }

  // Function to sort events by time within each category
  sortEventsByTime(events: EventObject[]) {
    return events.sort((a, b) => {
      const timeA = typeof a.time === "string" ? a.time : "";
      const timeB = typeof b.time === "string" ? b.time : "";
      return timeA.localeCompare(timeB);
    });
  }

  render() {
    const { events, nations } = this.props; // events is an array of event objects, date is the selected date

    const eventsFilteredByNation = events.filter((event) =>
      nations.includes(event.nation)
    );

    const eventsForNation = this.groupEventsByNation(
      eventsFilteredByNation.filter((event) => nations.includes(event.nation))
    );

    
    return (
      <div>
        <div className="container">
          {Object.keys(eventsForNation).length > 0 ? (
            Object.entries(eventsForNation).map(([nation, events]) => (
              <div key={nation} className="custom-border padding darker-grey-background">
              <div className="row align-items-center text-center">
                      <div className="content-left col">
                          <img src={nationImageMap[nation]} className="img-fluid" alt={nation} style={{maxWidth: "100px", margin:20}} />
                      </div>
                      <div className="col">
                          <h3 className="category-title">{nation}</h3>
                      </div>
                      <div className="col">
                      </div>
              </div>
                <div className="row justify-content-center">
                  {this.sortEventsByTime(events).map((event) => (
                    <div
                      key={event.id}
                      className="col-md-4 d-flex align-items-stretch"
                    >
                      <ValborgEvent event={event} />
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p>No events found for this date.</p>
          )}
        </div>
      </div>
    );
  }
}

export default EventsByNation;
