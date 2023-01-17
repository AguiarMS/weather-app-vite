import axios from "axios";
import { IconsWeather } from "./components/Icons";
import backgroundWeather from "./assets/img-weather.jpg";
import { useState } from "react";
import { WeatherProps } from "./types/weatherProps";

import { url } from "./api/api";

function App() {
  const [data, setData] = useState<WeatherProps>({} as WeatherProps);
  const [location, setLocation] = useState("");


  const searchLocation = async (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter") {
      await axios.get(url).then((response) => {
        setData(response.data);
        console.log("DATA", response.data);
      });
      setLocation("");
    }
  };


  const searchButtonLocation = async () => {
    if (location === "") {
      alert("Enter with your location");
    } else {
      await axios.get(url).then((response) => {
        setData(response.data);
        console.log("BUTTON SEARCH EVENT", response.data);
      });
    }
  };

  const handleTime = () => {
    const timeStamp = data.dt || 0;
    const convertData = new Date(timeStamp * 1000).toLocaleString("pt-BR");
    const week = new Date(timeStamp * 1000).toLocaleString("pt-BR", {
      weekday: "long",
    });
    return { convertData, week };
  };

  return (
    <div
      style={{ backgroundImage: `url(${backgroundWeather})` }}
      className="w-full h-[100vh]  bg-cover"
    >
      <div className="flex justify-center">
        <input
          className="mt-20 rounded-l-md py-2 px-2 w-[55%]"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyUpCapture={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
        <button
          className="bg-slate-700 hover:bg-slate-600 mt-20 text-white font-bold py-2 px-4 rounded-r-md"
          onClick={searchButtonLocation}
        >
          Search
        </button>
      </div>

      {/* Other stats */}

      <div className="text-white">Name: {data.name}</div>

    </div>
  );
}

export default App;
