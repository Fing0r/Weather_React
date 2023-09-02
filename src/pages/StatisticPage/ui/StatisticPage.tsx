import { FC } from "react";

import { selectStats } from "@/pages/StatisticPage/model/selectors/selectors";
import { getWeatherStatistics } from "@/pages/StatisticPage/ui/utils";
import { useAppSelector } from "@/shared/lib/hooks/redux";

const StatisticPage: FC = () => {
    const stats = useAppSelector(selectStats);
    const [variantCount, cityName, count] = getWeatherStatistics(stats);

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

export { StatisticPage };
