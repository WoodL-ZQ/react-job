import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import imgBoss from '../../assets/imgs/boss.png'
import imgAgent from '../../assets/imgs/agent.png'
import imgArtist from '../../assets/imgs/artist.png'

function ChooseRole() {
  // 选择角色
  const [roleID, setRoleID] = useState(1)
  const navigate = useNavigate()
  const RoleList = [
    { name: '经纪公司', img: imgBoss, imgTitle: '老板', des: '发布需求,管理艺人', role: 1 },
    { name: '经纪人', img: imgAgent, imgTitle: '经纪人', des: '合作的中间桥梁', role: 2 },
    { name: '艺人', img: imgArtist, imgTitle: '艺人', des: '我有才能,需求合作公司', role: 3 }
  ]

  const changeRole = (id) => {
    setRoleID(id)
  }
  const sureRoleBtn = () => {
    navigate('/loginPage')
  }

  return (
    <div className="relative h-screen bg-white p-4 py-8">
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        请选择登陆角色
      </Typography>
      <p className="text-xs text-slate-400">请选择相关的角色进行登录，以保证提供更好的服务</p>
      <ul className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9/12 min-h-[50%]">
        {RoleList.map((item) => (
          <li
            className={
              roleID === item.role
                ? 'border border-blue-500/50 shadow-xl shadow-blue-500/50 text-blue-300 drop-shadow-md bg-white rounded-xl p-3 h-24 flex justify-between items-center mb-4'
                : 'drop-shadow-md bg-white rounded-xl p-3 h-24 flex justify-between items-center mb-4'
            }
            key={item.role}
            onClick={() => {
              changeRole(item.role)
            }}
          >
            <img className="w-16" src={item.img} alt={item.imgTitle} />
            <div className="flex-1 px-3">
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {item.name}
              </Typography>
              <p className="text-sm text-slate-300 hover:text-blue-300">{item.des}</p>
            </div>
            <div>
              <ArrowForwardIosIcon color="disabled" fontSize="small" />
            </div>
          </li>
        ))}
        <div className="h-12 bg-blue-500 rounded-2xl text-white flex justify-center items-center font-bold hover:shadow-xl hover:shadow-blue-500/50" onClick={sureRoleBtn}>
          确认角色
        </div>
      </ul>
    </div>
  )
}

export default ChooseRole
