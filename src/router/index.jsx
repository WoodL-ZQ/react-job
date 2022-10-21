import React from 'react'
import LoginPage from '../pages/Login/loginPage'
import ChooseRole from '../pages/Login/chooseRole'
import ErrorPage from '../pages/Error/404'

const routes = [
  {
    path: '/',
    element: <ChooseRole />
  },
  {
    path: '/loginPage',
    element: <LoginPage />
  },
  {
    path: '*',
    element: <ErrorPage />
  }
]

export default routes
