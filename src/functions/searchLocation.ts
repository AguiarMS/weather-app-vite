import { useEffect } from "react";
import { api } from "../services/api";
import { WeatherProps } from "../types/weatherProps";

export const searchLocation = async (
  event:
    | React.KeyboardEvent<HTMLElement>
    | React.MouseEvent<HTMLButtonElement, MouseEvent>
    | any,
  setData: React.Dispatch<React.SetStateAction<WeatherProps>>,
  location: string,
  setLocation: (value: React.SetStateAction<string>) => void
) => {
  if (location === "") {
    alert("Enter with your location");
  }
  if (event.key === "Enter" || event.type === "click") {
    await api
      .get(
        `/weather?q=${location}&appid=65c3c0cccd9f4b6a9e7dd0106ee5371f&units=metric`
      )
      .then((response) => {
        setData(response.data);
      });
    setLocation("");
  }
};
