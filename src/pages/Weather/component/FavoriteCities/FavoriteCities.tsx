import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { STORAGE } from "@/settings/config";
import useTypedSelector from "@/hooks/redux";
import FavoriteCitiesItem from "@/pages/Weather/component/FavoriteCities/component/FavoriteCitiesItem";
import { updateDataFromStorage } from "@/utils/storageUtils";
import { removeCity, selectedCity } from "@/store/actions/citiesActions";

const FavoriteCities = () => {
    const { cities } = useTypedSelector((state) => state.cities);
    const dispatch = useDispatch();

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

export default FavoriteCities;
