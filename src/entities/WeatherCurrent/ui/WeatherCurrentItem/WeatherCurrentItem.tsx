import { WeatherCurrent } from '../../model/types/weatherCurrent';

import cls from './WeatherCurrentItem.module.scss';

import HeartIcon from '@/shared/assets/icons/heart.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';

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
    <div className={cls.now}>
      <span className={cls.now__temp}>{`${Math.round(temp)}°`}</span>
      <img
        className={cls.now__img}
        alt=""
        width="78"
        height="59"
        src={imgPath}
      />
      <div className={cls.now__bottom}>
        <h3 className={cls.now__city}>{name}</h3>
        <Button
          onClick={onClick}
          className={classNames(cls.now__heart, {
            [cls.active]: isFavorites,
          })}
        >
          <HeartIcon />
        </Button>
      </div>
    </div>
  );
};

export { WeatherCurrentItem };
