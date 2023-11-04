import { useDispatch, useSelector } from 'react-redux'
import './MessengerPeoplesMessage.css'
import { selectMessages, toggleActive } from '../../store/slices/messages/messagesSlice'
import { selectUsers } from '../../store/slices/users/usersSlice'

function MessengerPeoplesMessage({name, id, active,img}) {
	const {activeUserId} = useSelector(selectMessages)
	const {currentUser} = useSelector(selectUsers)
	const dispatch = useDispatch()

	return (
		<div onClick={() => dispatch(toggleActive({toId: id, fromId: currentUser.id}))} style={{ backgroundColor: activeUserId === id ? 'rgb(213 213 213)' : 'white'}} className='Messenger-left-col-people-message'>
			<div className='Messsage-img'>
				<img src={img} alt=''/>
			</div>
			<div className='Message-info'>
				<p>{name}</p>
				<p>{active}</p>
			</div>
		</div>
  	)
}

export default MessengerPeoplesMessage
