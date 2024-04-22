import React from "react";
import Event from "./Event"; 
import { EventObject } from "./Types";
import "../Styling/EventsByDate.css";

interface Props {
  events: EventObject[];
  date: string;
  categories: string[];
  nations: string[];
}

const EventsByDate: React.FC<Props> = ({ events, date, categories, nations }) => {
  const groupEventsByCategory = (events: EventObject[]) => {
    return events.reduce((acc: { [key: string]: EventObject[] }, event: EventObject) => {
      (acc[event.category] = acc[event.category] || []).push(event);
      return acc;
    }, {});
  };

  // Function to sort events by time within each category
  const sortEventsByTime = (events: EventObject[]) => {
    return events.sort((a, b) => {
      const timeA = typeof a.time === "string" ? a.time : "";
      const timeB = typeof b.time === "string" ? b.time : "";
      return timeA.localeCompare(timeB);
    });
  };

  const eventsFilteredByCategory = events.filter((event) =>
    categories.includes(event.category)
  );
  const eventsFilteredByNation = eventsFilteredByCategory.filter((event) =>
    nations.includes(event.nation)
  );

  // Filter events by the selected date
  const eventsForDate = groupEventsByCategory(
    eventsFilteredByNation.filter((event) => event.date === date)
  );

  return (
    <div>
      <div className="container">
        {Object.keys(eventsForDate).length > 0 ? (
          Object.entries(eventsForDate).map(([category, events]) => (
            <div
              key={category}
              className="custom-border padding darker-grey-background"
            >
              <h3 className="text-center category-title">{category}</h3>
              <div className="row justify-content-center">
                {sortEventsByTime(events).map((event) => (
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
};

export default EventsByDate;
