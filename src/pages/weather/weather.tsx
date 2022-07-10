import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { CitySearchForm } from "./component/search";
import { FavoriteCities } from "./component/favorite-cities";
import { InfoWeather } from "./component/info";
import fetchCurrentWeather from "@/store/asyncActions/currentWeather";
import fetchForecast from "@/store/asyncActions/forecast";
import { selectSelected } from "@/store/selectors";

const Weather: FC = () => {
    const selected = useAppSelector(selectSelected);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!selected) return;
        dispatch(fetchCurrentWeather(selected));
        dispatch(fetchForecast(selected));
    }, [dispatch, selected]);

    return (
        <div className='weather'>
            <div className='weather__list'>
                <div className='weather__item weather__item--search'>
                    <CitySearchForm />
                </div>
                <div className='weather__item weather__item--info'>
                    <InfoWeather />
                </div>
                <div className='weather__item weather__item--cities'>
                    <FavoriteCities />
                </div>
            </div>
        </div>
    );
};

export { Weather };
