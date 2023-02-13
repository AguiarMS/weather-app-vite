import { getLocationFor5daysProps } from "../../functions/getLocationFor5days";
import { handleTime } from "../../functions/handleTime";
import { IconsWeather } from "../../icons/Icons";
import { IFiveDays } from "./types";

export const NextDaysProps = (dataDays: getLocationFor5daysProps[]) => {
  const getDateNow = String(new Date().getDate());

  if (dataDays.length !== 0) {
    let datesWithHours: IFiveDays[] = [];

    dataDays.forEach((item) => {
      getDateNow !== handleTime(item.dt).day && // garante que o dia de hoje não será retornado na busca, uma vez que 00hr está retornando a data de hoje
        datesWithHours.push({
          date: item,
          info: handleTime(item.dt).day,
        });
    });

    const fiveDays: IFiveDays[] = [
      ...new Map(datesWithHours.map((item) => [item["info"], item])).values(),
    ];

    return (
      <div className="md:flex md:justify-center max-w-6xl mx-auto rounded-xl miniSmall:grid miniSmall:grid-cols-2">
        {fiveDays.map((item) => (
          <div
            key={item.date.dt_txt}
            className="flex flex-col p-10 ml-3 mr-3 justify-center w-3xl mx-auto mt-5 bg-slate-900 bg-opacity-60 text-white text-center rounded-xl py-1
            cursor-pointer hover:scale-105 ease-in-out duration-300"
          >
            <p className="text-md text-white font-semibold py-1">
              {handleTime(item.date.dt, "short").week}
            </p>
            <p>{handleTime(item.date.dt).day}</p>
            <p>{handleTime(item.date.dt).month}</p>
            <div className="flex justify-center">
              <img
                className="w-40"
                src={IconsWeather[item.date.weather[0].main]}
                alt="icon-weather"
              />
            </div>
            <p className="px-1 text-3xl font-bold text-white mb-4">
              {item.date.main.temp.toFixed(0)} ºC
            </p>
          </div>
        ))}
      </div>
    );
  }
};
