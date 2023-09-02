import React from 'react'
import { RouteProps } from 'react-router-dom'

import { HelpPage } from '@/pages/HelpPage'
import { MainPage } from '@/pages/MainPage'
import { StatisticPage } from '@/pages/StatisticPage'
import { AppRouter } from '@/shared/types/router'

export const routerConfig: Record<AppRouter, RouteProps> = {
  main: {
    path: '/',
    element: <MainPage/>
  },
  statistic: {
    path: '/statistic',
    element: <StatisticPage/>
  },
  help: {
    path: '/help',
    element: <HelpPage/>
  },
}
