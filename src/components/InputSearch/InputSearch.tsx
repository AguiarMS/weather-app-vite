import { ChangeEvent, useState, useRef, useEffect } from "react";
import { searchLocation } from "../../functions/searchLocation";
import { Country } from "../../services/Country/country";
import { MessageEmptyInput } from "../MessageEmptyInput/MessageEmptyInput";
import { InputProps } from "./types";

export const InputSearch = ({ location, setLocation, setData }: InputProps) => {
  const [filter, setFilter] = useState("");
  const [filteredCountry, setFilteredCountry] = useState<Country[]>([]);
  const listRef = useRef<HTMLUListElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setLocation(value);
    setFilter(value);

    // Filtro
    const filtered = Country.filter((country) =>
      country.nome_pais.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCountry(filtered);
  };

  // Efeito para quando clicar fora do inputSearch fechar a <ul>.
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (listRef.current && !listRef.current.contains(event.target as Node)) {
        setFilteredCountry([]);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-center">
      <input
        className="mt-20 rounded-l-md py-2 px-2 w-[55%]"
        value={location}
        onChange={handleChange}
        placeholder="Enter Location"
        type="text"
      />

      {filteredCountry.length > 0 ? (
        <ul
          ref={listRef}
          className=" mt-32 absolute bg-white w-8/12 rounded-md shadow-lg max-h-80 overflow-hidden overflow-y-auto"
        >
          {filteredCountry.map((country) => (
            <li
              key={country.sigla}
              className="hover:bg-gray-200 py-2 px-3 cursor-pointer"
              onClick={() => {
                setLocation(country.nome_pais);
                setFilteredCountry([]);
                setFilter(""); // Limpa o filtro quando um país é selecionado
              }}
            >
              {country.nome_pais}
            </li>
          ))}
        </ul>
      ) : null}

      <button
        className="bg-slate-700 hover:bg-slate-600 mt-20 text-white font-bold py-2 px-4 rounded-r-md"
        onClick={(e) => searchLocation(e, setData, location, setLocation)}
      >
        Search
      </button>
    </div>
  );
};
