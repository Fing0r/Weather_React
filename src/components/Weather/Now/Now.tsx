import {removeFavoriteCity, addFavoriteCity} from "../../../utils";
import {INowWeather} from "../../types/Weather";
import ButtonToggleFavorite from "./ButtonToggleFavorite";
import {FavoriteCitiesContext} from "../Weather";


function NowWeather({cityInfo, setFavoriteCity}: INowWeather) {
    if (!cityInfo) return null;
    const {temp, icon, name} = cityInfo;

    const isNotValid = !temp || !icon || !name;
    if (isNotValid) return null;

    const temperature = `${Math.round(temp)}°`;
    const img = `https://openweathermap.org/img/wn/${icon}@4x.png`;

    const toggleFavoriteCity = () => {
        setFavoriteCity((prv) => prv.has(name) ? removeFavoriteCity(prv, name) : addFavoriteCity(prv, name));
    }

    return (
        <FavoriteCitiesContext.Consumer>
            {(checkFavoriteCities) => (
                <div className="now">
                    <span className="now__temp">{temperature}</span>
                    <img className="now__img" alt="" width="78" height="59"
                         src={img}/>
                    <div className="now__bottom">
                        <h3 className="now__city">{name}</h3>
                        <ButtonToggleFavorite
                            isFavorite={checkFavoriteCities(name)}
                            onClick={toggleFavoriteCity}
                        />
                    </div>
                </div>
            )}
        </FavoriteCitiesContext.Consumer>
    )
}

export default NowWeather
