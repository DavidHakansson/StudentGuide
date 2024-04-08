import React, { Component } from "react";
import Event from "./Event"; // Import the Event component
import { EventObject } from "./Types";

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


    return (
      <div>
        <div className="container">
          {Object.keys(eventsFilteredByNation).length > 0 ? (
            Object.entries(eventsFilteredByNation).map(([category, events]) => (
              <div key={category} className="custom-border padding darker-grey-background">
                <h3 className="text-center category-title">{category}</h3>
                <div className="row justify-content-center">
                  {this.sortEventsByTime(events).map((event) => (
                    <div
                      key={event.id}
                      className="col-md-4 d-flex align-items-stretch"
                    >
                      <Event event={event} />
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
