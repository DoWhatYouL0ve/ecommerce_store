import { Link } from 'react-router-dom'

import resetPasswordImg from '../../../assets/forgot.png'
import { PATH } from '../../../common/routes/PagesRoutes'
import { Card } from '../../../common/styles/Card'
import { StyledButton } from '../../../common/styles/StyledButton'
import { StyledAuthCommon } from '../styles/StyledAuthCommon'

import { StyledResetPassword } from './styles/StyledResetPassword'

export const ResetPassword = () => {
  return (
    <StyledResetPassword>
      <div className={'container'}>
        <StyledAuthCommon>
          <div className={'img'}>
            <img src={resetPasswordImg} alt="reset password image" width={500} />
          </div>
          <Card>
            <div className={'form'}>
              <h2>Reset Password</h2>
              <form>
                <input type="text" placeholder={'Email'} required />
                <StyledButton className={'primary'}>Reset Password</StyledButton>
              </form>
              <span className={'register'}>
                <Link to={PATH.LOGIN}>
                  <b>- Login -</b>
                </Link>
                <Link to={PATH.REGISTRATION}>
                  <b>- Register -</b>
                </Link>
              </span>
            </div>
          </Card>
        </StyledAuthCommon>
      </div>
    </StyledResetPassword>
  )
}
