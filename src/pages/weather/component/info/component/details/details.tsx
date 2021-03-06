import { FC } from "react";
import { getTime } from "@/utils/utils";
import { useAppSelector } from "@/hooks/redux";
import { selectWeather } from "@/store/selectors";

const DetailsWeather: FC = () => {
    const cityInfo = useAppSelector(selectWeather);
    if (!Object.keys(cityInfo).length) return null;
    const { temp, feelsLike, main, sunrise, sunset, name } = cityInfo;
    const isNotValid = !temp || !feelsLike || !main || !sunrise || !sunset || !name;
    if (isNotValid) return null;

    return (
        <div className='details'>
            <h3 className='details__city'>{name}</h3>
            <div className='details__info'>
                <span className='details__temperature'>{`Temperature: ${Math.round(temp)}°`}</span>
                <span className='details__feels'>{`Feels like: ${Math.round(feelsLike)}°`}</span>
                <span className='details__weather'>{`Weather: ${main}`}</span>
                <span className='details__sunrise'>{`Sunrise: ${getTime(sunrise)}`}</span>
                <span className='details__sunset'>{`Sunset: ${getTime(sunset)}`}</span>
            </div>
        </div>
    );
};

export { DetailsWeather };
