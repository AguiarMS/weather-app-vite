import France from "../../assets/france.png";
import Rio from "../../assets/christ.png";
import London from "../../assets/big-ben.png";
import Cairo from "../../assets/gize.png";
import { IRandonLocationData } from "./types";
import { IconsWeather } from "../../icons/Icons";

const imgCitys: Record<Regions, string> = {
  BR: Rio,
  FR: France,
  GB: London,
  EG: Cairo,
};

export function RandomLocation(data: IRandonLocationData[]) {
  return (
    <div className="flex justify-center max-w-full mx-auto mt-10 bg-slate-900 bg-opacity-60 rounded-xl py-16 px-20">
      <div className="flex justify-center flex-col ">
        <p className="text-3xl text-white mb-8">Previsão do tempo ao redor do mundo</p>
        <div className="flex space-x-4 " >
          {data.map((item, index) => (
            <div className="flex" key={item.id}>
              <div
                
                className="text-white px-8 py-8 rounded-xl flex flex-col items-center"
              >
                <p className="text-2xl">{item.name}</p>
                <img
                  className="w-40"
                  src={imgCitys[item.sys.country]}
                  alt="icon-weather"
                />

                <div className="grid grid-cols-2 gap-2 mt-10 p-2">
                  <div className="">
                    <p className="text-sm font-bold">
                      Humidity: {item?.main?.humidity}%
                    </p>
                  </div>
                  <div className="">
                    <p className="text-sm font-bold">
                      Wind Speed: {item.wind.speed}m/s
                    </p>
                  </div>
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
               {Boolean(data.length > index + 1 ) ? <div className="w-px h-full bg-slate-300" /> : <div/>  }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
