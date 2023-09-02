import { IStats } from "@/old/types/store";

const getWeatherStatistics = (statistics: IStats) => {
    const variantCount = Object.values(statistics).length;
    const mostViewedCity = Object.entries<number>(statistics).reduce(
        (acc, item) => (acc[1] > item[1] ? acc : item),
        ["default", 0],
    );

    return [variantCount, mostViewedCity[0], mostViewedCity[1]];
};

export { getWeatherStatistics };
