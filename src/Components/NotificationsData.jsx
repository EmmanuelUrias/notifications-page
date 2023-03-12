import React from 'react'
import Notifications from './Notifications'


function NotificationsPage() {
    const notifications = [
        {
          id: 1,
          img: '/images/avatar-mark-webber.webp',
          name: 'Mark Webber', 
          notificationType: 'reacted to your recent post',
          notificationContext: 'My first tournament today!',
          timeAgo: '1m',
          extraContent: false,
          extraContentImg: false,
          newNotification: true
        },
        {
            id: 2,
            img: '/images/avatar-angela-gray.webp',
            name: 'AngelaGray', 
            notificationType: 'followed you',
            notificationContext: '',
            timeAgo: '5m',
            extraContent: false,
            extraContentImg: false,
            newNotification: true
          },
          {
          id: 3,
          img: '/images/avatar-jacob-thompson.webp',
          name: 'Jacob Thompson', 
          notificationType: 'has joined your group',
          notificationContext: 'Chess Club',
          timeAgo: '1 day',
          extraContent: false,
          extraContentImg: false,
          newNotification: true
          },
          {
            id: 4,
            img: '/images/avatar-rizky-hasanuddin.webp',
            name: 'Riztky Hasanuddin', 
            notificationType: 'sent you a private message',
            notificationContext: '',
            timeAgo: '5 day',
            extraContent: 'Hello, thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and I\'m already having lots of fun and improving my game.',
            extraContentImg: false,
            newNotification: false
            },
            {
              id: 5,
              img: '/images/avatar-kimberly-smith.webp',
              name: 'Kimberly Smith', 
              notificationType: 'Commented on your picture',
              notificationContext: '',
              timeAgo: '1 week',
              extraContent: false,
              extraContentImg: '/images/image-chess.webp',
              newNotification: false
              },
              {
                id: 6,
                img: '/images/avatar-nathan-peterson.webp',
                name: 'Nathan Peterson', 
                notificationType: 'reacted to your recent post',
                notificationContext: '5 end-game strategies',
                timeAgo: '2 weeks',
                extraContent: false,
                extraContentImg: false,
                newNotification: false
                },
                {
                  id: 7,
                  img: '/images/avatar-anna-kim.webp',
                  name: 'Anna Kim', 
                  notificationType: 'left the group',
                  notificationContext: 'Chess Club',
                  timeAgo: '2 weeks',
                  extraContent: false,
                  extraContentImg: false,
                  newNotification: false
                  },
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
                        timeAgo={data.timeAgo}
                        extraContent={data.extraContent}
                        extraContentImg={data.extraContentImg}
                        newNotification={data.newNotification}
                    />
                </div>
        ))}
    </div>
  )
}

export default NotificationsPage