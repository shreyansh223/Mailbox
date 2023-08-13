import React, { useContext } from 'react';
import Add from '../image/add-user (1).png';
import videoCall from '../image/video-player.png';
import more from '../image/more.png';
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from '../context/ChatContext';
function Chat() {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcon">
          <img src={Add}></img>
          <img src={videoCall}></img>
          <img src={more}></img>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

export default Chat;
