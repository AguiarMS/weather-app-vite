import { WeatherProps } from "../../types/weatherProps";

export type InputProps = {
  location: string;
  setLocation: (value: React.SetStateAction<string>) => void;
  setData: React.Dispatch<React.SetStateAction<WeatherProps>>
};
