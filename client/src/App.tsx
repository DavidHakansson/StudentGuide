import React, { Component } from 'react';
import EventsByDate from './Components/EventsByDate'; // Adjust the import path as needed
import DatePicker from './Components/DatePicker'; // Import the new DatePicker component

class App extends Component {
  state = {
    events: [],
    selectedDate: '2024-04-30', // Default or initial date
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

  handleDateChange = (date : string)  => {
    this.setState({ selectedDate: date });
  }

  render() {
    const { events, selectedDate } = this.state;

    return (
      <div>
        <DatePicker onChange={this.handleDateChange} />
        <EventsByDate events={events} date={selectedDate} />
      </div>
    );
  }
}



export default App;