import { NavLink } from "react-router-dom";
import React, { FC } from "react";

const WeatherHeader: FC = () => {
    const setActive = ({ isActive }: { isActive: boolean }) =>
        isActive ? "nav__link nav__link--active" : "nav__link";

    return (
        <header className='header'>
            <div className='container'>
                <nav className='header__nav nav'>
                    <ul className='nav__list'>
                        <li className='nav__item'>
                            <NavLink to='/' className={setActive}>
                                Погода
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/stats' className={setActive}>
                                Статистика
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/help' className={setActive}>
                                Помощь
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default WeatherHeader;
