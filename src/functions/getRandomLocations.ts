import { SetStateAction } from "react";
import { IRandonLocationData } from "../components/RandomLocation/types";
import { api } from "../services/api";

export async function getRandomLocations(
  location: string,
  setDataRandom: React.Dispatch<SetStateAction<IRandonLocationData[]>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  await api
    .get(
      `/weather?q=${location}&appid=65c3c0cccd9f4b6a9e7dd0106ee5371f&units=metric`
    )
    .then((response) => {
      setDataRandom((oldData: any) => [...oldData, response.data]);
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    })
    .finally(() => {
      setIsLoading(false);
    });
}
