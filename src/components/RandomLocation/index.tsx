import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function RandomLocaltion() {
  const array = ["sao paulo", "dallas", "Tokyo"];

  const [data, setData] = useState<string[]>([]);

  async function locations(location: string) {
    await api.get(`/weather?q=${location}&appid=65c3c0cccd9f4b6a9e7dd0106ee5371f&units=metric`)
      .then((response) => {
        setData((oldData: any) => [...oldData, response.data]);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  useEffect(() => {
    array.forEach((item) => locations(item));
  }, []);

  return (
    <div className="flex justify-center max-w-6xl mx-auto mt-14 bg-slate-900 bg-opacity-60 rounded-xl py-20">
      <div className="flex justify-center flex-col mr-10">
export function RandomLocation( data: string[]){
    return (
        <div className="flex justify-center max-w-6xl mx-auto mt-14 bg-slate-900 bg-opacity-60 rounded-xl py-20">
        <div className="flex justify-center flex-col mr-10">
        <div className="flex space-x-4">
          {data.map((item) => (
            <div className="text-white" key={item.weather}>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
