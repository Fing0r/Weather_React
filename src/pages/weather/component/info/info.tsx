import { FC, useState } from "react";
import { DetailsWeather } from "./component/details";
import { NowWeather } from "./component/now";
import { ForecastWeather } from "./component/forecast";
import TabItem from "@/ui/tab-item";
import TabBtn from "@/ui/tab-btn";

const TABS = {
    NOW: "now",
    DETAILS: "details",
    FORECAST: "forecast",
};

const InfoWeather: FC = () => {
    const [activeTab, setActiveTab] = useState(TABS.NOW);
    const handleChangeTab = (tab: string) => setActiveTab(tab);

    return (
        <div className='info'>
            <TabItem tab={TABS.NOW} activeTab={activeTab}>
                <NowWeather />
            </TabItem>
            <TabItem tab={TABS.DETAILS} activeTab={activeTab}>
                <DetailsWeather />
            </TabItem>
            <TabItem tab={TABS.FORECAST} activeTab={activeTab}>
                <ForecastWeather />
            </TabItem>
            <div className='info__btns'>
                <TabBtn handleChangeTab={handleChangeTab} activeTab={activeTab} label={TABS.NOW} />
                <TabBtn
                    handleChangeTab={handleChangeTab}
                    activeTab={activeTab}
                    label={TABS.DETAILS}
                />
                <TabBtn
                    handleChangeTab={handleChangeTab}
                    activeTab={activeTab}
                    label={TABS.FORECAST}
                />
            </div>
        </div>
    );
};

export { InfoWeather };
