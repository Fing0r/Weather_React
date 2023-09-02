import React, { memo, useMemo } from 'react';

import { NavbarItemType } from '../../model/types/NavbarItem';
import { NavbarItem } from '../NavbarItem/NavbarItem';

import cls from './Navbar.module.scss';

const navbarItemsList: NavbarItemType[] = [
  {
    to: '/',
    title: 'Погода',
  },
  {
    to: '/stats',
    title: 'Статистика',
  },
  {
    to: '/help',
    title: 'Помощь',
  },
];

const Navbar = memo(() => {
  const itemsList = useMemo(
    () =>
      navbarItemsList.map((item) => {
        return <NavbarItem {...item} key={item.title} />;
      }),
    [],
  );

  return (
    <nav>
      <ul className={cls.navList}>{itemsList}</ul>
    </nav>
  );
});

export { Navbar };
