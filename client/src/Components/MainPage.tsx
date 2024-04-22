import React, { useState, useEffect } from "react";
import EventsByDate from "./EventsByDate"; // Adjust the import path as needed
import DatePicker from "./DatePicker"; // Import the new DatePicker component
import CategoryDropDown from "./CategoryDropDown";
import NationDropDown from "./NationDropDown";
import { DefaultCategoryOptions, EventObject } from "./Types"; // Import the default category options
import { DefaultNationOptions } from "./Nations"; // Import the default category options
import ReactGA from "react-ga4";
import Slide from "@mui/material/Slide";
import fetchData from "./utils/fetchData";
import {categoryOrder} from "./Types"


const TRACKING_ID = "G-5TL155XBJ9"; // OUR_TRACKING_ID

const MainPage: React.FC = () => {
  const [events, setEvents] = useState<EventObject[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>("2024-04-30");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    DefaultCategoryOptions.map((option) => option.value)
  );
  const [selectedNations, setSelectedNations] = useState<string[]>(
    DefaultNationOptions.map((option) => option.value)
  );
  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState(
    "right" as "right" | "left" | undefined
  );

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send({ hitType: "pageview", page: "/", title: "Visitor :)" });

    const setSortAndFetchData = async () => {
      const data = await fetchData("Blad1");      
      const sortedData = data.sort((a: EventObject, b: EventObject) => {
        const categoryAIndex = categoryOrder.indexOf(a.category);
        const categoryBIndex = categoryOrder.indexOf(b.category);
        return categoryAIndex - categoryBIndex;
      });
      setEvents(sortedData);
      } 

    setSortAndFetchData();
  }, [selectedCategories, selectedNations]);

  const handleChange = () => {
    setSlideIn(false);
    setTimeout(() => {
      setSlideIn(true);
    }, 250); // 1000 milliseconds = 1 second
  };
  const handleDateChange = (date: string) => {
    if (date !== selectedDate) {
      if (date < selectedDate) {
        setSlideDirection("left");
      } else if (date > selectedDate) {
        setSlideDirection("right");
      }
      handleChange();
    }

    setSelectedDate(date);
    ReactGA.event({
      category: "User Interaction",
      action: "Date Change",
      label: date,
    });
  };

  const handleCategoryChange = (categories: string[]) => {
    setSelectedCategories(categories);
    ReactGA.event({
      category: "User Interaction",
      action: "Category Change",
      label: categories.join(", "),
    });
  };

  const handleNationChange = (nations: string[]) => {
    setSelectedNations(nations);
    ReactGA.event({
      category: "User Interaction",
      action: "Nation Change",
      label: nations.join(", "),
    });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <DatePicker onChange={handleDateChange} />
          </div>
        </div>

        <div className="row">
          <div className=" mb-3 mr-1 ml-3">
            <CategoryDropDown onChange={handleCategoryChange} />
          </div>
          <div className="mb-3 justify-content-right">
            <NationDropDown onChange={handleNationChange} />
          </div>
        </div>
      </div>
      <Slide in={slideIn} direction={slideDirection} mountOnEnter>
        <div>
          <EventsByDate
            categories={selectedCategories}
            events={events}
            date={selectedDate}
            nations={selectedNations}
          />
        </div>
      </Slide>
<p>
  *This website is not affiliated with Uppsalas studentnationer or 
  <a href="https://www.kuratorskonventet.se/"> kuratorskonventet</a>, it is an independent project hoping to temporarily
  fill the gap. This means that the information shown here might be faulty
  at times where we have not been able to update the information or find
  the correct information through the nation's channels.
</p>
    </div>
  );
};

export default MainPage;
