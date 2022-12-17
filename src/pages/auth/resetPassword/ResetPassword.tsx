import { FormEvent, useState } from 'react'

import { sendPasswordResetEmail } from 'firebase/auth'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import resetPasswordImg from '../../../assets/forgot.png'
import { PATH } from '../../../common/routes/PagesRoutes'
import { Card } from '../../../common/styles/Card'
import { StyledButton } from '../../../common/styles/StyledButton'
import { auth } from '../../../firebase/config'
import { setIsLoading } from '../../../redux/slice/authSlice'
import { StyledAuthCommon } from '../styles/StyledAuthCommon'

import { StyledResetPassword } from './styles/StyledResetPassword'

export const ResetPassword = () => {
  const [email, setEmail] = useState<string>('')

  const resetPassword = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading({ isLoading: true })
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsLoading({ isLoading: false })
        toast.success('Please check your email for a reset link')
      })
      .catch(error => {
        setIsLoading({ isLoading: false })
        toast.error(error.message)
      })
  }

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
              <form onSubmit={resetPassword}>
                <input
                  type="text"
                  placeholder={'Email'}
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <StyledButton className={'primary'} type={'submit'}>
                  Reset Password
                </StyledButton>
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
