import React from 'react'
import Img from '../atoms/Img'
import Link from '../atoms/Link'

export default function Logo() {
  return (
    <h1>
      <Link to="./">
        <Img src="../../assets/icon/Logo.svg" />
      </Link>
    </h1>
  )
}
