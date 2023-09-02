import React, { useMemo } from 'react';

import { ForecastWeather } from '../ForecastWeather/ForecastWeather';
import { WeatherCurrentContainer } from '../WeatherCurrentContainer/WeatherCurrentContainer';
import { WeatherDetailContainer } from '../WeatherDetailContainer/WeatherDetailContainer';

import { Tab, Tabs } from '@/shared/ui/Tabs';

type TabsType = 'now' | 'details' | 'forecast';

const TABS: StringKeyMap<TabsType> = {
  NOW: 'now',
  DETAILS: 'details',
  FORECAST: 'forecast',
} as const;

interface TabItem {
  title: ValueOf<typeof TABS>;
  component: React.ReactNode;
}

interface WeatherInfoProps {}

const WeatherInfo = (props: WeatherInfoProps) => {
  const tabs = useMemo<TabItem[]>(
    () => [
      {
        title: TABS.NOW,
        component: <WeatherCurrentContainer />,
      },
      {
        title: TABS.DETAILS,
        component: <WeatherDetailContainer />,
      },
      {
        title: TABS.FORECAST,
        component: <ForecastWeather />,
      },
    ],
    [],
  );

  return (
    <Tabs isReverse>
      {tabs.map(({ title, component }) => (
        <Tab key={title} title={title}>
          {component}
        </Tab>
      ))}
    </Tabs>
  );
};

export { WeatherInfo };
