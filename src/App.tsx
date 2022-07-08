import React, { FC } from "react";
import "./style/App.css";
import { Routes, Route } from "react-router-dom";
import { Weather } from "./pages/weather";
import { WeatherHelp } from "./pages/help";
import { WeatherStats } from "./pages/stats";
import Layout from "@/ui/layout";

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
