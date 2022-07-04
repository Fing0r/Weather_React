import { FC, useState } from "react";
import DetailsWeather from "./component/Details/Details";
import NowWeather from "./component/Now/Now";
import ForecastWeather from "./component/Forecast/Forecast";
import TabItem from "../../../../UI/TabItem";
import TabBtn from "../../../../UI/TabBtn";

const TABS = {
    NOW: "Now",
    DETAILS: "Details",
    FORECAST: "Forecast",
};

const InfoWeather: FC = () => {
    const [activeTab, setActiveTab] = useState(TABS.FORECAST);
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

export default InfoWeather;
