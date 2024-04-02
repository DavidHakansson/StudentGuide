
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
        const { id, title, date, time, nation} = this.props.event;
        
        
        const nationImageMap : Record<string, string> = {
            'Stockholms nation': 'Stockholm.png',
            'Uplands nation': 'Uplands.png',
            'Gästrike-Hälsinge nation': 'GH.png',
            'Östgöta nation': 'Ostgota.png',
            'Västgöta nation': 'Vastgota.png',
            'Södermanlands-Nerikes nation': 'Snerike.png',
            'Västmanlands-Dala nation': 'Vdala.png',
            'Smålands nation': 'Smalands.png',
            'Göteborgs nation': 'Goteborg.gif',
            'Kalmar nation': 'kalmar.png',
            'Värmlands nation': 'Varmlands.png',
            'Norrlands nation': 'Norrland.png',
            'Gotlands nation': 'Gotland.gif',
        };

        const imageFilename = nationImageMap[nation]
        const imageUrl = `/NationsEmblem/${imageFilename}`;


        return (
            <div className="card mb-4 shadow-sm bg-light" style={{ width: '18rem', borderRadius: '15px' }}>
                <img src={imageUrl} className="card-img-top" alt={title} style={{ height: '200px', objectFit: 'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} />
                <div className="card-body text-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-subtitle mb-2 text-muted">{date} at {time}</p>
                    <p className="card-text">{nation}</p>
                    <a href={`/event/${id}`} className="btn btn-primary">Learn More</a>
                </div>
            </div>
        );
        
    }
}

export default Event;
