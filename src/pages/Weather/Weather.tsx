import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import CitySearchForm from "./component/Search/Form";
import FavoriteCities from "./component/FavoriteCities/FavoriteCities";
import InfoWeather from "./component/Info/Info";
import { STORAGE } from "@/settings/config";
import useTypedSelector from "@/hooks/redux";
import { updateDataFromStorage, updateWeatherStatistics } from "@/utils/storageUtils";
import fetchCurrentWeather from "@/store/asyncActions/currentWeather";
import fetchForecast from "@/store/asyncActions/forecast";

const Weather: FC = () => {
    const { selected } = useTypedSelector((state) => state.cities);
    const dispatch = useDispatch();

    useEffect(() => {
        updateDataFromStorage(STORAGE.SELECTED_CITY, selected);
        if (!selected) return;
        dispatch(fetchCurrentWeather(selected));
        dispatch(fetchForecast(selected));
        updateWeatherStatistics(selected);
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

export default Weather;

// const {userStats} = useTypedSelector(state => state.stats);
// dispatch(updateStats(cityInfo.name));
// updateDataFromStorage(STORAGE.USER_STATS, userStats);
