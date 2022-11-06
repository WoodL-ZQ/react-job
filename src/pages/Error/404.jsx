import React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button'
import NotFount from '../../assets/imgs/404.png'

function ErrorPage() {
  const navigate = useNavigate()

  const toChooseRole = () => {
    navigate('/')
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <img src={NotFount} alt="空白页" />
      <div className="flex justify-center mt-4">
        <Button variant="outlined" onClick={toChooseRole}>
          回到角色选择页面
        </Button>
      </div>
    </div>
  )
}

export default ErrorPage
