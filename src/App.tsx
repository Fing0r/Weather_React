import React, { FC } from "react";
import "./style/App.css";
import { Routes, Route } from "react-router-dom";
import Weather from "./pages/Weather/Weather";
import WeatherHelp from "./pages/Help";
import WeatherStats from "./pages/Stats";
import Layout from "@/UI/Layout";

const App: FC = () => (
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Weather />} />
            <Route path='/stats' element={<WeatherStats />} />
            <Route path='/help' element={<WeatherHelp />} />
        </Route>
    </Routes>
);

export default App;
