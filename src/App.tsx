import React, {FC} from 'react';
import './style/App.css';
import Weather from "./components/Weather/Weather";
import {Routes, Route} from "react-router-dom"
import WeatherHelp from "./components/Weather/Help";
import WeatherStats from "./components/Weather/Stats";
import WeatherHeader from "./components/Header";
import Layout from "@/components/Layout";

const App: FC = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Weather/>}/>
                    <Route path="/stats" element={<WeatherStats/>}/>
                    <Route path="/help" element={<WeatherHelp/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
