import React from 'react'
import Notifications from './Notifications'


function NotificationsPage() {
    const notifications = [
        {
          id: 1,
          img: '',
          name: 'Mark Webber', 
          notificationType: 'reacted to your recent post',
          notificationContext: 'My first tournament today!',
          extraContent: null,
          newNotification: true
        },
        {
            id: 2,
            img: '',
            name: 'AngelaGray', 
            notificationType: 'followed you *',
            notificationContext: '',
            extraContent: null,
            newNotification: true
          }
      ]

  return (
    <div>
        {notifications.map(data => (
                <div>
                    <Notifications 
                        id={data.id}
                        img={data.img}
                        name={data.name}
                        notificationType={data.notificationType}
                        notificationContext={data.notificationContext}
                        extraContent={data.extraContent}
                        newNotification={data.newNotification}
                    />
                </div>
        ))}
    </div>
  )
}

export default NotificationsPage