import React, { FC } from 'react';

import cls from './HelpPage.module.scss';

import { AppLink } from '@/shared/ui/AppLink';

const HelpPage: FC = () => (
  <div className="container">
    <h1 className={cls.title}>Это приложение погоды.</h1>
    <hr />
    <p>
      Для получения прогноза, введите на странице{' '}
      <AppLink title="Погода" to="/" /> в поиск интересующий вас город.
    </p>
    <br />
    <p>
      Чтобы посмотреть статистику перейдите на страницу{' '}
      <AppLink title="Статистика." to="/stats" />
    </p>
    <hr />
  </div>
);

export { HelpPage };
