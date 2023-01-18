export type InputProps = {
  value: string;
  location: string;
  setLocation: (value: React.SetStateAction<string>) => void;
  searchLocation: (event: React.KeyboardEvent<HTMLElement>) => void;
  searchButtonLocation: () => void;
};
