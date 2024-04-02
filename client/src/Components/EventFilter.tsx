import React, { Component } from 'react';
import Event from './Event'; // Import the Event component
import { EventObject } from './Types'; 
//import { EventCategory } from './Types';



interface Props {
  events: EventObject[];
  date: string;
}



