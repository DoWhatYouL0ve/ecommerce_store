import { Link } from 'react-router-dom'

import registrationImg from '../../../assets/register.png'
import { PATH } from '../../../common/routes/PagesRoutes'
import { Card } from '../../../common/styles/Card'
import { StyledButton } from '../../../common/styles/StyledButton'
import { StyledAuthCommon } from '../styles/StyledAuthCommon'

import { StyledRegistration } from './styles/StyledRegistration'

export const Registration = () => {
  return (
    <StyledRegistration>
      <div className={'container'}>
        <StyledAuthCommon>
          <Card>
            <div className={'form'}>
              <h2>Registration</h2>
              <form>
                <input type="text" placeholder={'Email'} required />
                <input type="password" placeholder={'Password'} required />
                <input type="password" placeholder={'Confirm Password'} required />
                <StyledButton className={'primary'}>Register</StyledButton>
              </form>
              <span className={'register'}>
                <p>Already have an account?</p>
                <Link to={PATH.LOGIN}>
                  <b>Login</b>
                </Link>
              </span>
            </div>
          </Card>
          <div className={'img'}>
            <img src={registrationImg} alt="register image" width={500} />
          </div>
        </StyledAuthCommon>
      </div>
    </StyledRegistration>
  )
}
