import React from "react";
import { STORAGE } from "@/settings/config";
import { getDataFromStorage } from "@/utils/storageUtils";

function getWeatherStatistics() {
    const statistics = { ...getDataFromStorage(STORAGE.USER_STATS) };
    const variantCount = Object.values(statistics).length;
    const mostViewedCity = Object.entries<number>(statistics).reduce(
        (acc, item) => (acc[1] > item[1] ? acc : item),
        ["default", 0],
    );

    return [variantCount, mostViewedCity[0], mostViewedCity[1]];
}

const WeatherStats = () => {
    const [variantCount, cityName, count] = getWeatherStatistics();

    return (
        <div>
            <div className='container'>
                <h1>Статистика</h1>
                <hr />
                <div>
                    <div>
                        Самый просматриваемый город:
                        <span>{variantCount && cityName}</span>
                    </div>
                    <div>
                        Число просмотров:
                        <span>{variantCount && count}</span>
                    </div>
                    <div>
                        Общее число запросов:
                        <span>{variantCount && variantCount}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherStats;
