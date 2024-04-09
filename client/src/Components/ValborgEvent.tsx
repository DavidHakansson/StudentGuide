// ValborgEvent Component
import React, { Component } from 'react';
import '../Styling/Event.css'; 
import { EventObject } from './Types';
import { Card } from 'react-bootstrap';

interface EventProps {
    event: EventObject;
}

class ValborgEvent extends Component<EventProps> {
    render() {
        const { id, title, date, time, nation, link} = this.props.event;

        return (
        <div key={id} className="col">
          <div className="card shadow-sm bg-light mb" style={{ height: "90%" }}>
            <div className="container" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
              <div className="card-body text-center">
                <h5 className="card-title">{title}</h5>

              </div>
              <div className="card-footer text-center" style={{ border: "none", background: "none"}}>
              <p className="card-subtitle mb-2 text-muted">{date} at {time}</p>
                <p className="card-text">{nation}</p>
                <a href={link} className="btn btn-primary btn-sm">Link to Facebook event</a>
              </div>
            </div>
          </div>
        </div>
        );
    }
}

export default ValborgEvent;
