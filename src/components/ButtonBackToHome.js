import React from 'react'
import { Link } from 'react-router-dom'

export const ButtonBackToHome = () => (
  <Link
    className='button is-info'
    to='/'>
    Go home
  </Link>
)