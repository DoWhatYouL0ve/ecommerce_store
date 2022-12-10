import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { PATH } from '../../../routes/PagesRoutes'

import { StyledCart } from './styles/StyledCart'

export const Cart = () => {
  return (
    <StyledCart>
      <Link to={PATH.CART}>
        Cart
        <FaShoppingCart size={20} />
        <p>0</p>
      </Link>
    </StyledCart>
  )
}
