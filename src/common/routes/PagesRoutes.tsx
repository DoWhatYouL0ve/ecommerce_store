import { Route, Routes } from 'react-router-dom'

import { Home, Contact, Admin, Cart, OrderHistory, Registration, Login, ResetPassword } from 'pages'

export enum PATH {
  HOME_PAGE = '/',
  CONTACT = '/contact',
  ADMIN = '/admin',
  CART = '/cart',
  ORDER_HISTORY = '/order-history',
  REGISTRATION = '/registration',
  LOGIN = '/login',
  RESET_PASSWORD = '/reset-password',
}

export const PagesRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={PATH.CONTACT} element={<Contact />} />
        <Route path={PATH.ADMIN} element={<Admin />} />
        <Route path={PATH.CART} element={<Cart />} />
        <Route path={PATH.ORDER_HISTORY} element={<OrderHistory />} />
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.REGISTRATION} element={<Registration />} />
        <Route path={PATH.RESET_PASSWORD} element={<ResetPassword />} />
      </Routes>
    </>
  )
}
