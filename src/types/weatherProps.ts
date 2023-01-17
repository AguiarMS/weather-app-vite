export type WeatherProps = {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
  };
  dt?: number;
};
