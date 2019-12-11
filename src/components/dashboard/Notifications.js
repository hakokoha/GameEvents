import React from 'react';
import moment from 'moment';

const Notifications = (props) => {
    const {notifications} = props
    return (
        <div className="section">
            <div className="card z-depth-0 notifications-section">
                <div className="card-content">
                    <span className="notifications-title">Notifications</span>
                    <ul className="notifications">
                        { notifications && notifications.map(item => {
                            return (
                                <li key={item.id}>
                                    <span className="black-text">{item.user}: </span>
                                    <span>{item.content}</span>
                                    <div className="note-date">
                                        {moment(item.time.toDate()).fromNow()}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notifications;