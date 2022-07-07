import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

const apiKey  = 'mckkzdgpkx2f';

const App = () => {
  return (
    <div className='app__wrapper'>
        <Chat></Chat>
    </div>
  )
}

export default App