import React, { Component } from 'react';
import EventsByDate from './Components/EventsByDate'; // Adjust the import path as needed

class App extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    fetch('/SampleData/MockEvents.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched Data:', data);
        this.setState({ events: data });
      })
      .catch(error => {
        console.error('Error during fetch:', error);
      });
  }
  

  render() {
    const { events } = this.state;
    const specificDate = '2024-04-30';
    return (
      <div>
        <EventsByDate events={events} date={specificDate} />
      </div>
    );
  }
}

export default App;
