import React from 'react'
import '../Styling/Notifications.css'

function Notifications(props) {
  const newNotification = props.newNotification
  const extraContent = props.extraContent
  const extraContentImg = props.extraContentImg

  return (
    <div className={newNotification ? 'notification-section-new' : 'notification-section'} key={props.id}>
      <div className='notification-text'>
        <img className='profile-picture' src={props.img} alt="Profile" />
        <h1 className='username'>{props.name}</h1>
        <h2 className='notification-type'>{props.notificationType}</h2>
        <h2 className='notification-context'>{props.notificationContext}</h2>
        <h3 className='new-notification-marker'>{newNotification ? '*' : ''}</h3>
        {extraContentImg ? <img className='extra-content-image' src={extraContentImg} alt='your post'/> : ''}
      </div>
      <div className="time-ago">{`${props.timeAgo} ago`}</div>
      { extraContent ? <div className="extra-content">
        <h1>{extraContent}</h1>
      </div> : ''}
    </div>
  )
}

export default Notifications