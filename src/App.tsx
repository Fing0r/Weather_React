import React, {FC} from 'react';
import './style/App.css';
import Weather from "./components/Weather/Weather";
import {Routes, Route} from "react-router-dom"
import WeatherHelp from "./components/Weather/Help";
import WeatherStats from "./components/Weather/Stats";
import WeatherHeader from "./components/Weather/Header";

const App: FC = () => {

    return (
        <>
            <WeatherHeader/>
            <Routes>
                <Route path="/" element={<Weather/>}/>
                <Route path="/stats" element={<WeatherStats/>}/>
                <Route path="/help" element={<WeatherHelp/>}/>
            </Routes>
        </>
    );
}

export default App;
