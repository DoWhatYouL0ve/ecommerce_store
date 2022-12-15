import { FormEvent, useState } from 'react'

import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { FaGoogle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { PATH } from '../../../common/routes/PagesRoutes'
import { Card } from '../../../common/styles/Card'
import { StyledButton } from '../../../common/styles/StyledButton'
import { auth } from '../../../firebase/config'
import { StyledAuthCommon } from '../styles/StyledAuthCommon'

import loginImg from './../../../assets/login.png'
import { StyledLogin } from './styles/StyledLogin'

export const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()
  // for logIn with Google account
  const provider = new GoogleAuthProvider()

  const loginUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user

        setIsLoading(false)
        toast.success('Login successful...')
        navigate(PATH.HOME_PAGE)
      })
      .catch(error => {
        setIsLoading(false)

        toast.error(error.message)
      })
  }

  const loginWithGoogle = () => {
    setIsLoading(true)
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user

        setIsLoading(false)
        toast.success('Login successfully with Google account.')
        navigate(PATH.HOME_PAGE)
      })
      .catch(error => {
        setIsLoading(false)
        toast.error(error.message)
      })
  }

  return (
    <>
      <StyledLogin>
        <div className={'container'}>
          <StyledAuthCommon>
            <div className={'img'}>
              <img src={loginImg} alt="login image" width={460} />
            </div>
            <Card>
              <div className={'form'}>
                <h2>Login</h2>
                <form onSubmit={loginUser}>
                  <input
                    type="text"
                    placeholder={'Email'}
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder={'Password'}
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <StyledButton className={'primary'} type={'submit'}>
                    Login
                  </StyledButton>
                  <div className={'links'}>
                    <Link to={PATH.RESET_PASSWORD}>Forgot Password</Link>
                  </div>
                  <p>-- or --</p>
                </form>
                <StyledButton className={'orange'} onClick={loginWithGoogle}>
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
    </>
  )
}
