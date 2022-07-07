import React from 'react'
import { ChannelList,useChatContext } from 'stream-chat-react';
import { ChannelSearch,TeamChannelList,TeamChannelPreview } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import LogoutIcon from '../assets/logout.png'
import HospitalIcon from '../assets/hospital.png'
const Sidebar =() => (
    <div className='channel-list__sidebar'>
        <div className='channel-list__sidebar-icon1'>
            <div className='icon1__inner'>
                <img src={HospitalIcon} alt='Hospital' width="30" />
            </div>
        </div>
        <div className='channel-list__sidebar-icon2'>
            <div className='icon1__inner'>
                <img src={LogoutIcon} alt='Logout' width="30" />
            </div>
        </div>
    </div>
)
const ChannelListContainer = () => {
  return (
    <>
        <Sidebar />
    </>
  )
}

export default ChannelListContainer