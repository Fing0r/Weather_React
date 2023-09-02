export interface WeatherCurrent {
  date?: number;
  feelsLike?: number;
  temp?: number;
  sunrise?: number;
  sunset?: number;
  main?: string;
  icon?: string;
  name?: string;
}

export interface WeatherData {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
  };
  name: string;
  weather: {
    0: {
      main: string;
      icon: string;
    };
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
}
