import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'


const AboutAside = styled.aside`
	flex-basis: calc((100% - 2.4rem * 3) / 4);
	flex-shrink: 0;
	align-self: flex-start;
	padding: 4rem 2.4rem 7rem;
	box-sizing: border-box;
	border-radius: var(--border-radius);
	background: var(--white-color);
	text-align: center;
	font-size: 2rem;
  @media (max-width: 1024px) {
    width: 100%;
  }
`

const AboutH2 = styled.h2`
	margin-bottom: 2rem;
	font-size: 1.2rem;
	font-weight: bold;
	text-transform: uppercase;
	text-decoration: underline;
	letter-spacing: 0.1em;
`
const AboutH3 = styled.h3`
	margin-bottom: 2rem;
	font-size: 1.2rem;
	font-weight: bold;
	text-transform: uppercase;
	text-decoration: underline;
	letter-spacing: 0.1em;
  margin-top: 6rem;
`
const AboutImg = styled.img`
	width: 8rem;
	height: 8rem;
	object-fit: cover;
	border-radius: 50%;
`

const AboutName = styled.p`
  color: var(--main-color);
	font-weight: bold;
	font-size: 1.6rem;
	margin: 1.2rem 0 0.8rem;
`
const AboutDesc = styled.p`
  font-size: 1.4rem;
	padding: 0 0.4rem;
`
const AboutUl = styled.ul`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 0.8rem;
`
const AboutLink = styled(Link)`
	background: var(--gray-background);
	color: var(--gray-text);
	font-size: 1.2rem;
	border-radius: calc(var(--border-radius) * 2);
	padding: 0.2rem 1.2rem;
`

// user ID 받아오기
let userId = 1;

export default function About() {
	// 서버 통해서 데이터 받아오기
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetch('/data.json')
      .then(res => res.json())
      .then(resData => {
        setData(resData.users[userId-1])
    })
  }
  fetchData();
	}, [])
  console.log(data.category)

  return (
    <AboutAside>
      <AboutH2>About Me</AboutH2>
      <AboutImg src={data.profileImg} />
      <AboutName>{data.name}</AboutName>
      <AboutDesc>{data.userInfo}</AboutDesc>
      <AboutH3>Categories</AboutH3>
			<AboutUl>
				{/* {data.category.map((item) => (
					<li><AboutLink>{item}</AboutLink></li>
				))} */}
			</AboutUl>
    </AboutAside>
  )
}
