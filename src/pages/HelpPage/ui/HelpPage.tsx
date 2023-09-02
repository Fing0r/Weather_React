import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./HelpPage.scss";

const HelpPage: FC = () => (
  <div className='container'>
    <h1 className='title'>Это приложение погоды.</h1>
    <hr/>
    <p>
      Для получения прогноза, введите на странице
      <Link to='/' className='link'>
        Погода
      </Link>
      в поиск интересующий вас город.
    </p>
    <br/>
    <p>
      Чтобы посмотреть статистику перейдите на страницу
      <Link to='/stats' className='link'>
        Статистика.
      </Link>
    </p>
    <hr/>
  </div>
);

export { HelpPage };
