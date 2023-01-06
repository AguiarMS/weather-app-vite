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
      </div>

      <div className="mt-4">
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
      <div className="flex justify-center mt-36 bg-gray-600 rounded-full py-5 opacity-50">
        <div className="text-white text-6xl font-semibold">
          <p>65%</p>
        </div>
        <div className="text-white text-6xl font-semibold">
          <p>20%</p>
        </div>
        <div className="text-white text-6xl font-semibold">
          <p>12 MPH</p>
        </div>
      </div>
    </div>
  );
}

export default App;
