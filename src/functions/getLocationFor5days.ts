import { SetStateAction } from 'react';
import { api } from "../services/api";

export async function getLocationFor5days(lat: number, lon:number, setDataDays: React.Dispatch<SetStateAction<string[]>>) {
    await api
      .get(
        `/forecast?lat=${lat}&lon=${lon}&appid=65c3c0cccd9f4b6a9e7dd0106ee5371f`
      )
      .then((response) => {
        setDataDays((oldData: any) => [...oldData, response.data]);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }




 