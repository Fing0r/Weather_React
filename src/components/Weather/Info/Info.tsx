import DetailsWeather from "../Details/Details";
import NowWeather from "../Now/Now";
import ForecastWeather from "../Forecast/Forecast";
import {FC, useState} from "react";
import TabItem from "./TabItem";
import TabBtn from "./TabBtn";

const InfoWeather: FC = () => {
    const [activeTab, setActiveTab] = useState("1")
    const handleChangeTab = (index: string) => setActiveTab(index);

    return (
        <div className="info">
            <TabItem tabItem="1" activeTab={activeTab}>
                <NowWeather/>
            </TabItem>
            <TabItem tabItem="2" activeTab={activeTab}>
                <DetailsWeather/>
            </TabItem>
            <TabItem tabItem="3" activeTab={activeTab}>
                <ForecastWeather/>
            </TabItem>
            <div className="info__btns">
                <TabBtn
                    tabBtn="1"
                    handleChangeTab={handleChangeTab}
                    activeTab={activeTab}
                    label="Now"
                />
                <TabBtn
                    tabBtn="2"
                    handleChangeTab={handleChangeTab}
                    activeTab={activeTab}
                    label="Details"
                />
                <TabBtn
                    tabBtn="3"
                    handleChangeTab={handleChangeTab}
                    activeTab={activeTab}
                    label="Forecast"
                />
            </div>
        </div>
    )
}

export default InfoWeather
