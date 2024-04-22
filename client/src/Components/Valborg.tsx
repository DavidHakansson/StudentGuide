import React, { useState, useEffect } from "react";
import EventsByNation from "./EventsByNation";
import NationDropDown from "./NationDropDown";
import { DefaultNationOptions } from "./Nations";
import ReactGA from "react-ga4";
import {fetchData} from "./utils/fetchData";
import { EventObject } from "./Types";

const TRACKING_ID = "G-5TL155XBJ9"; // YOUR_TRACKING_ID

const Valborg: React.FC = () => {
  const [events, setEvents] = useState<EventObject[]>([]);
  const [selectedNations, setSelectedNations] = useState<string[]>(
    DefaultNationOptions.map((option) => option.value)
  );

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send({
      hitType: "pageview",
      page: "/Valborg",
      title: "Valborg .)",
    });

    const setAndFetchData = async () => {
    setEvents(await fetchData("Blad2"));
    } 
    setAndFetchData();
  }, []);


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
          <div className="col-md-6 d-md-flex mb-3 mt-2">
            <NationDropDown onChange={handleNationChange} />
          </div>
        </div>
      </div>
      <EventsByNation events={events} nations={selectedNations} />
      <p>
        *This website is not affiliated with Uppsalas studentnationer or
        kuratorskonventet, it is an independent project hoping to temporarly
        fill the gap. This means that the information shown here might be
        faulty at times where we have not been able to update the information
        or find the correct information through the nations channels.
      </p>
    </div>
  );
};

export default Valborg;
