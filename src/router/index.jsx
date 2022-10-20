import React from 'react'
import LoginPage from '../pages/Login/loginPage'
import ChooseRole from '../pages/Login/chooseRole'

const routes = [
  {
    path: '/',
    element: <ChooseRole />
  },
  {
    path: '/loginPage',
    element: <LoginPage />
  }
]

export default routes
