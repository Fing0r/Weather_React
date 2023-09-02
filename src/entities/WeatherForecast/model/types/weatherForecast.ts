export interface WeatherForecast {
  date: number;
  temp?: number;
  feelsLike?: number;
  main?: string;
  icon?: string;
}

export interface WeatherForecastData {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
  };
  weather: {
    0: {
      main: string;
      icon: string;
    };
  };
}

export interface WeatherForecastDataList {
  list: WeatherForecastData[];
}
