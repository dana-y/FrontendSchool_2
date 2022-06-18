import React from 'react'
import Logo from './Logo/Logo'
import LoginInfo from './LoginInfo/LoginInfo'
import styled from 'styled-components'

const HeaderWrppaer = styled.header`
  background: var(--white-color);
  width: 1224px;
	max-width: calc(100% - 4rem);
	margin: 0 auto;
`
function Header() {
  return (
    <HeaderWrppaer>
      <Logo></Logo>
      <LoginInfo></LoginInfo>
    </HeaderWrppaer>
  )
}

export default Header;