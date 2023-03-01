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
import { Country } from "./services/Country/country";

function App() {
  const [data, setData] = useState<WeatherProps>({} as WeatherProps);
  const [location, setLocation] = useState("");
  const [dataRandom, setDataRandom] = useState<IRandonLocationData[]>([]);
  const [dataDays, setDataDays] = useState<getLocationFor5daysProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    citys.forEach((item) =>
      getRandomLocations(item, setDataRandom, setIsLoading)
    );
    return setDataRandom([]);
  }, []);

  useEffect(() => {
    if (Object.keys(data).length !== 0) {
      getLocationFor5days(data.coord.lat, data.coord.lon, setDataDays);

      setTimeout(() => {
        NextDaysProps(dataDays);
      }, 5000);
    }
  }, [data]);


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
        <div className="flex justify-center">
          <div
            className="
            flex justify-center mr-3 ml-3
            lg:max-w-6xl w-full lg:mr-3 lg:ml-3
            max-md:mr-20 max-md:ml-20  md:flex mt-14 
            bg-slate-900 bg-opacity-60 rounded-xl py-20"
          >
            <div className="flex justify-center flex-col mr-10">
              <p className="px-10 font-sans font-nunito text-4xl text-white mb-4 miniSmall:text-3xl">
                {data.name}
              </p>
              {data.name ? (
                <p
                  className="
                  miniSmall:text-5xl
                  px-10 text-8xl font-bold text-white	mb-4
                "
                >
                  {data?.main?.temp.toFixed(0)} ºC
                </p>
              ) : (
                <>{RandomLocation(dataRandom)}</>
              )}

              {data.dt && (
                <div>
                  <p className="px-10 font-sans font-nunito text-4xl	text-white mb-1 miniSmall:text-2xl">
                    {handleTime(data.dt).convertDateWithHour}
                  </p>
                  <p className="px-10 font-sans font-nunito text-4xl	text-white mb-4 miniSmall:text-2xl">
                    {handleTime(data.dt, "long").week}
                  </p>
                </div>
              )}
            </div>

            <div className="text-white font-semibold">
              <div className="">
                {data.name && (
                  <div className="mr-10">
                    <div className="flex justify-center max-md:hidden">
                      <img
                        className="w-48"
                        src={IconsWeather[data.weather[0].main]}
                        alt="icon-weather"
                      />
                    </div>

                    <div className="flex justify-center w-full space-x-4 divide-x divide-slate-200">
                      <div
                        className="flex-auto text-center mr-[-10px]
                      text-white mt-8
                      lg1142:hidden
                      md880:hidden
                      md600:hidden"
                      >
                        <p>Max</p>
                        {data.main.temp_max}ºC
                      </div>
                      <div
                        className="flex-auto text-center
                      text-white mt-8
                      lg1142:hidden
                      md880:hidden
                      md600:hidden"
                      >
                        <p>Min</p>
                        {data.main.temp_min}ºC
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-2 gap-2 mt-10 border rounded-lg p-2 hidden">
                      <div className="">
                        <p className="text-lg">
                          Humidity: {data.main.humidity}
                        </p>
                      </div>
                      <div className="">
                        <p className="text-lg">Wind Speed: {data.wind.speed}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>{isLoading ? <Loading /> : RandomLocation(dataRandom)}</>
      )}

      {dataDays.length > 0 && NextDaysProps(dataDays)}
    </div>
  );
}

export default App;
