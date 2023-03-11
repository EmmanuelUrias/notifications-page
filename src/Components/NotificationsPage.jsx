import React from 'react'
import Notifications from './Notifications'

function NotificationsPage() {
    const notifications = [
        {
          img: '',
          name: '', 
          notificationType: '',
          notificationContext: '',
          extraContent: null
        },
      ]

  return (
    <div>
        {notifications.map(notifications => {
            <Notifications 
                img={notifications.img}
                name={notifications.name}
                notificationType={notifications.notificationType}
                notificationContext={notifications.notificationContext}
                extraContent={notifications.extraContent}
            />
        })}
    </div>
  )
}

export default NotificationsPage