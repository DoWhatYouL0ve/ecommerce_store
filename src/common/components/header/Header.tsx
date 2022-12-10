import { useState } from 'react'

import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { PATH } from '../../routes/PagesRoutes'

import { Cart } from './cart/Cart'
import { Logo } from './logo/Logo'
import { StyledHeader } from './styles/StyledHeader'

export const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)

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
        <nav>
          <div>
            <ul>
              <li>
                <Link to={PATH.HOME_PAGE}>Home</Link>
              </li>
              <li>
                <Link to={PATH.CONTACT}>Contact Us</Link>
              </li>
            </ul>
            <div className={'headerRight'}>
              <span className={'links'}>
                <Link to={PATH.LOGIN}>Login</Link>
                <Link to={PATH.REGISTRATION}>Register</Link>
                <Link to={PATH.ORDER_HISTORY}>My Orders</Link>
              </span>
              <Cart />
            </div>
          </div>
        </nav>
        <div className={'menuIcon'}>
          <Cart />
          <FaBars size={28} />
        </div>
      </div>
    </StyledHeader>
  )
}
