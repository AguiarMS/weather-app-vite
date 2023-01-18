import axios from "axios";
import { IconsWeather } from "./icons/Icons";
import backgroundWeather from "./assets/img-weather.jpg";
import { useEffect, useState } from "react";
import { WeatherProps } from "./types/weatherProps";
import { NextDays } from "./components/NextDays/NextDays";
import { InputSearch } from "./components/InputSearch/InputSearch";
import { RandomLocation } from "./components/RandomLocation";
import { api } from "./services/api";

function App() {
  const [data, setData] = useState<WeatherProps>({} as WeatherProps);
  const [location, setLocation] = useState("");
  const [dataRandom, setDataRandom] = useState<string[]>([]);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=65c3c0cccd9f4b6a9e7dd0106ee5371f&units=metric`;
  const array = ["sao paulo", "dallas", "Tokyo"];

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

  async function locations(location: string) {
    await api
      .get(
        `/weather?q=${location}&appid=65c3c0cccd9f4b6a9e7dd0106ee5371f&units=metric`
      )
      .then((response) => {
        setDataRandom((oldData: any) => [...oldData, response.data]);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  const handleTime = () => {
    const timeStamp = data.dt || 0;
    const convertData = new Date(timeStamp * 1000).toLocaleString("pt-BR");
    const week = new Date(timeStamp * 1000).toLocaleString("pt-BR", {
      weekday: "long",
    });
    return { convertData, week };
  };

  useEffect(() => {
    array.forEach((item) => locations(item));
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${backgroundWeather})` }}
      className="w-full h-[100vh]  bg-cover"
    >
      {/* Button Search */}
      <InputSearch
        location={location}
        searchButtonLocation={searchButtonLocation}
        searchLocation={searchLocation}
        setLocation={setLocation}
      />

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
            <>{RandomLocation(dataRandom)}</>
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
