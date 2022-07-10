import React from 'react'
import { Channel,useChatContext } from 'stream-chat-react'
import { ChannelInner,CreateChannel,EditChannel,TeamMessage } from './'
const ChannelContainer = () => {
  const { channel } = useChatContext();
  return (
    <div>ChannelContainer</div> 
  )
}

export default ChannelContainer