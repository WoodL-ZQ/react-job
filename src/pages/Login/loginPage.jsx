import React from 'react'
import Typography from '@mui/material/Typography'

function LoginPage() {
  return (
    <div className="h-screen bg-white p-4 py-8">
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        手机快捷登录
      </Typography>
      <p className="text-xs text-slate-400">未注册用户将直接注册成为新用户</p>
    </div>
  )
}
export default LoginPage
