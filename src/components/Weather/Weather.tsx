import CitySearchForm from "./Search/Form";
import FavoriteCities from "./FavoriteCities/FavoriteCities";
import InfoWeather from "./Info/Info";
import {createContext, useEffect, useState} from "react";
import {getDataFromStorage, updateDataFromStorage} from "../../utils";
import {STORAGE} from "../../config";
import {ICityWeather, ICityForecast} from "../types/Weather";
import {getCurrentWeather, getForecast} from "../../API";

const cities = getDataFromStorage(STORAGE.FAVORITE_CITIES);
const citySelected = getDataFromStorage(STORAGE.SELECTED_CITY);

export const ForecastItemContext = createContext<ICityForecast[] | null>(null)
export const FavoriteCitiesContext = createContext<any>(null)

export default function Weather() {
    const [cityInfo, setCityInfo] = useState<null | ICityWeather>(null);
    const [cityForecast, setCityForecast] = useState<null | ICityForecast[]>(null);
    const [favoriteCities, setFavoriteCities] = useState<Set<string>>(new Set());
    const [selectedCity, setSelectedCity] = useState<string>("");

    useEffect(() => {
        setSelectedCity(citySelected)
    }, [])

    useEffect(() => {
        setFavoriteCities(new Set([...cities]))
    }, [])

    useEffect(() => {
        updateDataFromStorage(STORAGE.SELECTED_CITY, selectedCity);
        (async () => await getActualWeather(selectedCity))()
    }, [selectedCity])

    useEffect(() => {
        console.log(favoriteCities)
        updateDataFromStorage(STORAGE.FAVORITE_CITIES, [...favoriteCities])
    }, [favoriteCities])


    async function getActualWeather(city: string) {
        try {
            const cityInfo = await getCurrentWeather(city);
            const cityForecast = await getForecast(city);
            setCityInfo(cityInfo);
            setCityForecast(cityForecast);
        } catch (e) {
            setSelectedCity("")
            console.error(e)
        }
    }

    const checkFavoriteCities = (name: string) => [...favoriteCities].includes(name);

    return (
        <ForecastItemContext.Provider value={cityForecast}>
            <FavoriteCitiesContext.Provider value={checkFavoriteCities}>
                <div className="weather">
                    <div className="weather__list">
                        <div className="weather__item weather__item--search">
                            <CitySearchForm
                                setSelectedCity={setSelectedCity}
                            />
                        </div>
                        <div className="weather__item weather__item--info">
                            <InfoWeather
                                cityInfo={cityInfo}
                                setFavoriteCities={setFavoriteCities}
                                cityForecast={cityForecast}/>
                        </div>
                        <div className="weather__item weather__item--cities">
                            <FavoriteCities
                                favoriteCities={favoriteCities}
                                setFavoriteCities={setFavoriteCities}
                                setSelectedCity={setSelectedCity}
                            />
                        </div>
                    </div>
                </div>
            </FavoriteCitiesContext.Provider>
        </ForecastItemContext.Provider>
    )
}

