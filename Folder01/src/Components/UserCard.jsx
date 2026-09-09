import React from 'react'
import WhatsAppProfile from '../assets/WhatsApp-Profile.jpeg'
import './UserCard.css'

const UserCard = (props) => {
  return (
    <div className="user-card">
      <p id="user-name">{props.name}</p>
      <img id="user-image" src={WhatsAppProfile} alt="User" />
      <p id="user-description">{props.desc}</p>
    </div>
  )
}

export default UserCard