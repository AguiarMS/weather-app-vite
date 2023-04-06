import { searchLocation } from "../../functions/searchLocation";
import { MessageEmptyInput } from "../MessageEmptyInput/MessageEmptyInput";
import { InputProps } from "./types";
// coment
export const InputSearch = ({ location, setLocation, setData }: InputProps) => {
  return (
    <div className="flex justify-center">
      <input
        className="mt-20 rounded-l-md py-2 px-2 w-[55%]"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyUpCapture={(e) =>
          searchLocation(e, setData, location, setLocation)
        }
        placeholder="Enter Location"
        type="text"
      />
      <button
        className="bg-slate-700 hover:bg-slate-600 mt-20 text-white font-bold py-2 px-4 rounded-r-md"
        onClick={(e) => searchLocation(e, setData, location, setLocation)}
      >
        Search
      </button>
    </div>
  );
};
