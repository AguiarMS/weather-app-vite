import { SetStateAction } from "react";
import { api } from "../services/api";

export interface getLocationFor5daysProps {
  dt: number;
  dt_txt: string;
  main: {
    temp_max: number;
    temp_min: number;
    humidity: number;
  };
  weather: {
    main: string;
  }
}

export async function getLocationFor5days(
  lat: number,
  lon: number,
  setDataDays: React.Dispatch<SetStateAction<getLocationFor5daysProps[]>>
) {
  await api
    .get(
      `/forecast?lat=${lat}&lon=${lon}&appid=65c3c0cccd9f4b6a9e7dd0106ee5371f&units=metric`
    )
    .then((response) => {
      setDataDays(response.data.list);
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
}
