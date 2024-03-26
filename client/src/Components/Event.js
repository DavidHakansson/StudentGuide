import React, { Component } from 'react';
import '../Styling/Event.css'; 
class Event extends Component {
    render() {
        const { id, title, date, time, category, nation, imageUrl } = this.props.event;
        return (
            <div className="card mb-4 shadow-sm bg-light" style={{ width: '18rem', borderRadius: '15px' }}>
                <img src={imageUrl} className="card-img-top" alt={title} style={{ height: '200px', objectFit: 'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} />
                <div className="card-body text-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-subtitle mb-2 text-muted">{date} at {time}</p>
                    <p className="card-text">{category} - {nation}</p>
                    <a href={`/event/${id}`} className="btn btn-primary">Learn More</a>
                </div>
            </div>
        );
    }
}

export default Event;

