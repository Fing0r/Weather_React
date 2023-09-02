import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  favoriteCitiesReducer,
  currentWeatherReducer,
  forecastReducer,
} from '@/features/Weather';
import { statsReducer } from '@/pages/StatisticPage';

const statsPersistConfig = {
  key: 'stats',
  storage,
  whitelist: ['userStats'],
};

const citiesPersistConfig = {
  key: 'cities',
  storage,
};

const weatherApp = combineReducers({
  favoriteCities: persistReducer(citiesPersistConfig, favoriteCitiesReducer),
  stats: persistReducer(statsPersistConfig, statsReducer),
  currentWeather: currentWeatherReducer,
  forecast: forecastReducer,
});

export default weatherApp;
