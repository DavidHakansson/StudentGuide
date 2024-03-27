
import React, { Component } from 'react';
import '../Styling/Event.css'; 
import {EventObject} from './Types';

// Define the types for the event object

// Define the type for the component's props
interface EventProps {
    event: EventObject;
}

class Event extends Component<EventProps> {
    render() {
        const { id, title, date, time, category, nation, imageUrl } = this.props.event;
        return (
            <div className="card mb-4 shadow-sm bg-light" style={{ width: '18rem', borderRadius: '15px' }}>
                <img src={imageUrl} className="card-img-top" alt={title} style={{ height: '200px', objectFit: 'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} />
                <div className="card-body text-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-subtitle mb-2 text-muted">{date} at {time}</p>
                    <p className="card-text">{nation} nation</p>
                    <a href={`/event/${id}`} className="btn btn-primary">Learn More</a>
                </div>
            </div>
        );
    }
}

export default Event;
