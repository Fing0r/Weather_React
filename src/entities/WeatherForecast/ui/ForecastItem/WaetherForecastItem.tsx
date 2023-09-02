import { WeatherForecast } from '../../model/types/weatherForecast'

import { CONFIG } from "@/shared/const/config";
import { getTime, getDate } from "@/shared/lib/utils/utils";


interface WeatherForecastItem extends WeatherForecast {

}

const ForecastWeatherItem = ({ date, temp, feelsLike, main, icon }: WeatherForecastItem) => {
  const isNotValid = !date || !temp || !feelsLike || !main || !icon;
  if (isNotValid) {
    return null
  }

  return (
    <li className='forecast__card'>
      <div className='forecast__top'>
        <span className='forecast__date'>{getDate(date)}</span>
        <span className='forecast__time'>{getTime(date)}</span>
      </div>
      <div className='forecast__bottom'>
        <div className='forecast__temperature'>
          <span className='forecast__temp'>{`Temperature: ${Math.round(temp)}°`}</span>
          <span className='forecast__feels'>{`Feels like: ${Math.round(feelsLike)}°`}</span>
        </div>
        <div className='forecast__weather'>
          <span className='forecast__precipitation'>{main}</span>
          <img className='forecast__img' src={`${CONFIG.IMG}${icon}@4x.png`} alt=''/>
        </div>
      </div>
    </li>
  );
};

export { ForecastWeatherItem };
