import Rain from '../icons/rain.svg'
import clearDay from '../icons/clear-day.svg'
import Drizzle from '../icons/drizzle.svg'
import Fog from '../icons/fog.svg'
import Haze from '../icons/haze.svg'
import Smoke from '../icons/fog.svg'
import Snow from '../icons/snow.svg'
import Thunderstorm from '../icons/fog.svg'

const Icons = (icon: string) => {
  switch (icon) {
    case "Thunderstorm":
      icon = Thunderstorm;
      console.log("Thunderstorm");
      break;
    case "Drizzle":
      icon = Drizzle;
      console.log("Drizzle");
      break;
    case "Rain":
      icon = Rain;
      console.log("Rain");
      break;
    case "Snow":
      icon = Snow;
      console.log("Snow");
      break;
    case "Clouds":
      icon = Fog;
      console.log("Fog");
      break;
    case "Haze":
      icon = Haze;
      console.log("Haze");
      break;
    case "Smoke":
      icon = Smoke;
      console.log("Smoke");
      break;
    default:
      icon = clearDay;
      console.log("Clear Day");
  }
  return icon;
};


// const Icons2 = {
//   Thunderstorm: 'Thunderstorm',
//   Drizzle: 'drizzle',
//   Rain: 'rain',
//   Snow: 'snow',
//   Clouds: 'clouds',
//   Haze: 'haze',
//   Smoke: 'smoke',
//   ClearDay: 'clearDay',
// }

export default Icons;