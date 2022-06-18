import CitySearchForm from "./Search/Form";
import FavoriteCities from "./FavoriteCities/FavoriteCities";
import InfoWeather from "./Info/Info";
import {FC, useEffect} from "react";
import {updateDataFromStorage, updateWeatherStatistics} from "@/utils";
import {STORAGE} from "@/config";
import {getCurrentWeather, getForecast} from "@/API";
import {useDispatch} from "react-redux";
import {selectedCity, setForecast, setWeather} from "@/store/actionsCreators";
import {useTypedSelector} from "@/hooks/redux";

 const Weather: FC = () => {
    const dispatch = useDispatch();
    const {selected} = useTypedSelector(state => state.cities);

    useEffect(() => {
        updateDataFromStorage(STORAGE.SELECTED_CITY, selected);
        if (!selected) return;
        (async () => await getActualWeather(selected))();
    }, [selected])

    async function getActualWeather(city: string) {
        try {
            const cityInfo = await getCurrentWeather(city);
            const cityForecast = await getForecast(city);
            dispatch(setWeather(cityInfo));
            dispatch(setForecast(cityForecast));

            updateWeatherStatistics(cityInfo.name);
        } catch (e) {
            dispatch(selectedCity(""));
            console.error(e)
        }
    }

    return (
        <div className="weather">
            <div className="weather__list">
                <div className="weather__item weather__item--search">
                    <CitySearchForm/>
                </div>
                <div className="weather__item weather__item--info">
                    <InfoWeather/>
                </div>
                <div className="weather__item weather__item--cities">
                    <FavoriteCities/>
                </div>
            </div>
        </div>
    )
}

export default Weather;

// const {userStats} = useTypedSelector(state => state.stats);
// dispatch(updateStats(cityInfo.name));
// updateDataFromStorage(STORAGE.USER_STATS, userStats);
