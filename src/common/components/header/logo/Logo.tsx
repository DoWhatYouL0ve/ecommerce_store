import { Link } from 'react-router-dom'

import { PATH } from '../../../routes/PagesRoutes'

import { StyledLogo } from './styles/StyledLogo'

export const Logo = () => {
  return (
    <StyledLogo>
      <Link to={PATH.HOME_PAGE}>
        <h2>
          e <span>Store</span>.
        </h2>
      </Link>
    </StyledLogo>
  )
}
