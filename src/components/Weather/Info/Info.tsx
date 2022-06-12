import DetailsWeather from "../Details/Details";
import NowWeather from "../Now/Now";
import ForecastWeather from "../Forecast/Forecast";
import {useState} from "react";
import TabItem from "./TabItem";
import TabBtn from "./TabBtn";
import {IInfoWeather} from "../../types/Weather";

function InfoWeather({cityInfo, setFavoriteCities, cityForecast}: IInfoWeather) {
    const [activeTab, setActiveTab] = useState("1")
    const handleChangeTab = (index: string) => setActiveTab(index);

    const cityName = cityInfo?.name

    return (
        <div className="info">
            <TabItem tabItem="1" activeTab={activeTab}>
                <NowWeather
                    cityInfo={cityInfo}
                    setFavoriteCity={setFavoriteCities}
                />
            </TabItem>
            <TabItem tabItem="2" activeTab={activeTab}>
                <DetailsWeather
                    cityInfo={cityInfo}
                />
            </TabItem>
            <TabItem tabItem="3" activeTab={activeTab}>
                <ForecastWeather
                    cityForecast={cityForecast}
                    cityName={cityName}
                />
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
