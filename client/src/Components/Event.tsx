import React from "react";
import "../Styling/Event.css";
import { EventObject, nationImageMap } from "./Types";
import linkConditional from "./utils/linkConditional";

interface EventProps {
  event: EventObject;
}

const Event: React.FC<EventProps> = ({ event }) => {
  const { title, date, time, nation, link } = event;

  return (
    <div className="card mb-4 shadow-sm bg-light">
      <div className="row no-gutters">
        <div className="col-2 col-md-4 d-flex align-items-center justify-content-center">
          <img src={nationImageMap[nation]} className="card-img-top" alt={title} />
        </div>
        <div className="col-10 col-md-8 justify-content-left">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-subtitle mb-2 text-muted">
              {date} at {time}
            </p>
            <p className="card-text">{nation}</p>
          </div>
          <div
            className="card-footer "
            style={{ border: "none", background: "none" }}
          >
            {linkConditional(link)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
