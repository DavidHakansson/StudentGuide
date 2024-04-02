import React, { Component } from 'react';
import EventsByDate from './Components/EventsByDate'; // Adjust the import path as needed
import DatePicker from './Components/DatePicker'; // Import the new DatePicker component
import CategoryDropDown from './Components/CategoryDropDown';
import Header from './Components/Header'; //importerar headern
import { DefaultCategoryOptions } from './Components/Types'; // Import the default category options
import ReactGA from 'react-ga4';
const TRACKING_ID = "G-5TL155XBJ9"; // OUR_TRACKING_ID


class App extends Component {
  
  state = {
    events: [],
    selectedDate: '2024-04-30', // Default or initial date
    selectedCategories: DefaultCategoryOptions.map(option => option.value), // Default or initial categories
  };

  componentDidMount() {
    const {selectedCategories} = this.state;
    ReactGA.send({ hitType: "pageview", page: "/", title: "Visitor :)" });
    fetch('/SampleData/EventData.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }        
        this.handleCategoryChange(selectedCategories); //Load the default categories when the page loads
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
  handleCategoryChange = (categories : string[])  => {
    this.setState({ selectedCategories: categories});
  }

  render() {
    const { events, selectedDate, selectedCategories } = this.state;

    return (
      <div>
        <Header></Header>
        <DatePicker onChange={this.handleDateChange} />
        <CategoryDropDown onChange={this.handleCategoryChange}/>
        <EventsByDate categories={selectedCategories} events={events} date={selectedDate} />
        <p>*This website is not affiliated with Uppsalas studentnationer, it is an independant project.
          This means that the information shown here might be faulty at times where we have not been able to update the information or find the correct information through the nations channels.
        </p>
      </div>
    );
  }
}



export default App;