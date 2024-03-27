import React, { Component } from 'react';
import Event from './Event'; // Import the Event component
import { EventObject } from './Types'; 


interface Props {
  events: EventObject[];
  date: string;
  categories: string[];
}

class EventsByDate extends Component<Props> {
  // Function to group events by category
  groupEventsByCategory(events: EventObject[]) {
    return events.reduce((acc: { [key: string]: EventObject[] }, event: EventObject) => {
      (acc[event.category] = acc[event.category] || []).push(event);
      return acc;
    }, {});
  
  
  }


  // Function to sort events by time within each category
  sortEventsByTime(events: EventObject[]) {
    return events.sort((a, b) => a.time.localeCompare(b.time));
  }

  render() {
    const { events, date , categories} = this.props; // events is an array of event objects, date is the selected date

    const eventsFilteredByCategory = events.filter(event => categories.includes(event.category));  
    // Filter events by the selected date
    const eventsForDate = this.groupEventsByCategory(eventsFilteredByCategory.filter(event => event.date === date));


    return (
      <div>
        <h4 className="text-center">Events for {date}</h4>
        <div className="container">
          {Object.keys(eventsForDate).length > 0 ? (
            Object.entries(eventsForDate).map(([category, events]) => (
              <div key={category}>
                <h2 className="text-center mt-4">{category}</h2>
                <div className="row justify-content-center">
                  {this.sortEventsByTime(events).map(event => (
                    <div key={event.id} className="col-md-4 d-flex align-items-stretch">
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

export default EventsByDate;