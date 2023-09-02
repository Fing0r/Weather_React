import { WeatherCurrent } from '@/entities/WeatherCurrent'
import { getTime } from "@/shared/lib/utils/utils";
import './styles.scss'

interface DetailsWeatherProps {
  weather: WeatherCurrent
}

const WeatherDetail = (props: DetailsWeatherProps) => {
  const { weather } = props
  const { temp, feelsLike, main, sunrise, sunset, name } = weather;

  const isNotHasWeather = !(name && temp && feelsLike && sunrise && sunset)
  if (isNotHasWeather) {
    return null;
  }

  return (
    <div className='details'>
      <h3 className='details__city'>{name}</h3>
      <div className='details__info'>
        <span className='details__temperature'>Temperature: {Math.round(temp)}°</span>
        <span className='details__feels'>Feels like: {Math.round(feelsLike)}°</span>
        <span className='details__weather'>Weather: {main}</span>
        <span className='details__sunrise'>Sunrise: {getTime(sunrise)}</span>
        <span className='details__sunset'>Sunset: {getTime(sunset)}</span>
      </div>
    </div>
  );
};

export { WeatherDetail };
