import { useDispatch } from "react-redux";
import React, { FC } from "react";
import ButtonToggleFavorite from "./component/ButtonToggleFavorite";
import useTypedSelector from "@/hooks/redux";
import { addCity, removeCity } from "@/store/actions/citiesActions";

const NowWeather: FC = () => {
    const dispatch = useDispatch();
    const { cities } = useTypedSelector((state) => state.cities);
    const { name, icon, temp } = useTypedSelector((state) => state.weather.weather);

    const isNotValid = !temp || !icon || !name;
    if (isNotValid) return null;

    const toggleCity = (city: string) => {
        cities.includes(city) ? dispatch(removeCity(city)) : dispatch(addCity(city));
    };

    const isFavorite = cities.includes(name);
    const temperature = `${Math.round(temp)}°`;
    const img = `https://openweathermap.org/img/wn/${icon}@4x.png`;

    return (
        <div className='now'>
            <span className='now__temp'>{temperature}</span>
            <img className='now__img' alt='' width='78' height='59' src={img} />
            <div className='now__bottom'>
                <h3 className='now__city'>{name}</h3>
                <ButtonToggleFavorite isFavorite={isFavorite} onClick={() => toggleCity(name)} />
            </div>
        </div>
    );
};

export default NowWeather;
