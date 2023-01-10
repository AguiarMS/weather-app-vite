
const Icons = (icon: string) => {
  switch (icon) {
    case "Thunderstorm":
      icon = "icons/thunderstorms-rain.svg";
      console.log("Thunderstorm");
      break;
    case "Drizzle":
      icon = "icons/drizzle.svg";
      console.log("Drizzle");
      break;
    case "Rain":
      icon = "icons/rain.svg";
      console.log("Rain");
      break;
    case "Snow":
      icon = "icons/snowy.svg";
      console.log("Snow");
      break;
    case "Clear":
      icon = "icons/clear-day.svg";
      console.log("Clear");
      break;
    case "Atmosphere":
      icon = "icons/weather.svg";
      console.log("Weather");
      break;
    case "Clouds":
      icon = "icons/fog.svg";
      console.log("Fog");
      break;
    case "Haze":
      icon = "icons/haze.svg";
      console.log("Haze");
      break;
    case "Smoke":
      icon = "icons/smoke.svg";
      console.log("Smoke");
      break;
    default:
      icon = "icons/clear-day.svg";
      console.log("Clear Day");
  }
  return icon;
};

export default Icons;