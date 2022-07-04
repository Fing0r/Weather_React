import { useDispatch } from "react-redux";
import fetchCurrentWeather from "@/store/asyncActions/currentWeather";
import fetchForecast from "@/store/asyncActions/forecast";
import { updateWeatherStatistics } from "@/utils/storageUtils";

const useGetWeather = (city: string) => {};

export default useGetWeather;
