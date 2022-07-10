import React from "react";
import { ForecastItem } from "./component";
import { useAppSelector } from "@/hooks/redux";
import { IForecastItem } from "@/types/Weather";
import { selectForecast, selectWeather } from "@/store/selectors";

const ForecastWeather = () => {
    const cityForecast = useAppSelector(selectForecast);
    const { name: cityName } = useAppSelector(selectWeather);
    if (!Object.keys(cityForecast).length) return null;
    const listItem = (forecastList: IForecastItem[]) =>
        forecastList.map((item) => <ForecastItem key={item.date} {...item} />);

    return (
        <div className='forecast'>
            <h3 className='forecast__city'>{cityName}</h3>
            <ul className='forecast__list'>{cityForecast ? listItem(cityForecast) : null}</ul>
        </div>
    );
};

export { ForecastWeather };
