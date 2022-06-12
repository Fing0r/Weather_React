import {getTime} from "../../../utils";
import {ICityWeather} from "../../types/Weather";
import Title from "../../UI/Title";

function DetailsWeather({cityInfo}: { cityInfo: ICityWeather | null }) {
    if (!cityInfo) return null
    const {temp, feelsLike, main, sunrise, sunset, name} = cityInfo;
    const isNotValid = !temp || !feelsLike || !main || !sunrise || !sunset || !name;
    if (isNotValid) return null;

    return (
        <div className="details">
            <Title hLevel="3" title={name} className="details__city"/>
            <div className="details__info">
                <span className="details__temperature">{`Temperature: ${Math.round(temp)}°`}</span>
                <span className="details__feels">{`Feels like: ${Math.round(feelsLike)}°`}</span>
                <span className="details__weather">{`Weather: ${main}`}</span>
                <span className="details__sunrise">{`Sunrise: ${getTime(sunrise)}`}</span>
                <span className="details__sunset">{`Sunset: ${getTime(sunset)}`}</span>
            </div>
        </div>
    )
}

export default DetailsWeather
