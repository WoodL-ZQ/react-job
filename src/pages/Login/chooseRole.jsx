import React from 'react'
import Typography from '@mui/material/Typography'

function ChooseRole() {
  return (
    <div className="relative h-screen bg-slate-50 p-4 py-8">
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        请选择登陆角色
      </Typography>
      <p className="text-xs text-slate-400">请选择相关的角色进行登录，以保证提供更好的服务</p>
      <ul className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9/12 min-h-[50%]">
        <li className="shadow-none hover:shadow-2xl bg-white shadow-cyan-500/50">11</li>
      </ul>
    </div>
  )
}
export default ChooseRole
