import {removeFavoriteCity} from "../../../utils";
import {IFavoriteCities} from "../../types/Weather";
import Button from "../../UI/Button";


function FavoriteCities({favoriteCities, setFavoriteCities, setSelectedCity}: IFavoriteCities) {
    const getTargetWeather = (city: string) => {
        setSelectedCity(city)
    }

    const deleteFavoriteCity = (city: string | null) => {
        setFavoriteCities(prv => removeFavoriteCity(prv, city))
    }

    const cityItem = [...favoriteCities].map((item) => {
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
