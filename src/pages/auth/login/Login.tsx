import { FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { PATH } from '../../../common/routes/PagesRoutes'
import { Card } from '../../../common/styles/Card'
import { StyledButton } from '../../../common/styles/StyledButton'
import { StyledAuthCommon } from '../styles/StyledAuthCommon'

import loginImg from './../../../assets/login.png'
import { StyledLogin } from './styles/StyledLogin'

export const Login = () => {
  return (
    <StyledLogin>
      <div className={'container'}>
        <StyledAuthCommon>
          <div className={'img'}>
            <img src={loginImg} alt="login image" width={460} />
          </div>
          <Card>
            <div className={'form'}>
              <h2>Login</h2>
              <form>
                <input type="text" placeholder={'Email'} required />
                <input type="password" placeholder={'Password'} required />
                <StyledButton className={'primary'}>Login</StyledButton>
                <div className={'links'}>
                  <Link to={PATH.RESET_PASSWORD}>Forgot Password</Link>
                </div>
                <p>-- or --</p>
              </form>
              <StyledButton className={'orange'}>
                <FaGoogle color={'#fff'} style={{ marginRight: '5px' }} size={22} />
                Login With Google
              </StyledButton>
              <span className={'register'}>
                <p>Don&apos;t have an account?</p>
                <Link to={PATH.REGISTRATION}>
                  <b>Register</b>
                </Link>
              </span>
            </div>
          </Card>
        </StyledAuthCommon>
      </div>
    </StyledLogin>
  )
}
