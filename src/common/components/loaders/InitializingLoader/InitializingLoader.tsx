import loaderImg from '../../../../assets/loader.gif'

import { StyledInitializingLoader } from './styles/StyledInitializingLoader'

export const InitializingLoader = () => {
  return (
    <StyledInitializingLoader>
      <div className={'loader'}>
        <img src={loaderImg} alt="Loading..." />
      </div>
    </StyledInitializingLoader>
  )
}
