import ForecastItem from "./ForecastItem";
import {IForecastWeather} from "../../types/Weather";
import {ForecastItemContext} from "../Weather";

function ForecastWeather({cityName}: IForecastWeather) {
    const listItem = (forecastList) =>  [...forecastList].map((item) => <ForecastItem key={item.date} cityForecast={item}/>)

    return (
        <ForecastItemContext.Consumer>
            {(cityForecast) => (
                <div className="forecast">
                    <h3 className="forecast__city">{cityName}</h3>
                    <ul className="forecast__list">
                        {cityForecast ? listItem(cityForecast) : null}
                    </ul>
                </div>
            )}
        </ForecastItemContext.Consumer>
    )
}

export default ForecastWeather
