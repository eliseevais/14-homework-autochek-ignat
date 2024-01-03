import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'
import dre from './dre-fotor-20240103222244.png'
import eminem from './eminem-fotor-20240103222337.png'

/*
* 1 - описать тип MessageType // done
* 2 - описать тип MessagePropsType в файле Message.tsx // done
* 3 - в файле Message.tsx отобразить приходящие данные // done
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any

export type MessageTextPropsType = {
  text: string,
  time: string
}

export type MessageUserType = {
  avatar: string,
  name: string
}

export type MessageType = {
  id: number,
  user: MessageUserType,
  message: MessageTextPropsType
}

// структуру объекта не менять
export const message0: MessageType = {
  id: 0,
  user: {
    avatar: dre, // можно менять
    name: 'Dr. Dre',  // можно менять
  },
  message: {
    text: 'Hello, it is my first message!', // можно менять
    time: '22:00', // можно менять
  },
}
export const friendMessage0: MessageType = {
  id: 100,
  user: {
    avatar: eminem, // можно менять
    name: 'Eminem', // можно менять
  },
  message: {
    text: 'Hello, it is my first reply you here.', // можно менять
    time: '22:05', // можно менять
  },
}

const HW1 = () => {
  return (
    <div id={'hw1'}>
      <div className={s2.hwTitle}>Homework #1</div>
      <div className={s2.hw}>
        {/*проверка отображения (не менять)*/}
        <div>
          <Message message={message0}/>
          <FriendMessage message={friendMessage0}/>
        </div>

        {/*для автоматической проверки дз (не менять)*/}
        <MessageSender M={Message}/>
      </div>
    </div>
  )
}

export default HW1
