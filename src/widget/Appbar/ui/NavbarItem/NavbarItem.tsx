import React, { memo, useCallback } from 'react';
import { NavLink } from 'react-router-dom';

import cls from './NavbarItem.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { NavbarItemType } from '@/widget/Appbar/model/types/NavbarItem';

interface NavbarItemProps extends NavbarItemType {}

const NavbarItem = memo((props: NavbarItemProps) => {
  const { to, title } = props;

  const setClassname = useCallback(
    ({ isActive }: { isActive: boolean }) =>
      classNames(cls.navLink, {
        [cls.active]: isActive,
      }),
    [],
  );

  return (
    <li>
      <NavLink to={to} className={setClassname}>
        {title}
      </NavLink>
    </li>
  );
});

export { NavbarItem };
