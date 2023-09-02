import React, { memo, useCallback } from 'react'
import { NavLink } from 'react-router-dom'

import { classNames } from '@/shared/lib/classNames/classNames'
import { NavbarItemType } from '@/widget/Appbar/model/types/NavbarItem'

interface NavbarItemProps extends NavbarItemType {}

const NavbarItem = memo((props: NavbarItemProps) => {
  const { to, title } = props

  const setClassname = useCallback(({ isActive }: { isActive: boolean }) => classNames('nav__link', {
    active: isActive
  }), [])

  return (
    <li className='nav__item'>
      <NavLink to={to} className={setClassname}>
        {title}
      </NavLink>
    </li>
  )
})

export { NavbarItem }
