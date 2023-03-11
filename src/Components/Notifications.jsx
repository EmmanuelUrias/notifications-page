import React from 'react'

function Notifications(props) {
  return (
    <div>
      <img src={props.img} alt="Profile Picture" />
      <h1>{props.name}</h1>
      <h2>{props.notificationType}</h2>
      <h3>{props.notificationContext}</h3>
      <div className="extra-content">
        <h1>{props.extraContent}</h1>
      </div>
    </div>
  )
}

export default Notifications