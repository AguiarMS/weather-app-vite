import axios from "axios";
import backgroundWeather from "./assets/img-weather.jpg";
import { useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=65c3c0cccd9f4b6a9e7dd0106ee5371f`;

  const searchLocation = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation('')
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${backgroundWeather})` }}
      className="w-full h-[100vh] py-20 bg-cover"
    >
      <div>
        <p className="px-8 font-sans text-2xl	text-white">Dallas</p>
      </div>

      <div className="mt-4">
        <p className="px-10 text-8xl font-bold text-white	">60º F</p>
        <p className="flex justify-end px-8 font-sans text-2xl	text-white">
          Clouds
        </p>
      </div>

      <div className="flex justify-center">
        <input
          className="mt-20 rounded py-2 px-2"
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyUpCapture={searchLocation}
          placeholder="Enter Location"
        />
      </div>

      {/* Other stats */}
      <div className="flex justify-evenly mt-36 ml-56 mr-56 bg-gray-600 rounded-xl py-5 opacity-50">
        <div className="text-white font-semibold">
          <p className="flex justify-center text-4xl">65ºF</p>
          <p className="text-2xl mt-4">Feels Like</p>
        </div>
        <div className="text-white text-6xl font-semibold">
          <p className="flex justify-center text-4xl">20%</p>
          <p className="text-2xl mt-4">Humidity</p>
        </div>
        <div className="text-white text-6xl font-semibold">
          <p className="flex justify-center text-4xl">12 MPH</p>
          <p className="text-2xl mt-4">Wind Speed</p>
        </div>
      </div>
    </div>
  );
}

export default App;
