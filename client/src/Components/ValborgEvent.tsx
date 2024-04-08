
import React, { Component } from 'react';
import '../Styling/Event.css'; 
import {EventObject} from './Types';
import { Card } from 'react-bootstrap';



// Define the types for the event object

// Define the type for the component's props
interface EventProps {
    event: EventObject;
}

class Event extends Component<EventProps> {
    render() {
        const { id, title, date, time, nation, link} = this.props.event;
        


        return (
            <div className="card-wrapper mb-4 shadow-sm">
            <Card className="bg-light" style={{ width: '300px', height: '200px', overflow: 'hidden' }}>
              <Card.Body>
                <Card.Title className="text-center">{title}</Card.Title>
                <Card.Text className="text-center">{nation}</Card.Text>
                <div className="d-flex justify-content-center">
                  <a href={link} className="btn btn-primary btn-sm">Link to Facebook event</a>
                </div>
              </Card.Body>
            </Card>
          </div>
        );
    }
}

export default Event;
