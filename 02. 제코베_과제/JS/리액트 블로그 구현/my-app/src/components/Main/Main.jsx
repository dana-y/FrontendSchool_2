import React from 'react'
import styled from 'styled-components'
import PostList from './Posts/PostList'
import About from './About/About'

const MaxWidthDiv = styled.div`
	width: 1224px;
	max-width: calc(100% - 4rem);
	margin: 0 auto;
  display: flex;
	flex-direction: row-reverse;
	gap: 2.4rem;
	position: relative;
  @media (max-width: 1024px) {
		flex-direction: column;
	}
`


export default function Main() {
  return (
    <main>
      <MaxWidthDiv>
        <h2 className='a11y-hidden'>Post</h2>
        <PostList />
        <About />
      </MaxWidthDiv>
    </main>
  )
}
