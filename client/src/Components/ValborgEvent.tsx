// ValborgEvent Component
import React, { Component } from "react";
import "../Styling/Event.css";
import { EventObject } from "./Types";
import { Card } from "react-bootstrap";

interface EventProps {
  event: EventObject;
}
function linkConditional(link: string): any {
  if (link !== null) {
    return (
      <a href={link} className="btn btn-primary btn-sm">
        Link to Facebook event
      </a>
    );
  }
  return "";
}

function emojiConditional(category: string): any {
  switch (category) {
    case "Club":
      return (
        <i className="em" style={{ fontSize: "24px" }}>
          &#x1F483;
        </i>
      );

    case "Gasque":
      return (
        <i className="em" style={{ fontSize: "24px" }}>
          &#x1F374;
        </i>
      );

    case "Pub":
      return (
        <i className="em" style={{ fontSize: "24px" }}>
          &#x1F37B;
        </i>
      );

    case "Other":
      return (
        <i className="em" style={{ fontSize: "24px" }}>
          &#x1F37E;
        </i>
      );
    default:
      return null;
  }
}

class ValborgEvent extends Component<EventProps> {
  render() {
    const { id, title, category, date, time, nation, link } = this.props.event;

    return (
      <div key={id} className="col">
        <div className="card shadow-sm bg-light mb" style={{ height: "90%" }}>
          <div
            className="container"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <div className="card-body text-center">
              <h5 className="card-title">
                {title}
                {emojiConditional(category)}
              </h5>
            </div>
            <div
              className="card-footer text-center"
              style={{ border: "none", background: "none" }}
            >
              <p className="card-subtitle mb-2 text-muted">
                {date} at {time}
              </p>
              <p className="card-text">{nation}</p>
              {linkConditional(link)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ValborgEvent;
