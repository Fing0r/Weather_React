import { useEffect } from "react";
import { STORAGE } from "@/settings/config";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { FavoriteCitiesItem } from "@/pages/weather/component/favorite-cities/component";
import { updateDataFromStorage } from "@/utils/storageUtils";
import { removeCity, selectedCity } from "@/store/reducers/citiesSlice";
import { selectCities } from "@/store/selectors";

const FavoriteCities = () => {
    const cities = useAppSelector(selectCities);
    const dispatch = useAppDispatch();

    useEffect(() => {
        updateDataFromStorage(STORAGE.FAVORITE_CITIES, cities);
    }, [cities]);

    const getTargetWeather = (city: string) => dispatch(selectedCity(city));
    const deleteFavoriteCity = (city: string) => dispatch(removeCity(city));

    const cityItems = cities.map((item) => (
        <FavoriteCitiesItem
            key={item}
            deleteFavoriteCity={deleteFavoriteCity}
            getTargetWeather={getTargetWeather}
            label={item}
        />
    ));

    return (
        <div className='cities'>
            <h2 className='cities__title'>Added Locations:</h2>
            <ul className='cities__list'>{cityItems}</ul>
        </div>
    );
};

export { FavoriteCities };
