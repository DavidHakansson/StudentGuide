import React, { Component } from "react";
import "../Styling/Event.css";
import { EventObject } from "./Types";

// Define the types for the event object

// Define the type for the component's props
interface EventProps {
  event: EventObject;
}

class Event extends Component<EventProps> {
  render() {
    const { id, title, date, time, nation } = this.props.event;

    const nationImageMap: Record<string, string> = {
      "Stockholms nation": "Stockholm.png",
      "Uplands nation": "Uplands.png",
      "Gästrike-Hälsinge nation": "GH.png",
      "Östgöta nation": "Ostgota.png",
      "Västgöta nation": "Vastgota.png",
      "Södermanland-Nerikes nation": "Snerike.png",
      "Västmanlands-Dala nation": "Vdala.png",
      "Smålands nation": "Smalands.png",
      "Göteborgs nation": "Goteborg.gif",
      "Kalmar nation": "kalmar.png",
      "Värmlands nation": "Varmlands.png",
      "Norrlands nation": "Norrland.png",
      "Gotlands nation": "Gotland.gif",
    };

    const imageFilename = nationImageMap[nation];
    const imageUrl = `/NationsEmblem/${imageFilename}`;

    return (
      <div className="card mb-4 shadow-sm bg-light">
        <div className="row no-gutters">
          <div className="col-2 col-md-4 d-flex align-items-center justify-content-center">
            <img src={imageUrl} className="card-img-top" alt={title} />
          </div>
          <div className="col-10 col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-subtitle mb-2 text-muted">
                {date} at {time}
              </p>
              <p className="card-text">{nation}</p>
              {/*<a href={`/event/${id}`} className="btn btn-primary btn-sm">Learn More</a>*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
