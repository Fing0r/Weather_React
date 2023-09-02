import { WeatherCurrent } from '../../model/types/weatherCurrent';

import HeartIcon from '@/shared/assets/icons/heart.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';

import './styles.scss';

interface NowWeatherProps {
  weather: WeatherCurrent;
  isFavorites: boolean;
  onClick: () => void;
}

const WeatherCurrentItem = (props: NowWeatherProps) => {
  const { weather, isFavorites, onClick } = props;

  const { name, icon, temp } = weather;

  const isNotHasWeather = !(name && icon && temp);
  if (isNotHasWeather) {
    return null;
  }

  const imgPath = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <div className="now">
      <span className="now__temp">{`${Math.round(temp)}°`}</span>
      <img className="now__img" alt="" width="78" height="59"
src={imgPath} />
      <div className="now__bottom">
        <h3 className="now__city">{name}</h3>
        <Button
          onClick={onClick}
          className={classNames('now__heart', {
            active: isFavorites,
          })}
        >
          <HeartIcon />
        </Button>
      </div>
    </div>
  );
};

export { WeatherCurrentItem };
