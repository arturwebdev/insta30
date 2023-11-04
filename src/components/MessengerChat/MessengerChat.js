import { useSelector } from 'react-redux'
import './MessengerChat.css'
import { selectMessages } from '../../store/slices/messages/messagesSlice'
import { selectUsers } from '../../store/slices/users/usersSlice'
import { useEffect, useRef } from 'react'

function MessengerChat() {
  const {currentDialog} = useSelector(selectMessages)
  const {currentUser} = useSelector(selectUsers)

  const divRef = useRef(null)

  useEffect(() => {
    divRef.current.scrollTop = divRef.current.scrollHeight
  }, [currentDialog])

  return (
	 <div ref={divRef} className='MessengerChat'>
    {
      currentDialog.map(message => (
        <h1 className={currentUser.id === message.fromId ? 'me' : 'you'} key={message.id}>
          <span>{message.body}</span>
        </h1>
      ))
    }
	 </div>
  )
}

export default MessengerChat
