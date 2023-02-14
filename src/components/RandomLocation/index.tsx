import France from "../../assets/france.png";
import Rio from "../../assets/christ.png";
import London from "../../assets/big-ben.png";
import Cairo from "../../assets/gize.png";
import { IRandonLocationData } from "./types";
import { IconsWeather } from "../../icons/Icons";
import { Regions } from "../../mock/types";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const imgCitys: Record<Regions, string> = {
  BR: Rio,
  FR: France,
  GB: London,
  EG: Cairo,
};

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export function RandomLocation(data: IRandonLocationData[]) {
  return (
    <div className="flex justify-center max-w-full mx-auto mt-10 bg-slate-900 bg-opacity-60 rounded-xl py-16 px-20 ml-10 mr-10 iPhoneSE:py-5 iPhoneSE:px-5">
      <div className="justify-center w-screen grid auto-cols-fr">
        <p className="flex justify-center text-3xl text-white mb-8 iPhoneSE:mt-5 iPhoneSE:text-xl">
          Previsão do tempo ao redor do mundo
        </p>
        <div className="grid grid-cols-[repeat(4,minmax(330px,1fr))] overflow-hidden overflow-x-scroll lg:overflow-x-hidden">
          {data.map((item) => (
            <div className="p-5" key={item.id}>
              <div
                className="text-white px-8 py-8 rounded-xl lg:flex lg:flex-col lg:items-center
                md:mt-10 md:flex md:flex-col md:items-center sm:mt-10 sm:flex sm:flex-col sm:items-center 
                miniSmall:mt-10 miniSmall:flex miniSmall:flex-col miniSmall:items-center
                lg1142:bg-slate-900 opacity-85 md:bg-slate-900 lg:bg-slate-900 opacity-85 sm:bg-slate-900 opacity-85
                miniSmall:bg-slate-900"
              >
                <p className="flex justify-center text-2xl items-center mb-4">
                  {item.name}
                </p>
                <img
                  className="lg:w-40"
                  src={imgCitys[item.sys.country]}
                  alt="icon-weather"
                />

                <div className="grid grid-cols-2 gap-2 mt-10 p-2 border-2 rounded-md miniSmall:hidden">
                  <p className="text-md font-bold">
                    Humidity: {item?.main?.humidity}%
                  </p>
                  <p className="text-sm font-bold">
                    Wind Speed: {item.wind.speed}m/s
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-2 p-2">
                  <div className="flex justify-center">
                    <img
                      className="w-48"
                      src={IconsWeather[item.weather[0].main]}
                      alt="icon-weather"
                    />
                  </div>
                  <div className="flex items-center justify-center flex-col">
                    <p className="text-xl font-bold">
                      min: {item?.main?.temp_min.toFixed(0)} ºC
                    </p>
                    <p className="text-xl font-bold">
                      max: {item.main.temp_max.toFixed(0)} ºC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
