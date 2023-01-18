import axios from "axios";
import { IconsWeather } from "./components/Icons";
import backgroundWeather from "./assets/img-weather.jpg";
import { useEffect, useState } from "react";
import { WeatherProps } from "./types/weatherProps";
import { NextDays } from "./components/NextDays";
import { FlagIcon } from "./components/FlagIcons";
import { WeatherPropsSaoPaulo } from "./types/weatherSP";
import { RandomLocaltion } from "./components/RandomLocation";

function App() {
  const [data, setData] = useState<WeatherProps>({} as WeatherProps);
  const [weatherSP, setWeatherSP] = useState<WeatherPropsSaoPaulo>({} as WeatherPropsSaoPaulo);
  const [location, setLocation] = useState("");
  const [forcast, setForcast] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=65c3c0cccd9f4b6a9e7dd0106ee5371f&units=metric`;
  const WEATHER_SP = `https://api.openweathermap.org/data/2.5/weather?lat=-23.5475&lon=-46.6361&appid=65c3c0cccd9f4b6a9e7dd0106ee5371f`;
  const urlForecast = `api.openweathermap.org/data/2.5/forecast?q=${forcast}&appid=65c3c0cccd9f4b6a9e7dd0106ee5371f&units=metric`;
  //const WEATHER_IMG = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  const searchLocation = async (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter") {
      await axios.get(url).then((response) => {
        setData(response.data);
        console.log("DATA", response.data);
      });
      setLocation("");
    }
  };

  const weatherSaoPaulo = async () => {
    await axios.get(WEATHER_SP).then((response) => {
      setWeatherSP(response.data);
      console.log("DATA", response.data);
    });
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

      <div className="flex justify-center max-w-6xl mx-auto mt-14 bg-slate-900 bg-opacity-60 rounded-xl py-20">
        <div className="flex justify-center flex-col mr-10">
          <p className="px-10 font-sans font-nunito text-4xl	text-white mb-4">
            {data.name}
          </p>
          {data.name ? (
            <p className="px-10 text-8xl font-bold text-white	mb-4">
              {data?.main?.temp} ºC
            </p>
          ) : (
            <>
              <div className="flex space-x-4">
                <div className="text-white">{weatherSP.name}</div>
                <div className="text-white">Rio de Janeiro</div>
                <div className="text-white">Minas Gerais</div>
                {RandomLocaltion()}
              </div>
              {/* <FlagIcon /> */}
            </>
          )}

          {data.dt && (
            <div>
              <p className="px-10 font-sans font-nunito text-4xl	text-white mb-1">
                {handleTime().convertData}
              </p>
              <p className="px-10 font-sans font-nunito text-4xl	text-white mb-4">
                {handleTime().week}
              </p>
            </div>
          )}
          {/* <p className="text-2xl text-white">teste</p>
          <p className="text-2xl text-white">teste</p> */}
        </div>

        <div className="text-white font-semibold">
          <div className="">
            {data.name && (
              <>
                <div className="flex justify-center">
                  <img
                    className="w-48"
                    src={IconsWeather[data.weather[0].main]}
                    alt="icon-weather"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2 mt-10 border rounded-lg p-2">
                  <div className="">
                    <p className="text-lg">Humidity: {data.main.humidity}</p>
                  </div>
                  <div className="">
                    <p className="text-lg">Wind Speed: {data.wind.speed}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {data.name && <NextDays />}
    </div>
  );
}

export default App;
