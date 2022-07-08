import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { CitySearchForm } from "./component/search";
import { FavoriteCities } from "./component/favorite-cities";
import { InfoWeather } from "./component/info";
import { updateDataFromStorage } from "@/utils/storageUtils";
import fetchCurrentWeather from "@/store/asyncActions/currentWeather";
import fetchForecast from "@/store/asyncActions/forecast";
import { selectSelected } from "@/store/selectors";
import { STORAGE } from "@/settings/config";

const Weather: FC = () => {
    const selected = useAppSelector(selectSelected);
    const dispatch = useAppDispatch();

    useEffect(() => {
        updateDataFromStorage(STORAGE.SELECTED_CITY, selected);
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

// const {userStats} = useTypedSelector(state => state.stats);
// dispatch(updateStats(cityInfo.name));
// updateDataFromStorage(STORAGE.USER_STATS, userStats);
