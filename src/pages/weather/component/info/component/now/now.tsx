import { FC } from "react";
import { ButtonToggleFavorite } from "./component";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { toggleCity } from "@/store/reducers/citiesSlice";
import { selectCities, selectWeather } from "@/store/selectors";

const NowWeather: FC = () => {
    const dispatch = useAppDispatch();
    const cities = useAppSelector(selectCities);
    const { name, icon, temp } = useAppSelector(selectWeather);

    const isNotValid = !temp || !icon || !name;
    if (isNotValid) return null;

    const toggleHandle = (city: string) => dispatch(toggleCity(city));

    const isFavorite = cities.includes(name);
    const temperature = `${Math.round(temp)}°`;
    const img = `https://openweathermap.org/img/wn/${icon}@4x.png`;

    return (
        <div className='now'>
            <span className='now__temp'>{temperature}</span>
            <img className='now__img' alt='' width='78' height='59' src={img} />
            <div className='now__bottom'>
                <h3 className='now__city'>{name}</h3>
                <ButtonToggleFavorite isFavorite={isFavorite} onClick={() => toggleHandle(name)} />
            </div>
        </div>
    );
};

export { NowWeather };
