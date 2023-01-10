import axios from "axios";
import Icons from "./components/Icons";
// import clearDay from './icons/clear-day.svg'
import backgroundWeather from "./assets/img-weather.jpg";
import { useState } from "react";

export type Props = {
  name: string;
  main: {
    feels_like: number;
    humidity: number;
    temp: number;
  };
  wind: {
    speed: number;
  };
  weather: [
    {
      icon: string;
    }
  ];
};

function App() {
  const [data, setData] = useState<Props>({
    name: "",
    main: {
      feels_like: 0,
      humidity: 0,
      temp: 0,
    },
    wind: {
      speed: 0,
    },
    weather: [
      {
        icon: "",
      },
    ],
  });
  const [location, setLocation] = useState("");
  const [icon, setIcon] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=65c3c0cccd9f4b6a9e7dd0106ee5371f`;
  const WEATHER_IMG = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  const searchLocation = async (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter") {
      await axios.get(url).then((response) => {
        setData(response.data);
        console.log("DATA", response.data);
        setIcon(data.weather[0].icon);
      });
      setLocation("");
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${backgroundWeather})` }}
      className="w-full h-[100vh] py-20 bg-cover"
    >
      <div>
        <p className="px-10 font-sans font-nunito text-4xl	text-white">
          {data.name}
        </p>
      </div>

      <div className="mt-4">
        <p className="px-10 text-8xl font-bold text-white	">
          {data.main.temp}º F
        </p>
        <p className="flex justify-end px-8 font-sans text-2xl	text-white">
          Clouds
        </p>
      </div>

      <div className="flex justify-center">
        <input
          className="mt-20 rounded py-2 px-2"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyUpCapture={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>

      {/* Other stats */}
      <div className="flex justify-evenly mt-36 ml-56 mr-56 bg-gray-600 rounded-xl py-5 opacity-50">
        <div className="text-white font-semibold">
          <p className="flex justify-center text-4xl">{data.main.feels_like}</p>
          <img src={WEATHER_IMG} alt="icon-weather" />
          <p className="text-2xl mt-4">Feels Like</p>
        </div>
        <div className="text-white text-6xl font-semibold">
          <p className="flex justify-center text-4xl">{data.main.humidity}</p>
          <p className="text-2xl mt-4">Humidity</p>
        </div>
        <div className="text-white text-6xl font-semibold">
          <p className="flex justify-center text-4xl">{data.wind.speed}</p>
          <p className="text-2xl mt-4">Wind Speed</p>
        </div>
      </div>
    </div>
  );
}

export default App;
