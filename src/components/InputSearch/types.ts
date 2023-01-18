export type InputProps = {
  location: string;
  setLocation: (value: React.SetStateAction<string>) => void;
  searchLocation: (event: React.KeyboardEvent<HTMLElement>) => void;
  searchButtonLocation: () => void;
};
