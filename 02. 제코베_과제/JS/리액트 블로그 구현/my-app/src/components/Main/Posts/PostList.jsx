import React from 'react'
import { useEffect, useState } from "react";
import styled from 'styled-components';
import Post from './Post';

const MainUl = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2.4rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export default function PostList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetch('/data.json')
      .then(res => res.json())
      .then(resData => {
      setData(resData.posts)
    })
  }
  fetchData();
	}, [])

  return (
    <MainUl>
      {data.map((item) => (
        <Post
          id={item.id}
          category={item.category}
          thumbnailImg={item.thumbnail}
          profileImg={item.profileImg}
          title={item.title}
          created={item.created}
          userName={item.userName}
        />
      ))}
    </MainUl>
  )
}
