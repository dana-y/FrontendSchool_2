import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const Banner = styled.div`
	position: relative;
	background: url(data.contents[2].src) no-repeat 50% 50% / cover;
	height: 27em;
	margin-bottom: -7em;
`

export default function DetailBanner() {
  const postId = useParams();

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
  // filter((e) => e.id === postId)
  // console.log(data)
  console.log(+postId.id)
  console.log(data.id)
  const thisData = data.filter(function(e) {return e["id"] === postId.id});
  // const thisData = data.map(e => e["id"] === postId.id);
  console.log("data는")
  console.log(thisData)
  return (
    <Banner className='max-width'>
      
    </Banner>
  )
}
