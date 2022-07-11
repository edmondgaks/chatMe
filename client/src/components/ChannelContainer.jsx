import React from 'react'
import { Channel,useChatContext } from 'stream-chat-react'
import { ChannelInner,CreateChannel,EditChannel,TeamMessage } from './'
const ChannelContainer = ({isCreating,setisCreating,isEditing,setisEditing,createType}) => {
  const { channel } = useChatContext();

  if(isCreating) {
    return (
      <div className='channel__container'>
        <CreateChannel createType={createType} setisCreating={setisCreating} />
      </div>
    )
  }
  if(isEditing) {
    return (

    )
  }
  return (
    <div>ChannelContainer</div> 
  )
}

export default ChannelContainer