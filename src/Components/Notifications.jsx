import React from 'react'
import '../Styling/Notifications.css'

function Notifications(props) {
  return (
    <div key={props.id}>
      <img src={props.img} alt="Profile Picture" />
      <h1>{props.name}</h1>
      <h2>{props.notificationType}</h2>
      <h3>{props.notificationContext}</h3>
      <div className="extra-content">
        <h1>{props.extraContent}</h1>
      </div>
      <h1>Yo</h1>
    </div>
  )
}

export default Notifications