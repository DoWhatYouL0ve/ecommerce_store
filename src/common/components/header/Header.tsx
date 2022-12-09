import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { PATH } from '../../routes/PagesRoutes'

import { StyledHeader } from './styles/StyledHeader'

export const Header = () => {
  return (
    <StyledHeader>
      <div className={'header'}>
        <div className={'logo'}>
          <Link to={PATH.HOME_PAGE}>
            <h2>
              e <span>Shop</span>.
            </h2>
          </Link>
        </div>
        <nav>
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
            <span className={'cart'}>
              <Link to={PATH.CART}>
                Cart
                <FaShoppingCart size={20} />
                <p>0</p>
              </Link>
            </span>
          </div>
        </nav>
      </div>
    </StyledHeader>
  )
}
