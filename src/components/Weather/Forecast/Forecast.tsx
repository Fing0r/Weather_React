import ForecastItem from "./ForecastItem";
import {useTypedSelector} from "@/hooks/redux";
import {IForecastItem} from "../../types/Weather";

const ForecastWeather = () => {
    const {forecast: cityForecast } = useTypedSelector(state => state.weather);
    const {name: cityName} = useTypedSelector(state => state.weather.weather)
    if (!Object.keys(cityForecast).length) return null;
    console.log(cityForecast)
    const listItem = (forecastList: IForecastItem[]) => forecastList.map((item) =>
            (<ForecastItem key={item.date} {...item}/>)
    )

    return (
        <div className="forecast">
            <h3 className="forecast__city">{cityName}</h3>
            <ul className="forecast__list">
                {cityForecast ? listItem(cityForecast) : null}
            </ul>
        </div>
    )
}

export default ForecastWeather
