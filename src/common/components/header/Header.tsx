import { useState } from 'react'

import { FaBars, FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

import { PATH } from '../../routes/PagesRoutes'

import { Cart } from './cart/Cart'
import { Logo } from './logo/Logo'
import { StyledHeader } from './styles/StyledHeader'

export const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const activeLink = ({ isActive }: any) => (isActive ? 'active' : '')

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  const hideMenu = () => {
    setShowMenu(false)
  }

  return (
    <StyledHeader>
      <div className={'header'}>
        <Logo />
        <nav className={showMenu ? 'showNav' : 'hideNav'}>
          <div
            className={showMenu ? 'navWrapper' + ' ' + 'showNavWrapper' : 'navWrapper'}
            onClick={hideMenu}
          />
          <ul onClick={hideMenu}>
            <li className={'logoMobile'}>
              <Logo />
              <FaTimes onClick={hideMenu} size={22} color={'#fff'} />
            </li>
            <li>
              <NavLink to={PATH.HOME_PAGE} className={activeLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={PATH.CONTACT} className={activeLink}>
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className={'headerRight'} onClick={hideMenu}>
            <span className={'links'}>
              <NavLink to={PATH.LOGIN} className={activeLink}>
                Login
              </NavLink>
              <NavLink to={PATH.REGISTRATION} className={activeLink}>
                Register
              </NavLink>
              <NavLink to={PATH.ORDER_HISTORY} className={activeLink}>
                My Orders
              </NavLink>
            </span>
            {showMenu ? (
              <span>
                <Cart />
              </span>
            ) : (
              <Cart />
            )}
          </div>
        </nav>
        <div className={'menuIcon'}>
          <Cart />
          <FaBars size={28} onClick={toggleMenu} />
        </div>
      </div>
    </StyledHeader>
  )
}
