import { IconsWeather } from "./icons/Icons";
import { useEffect, useState } from "react";
import { WeatherProps } from "./types/weatherProps";
import { NextDaysProps } from "./components/NextDays/NextDays";
import { InputSearch } from "./components/InputSearch/InputSearch";
import { RandomLocation } from "./components/RandomLocation";
import { citys } from "./mock/citys";
import { getRandomLocations } from "./functions/getRandomLocations";
import {
  getLocationFor5days,
  getLocationFor5daysProps,
} from "./functions/getLocationFor5days";
import { handleTime } from "./functions/handleTime";
import { IRandonLocationData } from "./components/RandomLocation/types";
import { Loading } from "./components/LoadingSpinner/Loading";

function App() {
  const [data, setData] = useState<WeatherProps>({} as WeatherProps);
  const [location, setLocation] = useState("");
  const [dataRandom, setDataRandom] = useState<IRandonLocationData[]>([]);
  const [dataDays, setDataDays] = useState<getLocationFor5daysProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    citys.forEach((item) => getRandomLocations(item, setDataRandom));
  }, []);

  useEffect(() => {
    if (Object.keys(data).length !== 0) {
      getLocationFor5days(data.coord.lat, data.coord.lon, setDataDays);

      setTimeout(() => {
        NextDaysProps(dataDays);
      }, 5000);
    }
  }, [data]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  // console.log("data", data);
  return (
    <div>
      {/* Button Search */}

      <InputSearch
        location={location}
        setData={setData}
        setLocation={setLocation}
      />

      {/* Other stats */}

      {data.name ? (
        <div
          className="sm:flex sm:justify-center sm:max-w-6xl sm:mx-auto mt-14 bg-slate-900 bg-opacity-60 rounded-xl py-20
                        iPhoneSE:mr-3 iPhoneSE:ml-3"
        >
          <div className="flex justify-center flex-col mr-10">
            <p className="px-10 font-sans font-nunito text-4xl	text-white mb-4">
              {data.name}
            </p>
            {data.name ? (
              <p className="px-10 text-8xl font-bold text-white	mb-4">
                {data?.main?.temp.toFixed(0)} ºC
              </p>
            ) : (
              <>{RandomLocation(dataRandom)}</>
            )}

            {data.dt && (
              <div>
                <p className="px-10 font-sans font-nunito text-4xl	text-white mb-1">
                  {handleTime(data.dt).convertDateWithHour}
                </p>
                <p className="px-10 font-sans font-nunito text-4xl	text-white mb-4">
                  {handleTime(data.dt, "long").week}
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
                  <div className="flex justify-center max-md:hidden">
                    <img
                      className="w-48"
                      src={IconsWeather[data.weather[0].main]}
                      alt="icon-weather"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-10 border rounded-lg p-2 max-md:hidden">
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
      ) : (
        <>{isLoading ? <Loading /> : RandomLocation(dataRandom)}</>
      )}

      {NextDaysProps(dataDays)}
    </div>
  );
}

export default App;
