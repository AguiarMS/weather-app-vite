import { GetDataTime } from "./types";

export const handleTime = ({ data }: GetDataTime) => {
  const timeStamp = data.dt || 0;
  const convertData = new Date(timeStamp * 1000).toLocaleString("pt-BR");
  const week = new Date(timeStamp * 1000).toLocaleString("pt-BR", {
    weekday: "long",
  });
  return { convertData, week };
};
