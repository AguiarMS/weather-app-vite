import { InputProps } from "./types";

export const InputSearch = ({location}: InputProps) => {
  return (
    <div>
      <input
        className="mt-20 rounded-l-md py-2 px-2 w-[55%]"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyUpCapture={searchLocation}
        placeholder="Enter Location"
        type="text"
      />
      <button
        className="bg-slate-700 hover:bg-slate-600 mt-20 text-white font-bold py-2 px-4 rounded-r-md"
        onClick={searchButtonLocation}
      >
        Search
      </button>
    </div>
  );
};
