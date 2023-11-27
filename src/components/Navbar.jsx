import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import Logo from '../assets/cryptocurrency.png';
import { HomeOutLined, MoneyCollectOutFilled, BuildOutlined, FundOutlined} from '@ant-design/icons'


const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={Logo} size='large'/>
            <Typography.Title level={2} className='logo'>
                <Link to='/'>Cryptopia</Link>
            </Typography.Title>
        </div>
      
    </div>
  )
}

export default Navbar
