import React, { useState, useEffect } from "react";
import EventsByNation from "./EventsByNation";
import NationDropDown from "./NationDropDown";
import { DefaultNationOptions } from "./Nations";
import ReactGA from "react-ga4";
import { fetchGoogleSheetsData } from "google-sheets-mapper";

const TRACKING_ID = "G-5TL155XBJ9"; // YOUR_TRACKING_ID

const Valborg: React.FC = () => {
  const [events, setEvents] = useState<any[]>([]);
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
    
    const getData = async () => {
      try {
        const data = await fetchGoogleSheetsData({
          apiKey: (process.env.REACT_APP_GOOGLE_API_KEY ?? "") || "any-default-local-build_env",
          sheetId: (process.env.REACT_APP_SHEET_ID ?? "")|| "any-default-local-build_env",
          sheetsOptions: [{ id: "Blad2" }],
        });

        return data[0];
      } catch (error) {
        console.error(error);
      }
    };
    const fetchData = async () => {
      try {
        var data: any;
        await getData()
          .then((result) => {
            data = result?.data;
            setEvents(data);
          })
          .catch((error) => {
            console.error(error);
          });
        // Sort the data based on category order
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };
    fetchData();
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
