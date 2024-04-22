import { fetchGoogleSheetsData } from "google-sheets-mapper";
import { EventObject } from "../Types";

const TRACKING_ID = "G-5TL155XBJ9"; // OUR_TRACKING_ID

const getData = async (sheetOption: string) => {
  try {
    const data = await fetchGoogleSheetsData({
      apiKey: process.env.REACT_APP_GOOGLE_API_KEY ?? "any-default-local-build_env",
      sheetId: process.env.REACT_APP_SHEET_ID ?? "any-default-local-build_env",
      sheetsOptions: [{ id: sheetOption }],
    });

    return data[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const fetchData = async (sheetOption: string): Promise<EventObject[]> => {
  try {
    const result = await getData(sheetOption);
    const data: EventObject[] = result?.data.map((item: any) => ({
      id: item.id,
      title: item.title,
      date: item.date,
      time: item.time,
      category: item.category,
      nation: item.nation,
      link: item.link,
      description: item.description,
      imageUrl: item.imageUrl,
    }));
    console.log("Data fetched:", data);
    return data;
  } catch (error) {
    console.error("Error during fetch:", error);
    throw error;
  }
};

export { getData, fetchData };
export default fetchData;
