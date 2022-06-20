import React from 'react'
import styled from 'styled-components'
// import data from '../../../../public/data.json'

const AuthorWrap = styled.dl`
	display: flex;
	gap: 1rem;
	color: #767676;
	font-size: 1.2rem;
`
const AuthorDd = styled.dd`
	display: flex;
	align-items: center;
	gap: 0.6rem;
`
const AuthorCreated = styled(AuthorDd)`
  ::before {
    content: "";
    display: block;
    width: 1px;
    height: 0.8em;
    margin-right: 1rem;
    background: var(--border-color);
  }
`
const AuthorImg = styled.img`
	width: 2em;
	height: 2em;
	border-radius: 50%;
`

export default function Author(props) {
  console.log(props)
  return (
    <AuthorWrap>
      <dt className='a11y-hidden'>Author</dt>
      <AuthorDd>
        <AuthorImg src={props.profileImg} />
        {props.userName}
      </AuthorDd>
      <dt className='a11y-hidden'>Created</dt>
      <AuthorCreated>{props.created}</AuthorCreated>
    </AuthorWrap>
  )
}
