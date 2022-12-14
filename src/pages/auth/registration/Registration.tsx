import { FormEvent, useState } from 'react'

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import registrationImg from '../../../assets/register.png'
import { PATH } from '../../../common/routes/PagesRoutes'
import { Card } from '../../../common/styles/Card'
import { StyledButton } from '../../../common/styles/StyledButton'
import { auth } from '../../../firebase/config'
import { StyledAuthCommon } from '../styles/StyledAuthCommon'

import { StyledRegistration } from './styles/StyledRegistration'

import 'react-toastify/dist/ReactToastify.css'

export const Registration = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const registerUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      toast.error('Password do not match')
    }
    if (password.length < 6) {
      toast.error('Password should be at least 6 characters')
    }
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user

        // ...
        console.log(user)
        setIsLoading(false)
        toast.success('Registration successful')
        navigate(PATH.LOGIN)
      })
      .catch(error => {
        setIsLoading(false)

        toast.error(error.message)
      })
  }

  return (
    <>
      <StyledRegistration>
        <div className={'container'}>
          <StyledAuthCommon>
            <Card>
              <div className={'form'}>
                <h2>Registration</h2>
                <form onSubmit={registerUser}>
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
                  <input
                    type="password"
                    placeholder={'Confirm Password'}
                    required
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                  />
                  <StyledButton type={'submit'} className={'primary'} disabled={isLoading}>
                    Register
                  </StyledButton>
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
      <ToastContainer position="bottom-right" />
    </>
  )
}
