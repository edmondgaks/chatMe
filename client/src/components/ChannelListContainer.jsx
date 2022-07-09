import React from 'react'
import { ChannelList,useChatContext } from 'stream-chat-react';
import { ChannelSearch,TeamChannelList,TeamChannelPreview } from './';
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
);
const CompanyHeader = () => (
    <div className='channel-list__header'>
        <p className='channel-list__header__text'>Medical Pager</p>
    </div>
)
const ChannelListContainer = () => {
  return (
    <>
        <Sidebar />
        <div className='channel-list__list__wrapper'>
            <CompanyHeader />
            <ChannelSearch />
        </div>
    </>
  )
}

export default ChannelListContainer