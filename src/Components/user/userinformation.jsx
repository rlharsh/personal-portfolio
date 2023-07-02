import React from 'react'

import '../../assets/css/userinformation.css'
import userPicture from '../../assets/images/ronald.jpg'
import { GitHub, Instagram, Mail, Twitter } from 'react-feather'

const UserInformation = () => {
  return (
    <div className='user-card'>
      <section className='user-card__header'>
        <h1 className='user-card__header__name'>Ronald</h1>
        <p className='user-card__header__title'>Web Developer<br />Application Developer</p>
      </section>
      <section className='user-card__image'>
        <img className='user-card__image__photo' src={userPicture} alt='Ronald' />
      </section>
      <section className='user-card__footer'>
        <h2 className='user-card__footer__email'>ronald.harsh@protonmail.com</h2>
        <p className='user-card__footer__based'>Based in Wisconsin, USA</p>
        <p className='user-card__footer__copyright'>© 2023 Ronald Harsh; All rights reserved.</p>
      </section>
    </div>
  )
}

export default UserInformation
