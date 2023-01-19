import { IconsWeather } from "../../icons/Icons";
import { WeatherProps } from "../../types/weatherProps";

export function RandomLocation(data: string[]) {
  return (
    <div className="flex justify-center max-w-full mx-auto mt-14 bg-slate-900 bg-opacity-60 rounded-xl py-20 px-20">
      <div className="flex justify-center flex-col">
        <div className="flex space-x-4">
          {data.map((item: any) => (
            <div
              key={item.id}
              className="text-white px-36 py-40 border-4 border-white rounded-lg"
            >
              <p className="text-2xl">{item.name}</p>

              <div>IMG AQUI</div>

              <div className="grid grid-cols-2 gap-2 mt-10 border rounded-lg p-2">
                <div className="">
                  <p className="text-sm font-bold">Humidity: {item?.main?.temp}</p>
                </div>
                <div className="">
                  <p className="text-sm font-bold">Wind Speed: {item.wind.speed}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
