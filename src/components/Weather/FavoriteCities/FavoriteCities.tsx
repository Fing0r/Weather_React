import {updateDataFromStorage} from "@/utils";
import Button from "../../UI/Button";
import {useDispatch} from "react-redux";
import {removeCity, selectedCity} from "@/store/actionsCreators";
import {useEffect} from "react";
import {STORAGE} from "@/config";
import {useTypedSelector} from "@/hooks/redux";

const FavoriteCities = () => {
    const {cities} = useTypedSelector(state => state.cities)
    const dispatch = useDispatch();

    useEffect(() => {
        updateDataFromStorage(STORAGE.FAVORITE_CITIES, cities)
    }, [cities])

    const getTargetWeather = (city: string) => {
        dispatch(selectedCity(city));
    }

    const deleteFavoriteCity = (city: string) => dispatch(removeCity(city))

    const cityItem = cities.map((item) => {
        return (
            <li className="cities__item" key={item}>
                <Button
                    className="cities__name"
                    type="button"
                    onClick={() => getTargetWeather(item)}
                    label={item}
                >
                </Button>
                <Button
                    className="cities__close"
                    type="button"
                    onClick={() => deleteFavoriteCity(item)}
                />
            </li>
        )
    })

    return (
        <div className="cities">
            <h2 className="cities__title">Added Locations:</h2>
            <ul className="cities__list">
                {cityItem}
            </ul>
        </div>
    )
}

export default FavoriteCities
