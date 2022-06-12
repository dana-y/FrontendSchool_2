import React, {useState} from "react";
import { MainPage } from "./mainpage/MainPage";
import Document from "../document/Document";
import Tutorial from "../tutorial/Tutorial";
import Blog from "../blog/Blog";
import Community from "../community/Community";
import Languages from "../languages/Languages";


const ContetnsContainer = ({ listName }) => {
  if(listName === 'mainPage') {
    return <MainPage />;
  } else if(listName === 'document') {
    return <Document />;
  } else if(listName === 'tutorial') {
    return <Tutorial />;
  } else if(listName === 'blog') {
    return <Blog />;
  } else if(listName === 'community') {
    return <Community />;
  // } else if(listName === 'search') {
  //   return <Community />;
  } else if(listName === 'languages') {
    return <Languages />
  }
}

function NavBar () {
  const [listName, setListName] = useState("mainPage");
  const checkId = (e) => {
    setListName(e.targer.id);
  }
  return (
    <>
      <nav>
        <ul>
          <li id="mainPage" onClick={checkId}></li>
          <li id="document" onClick={checkId}></li>
          <li id="tutorial" onClick={checkId}></li>
          <li id="blog" onClick={checkId}></li>
          <li id="community" onClick={checkId}></li>
          <li id="search" onClick={checkId}></li>
          <li id="languages" onClick={checkId}></li>
        </ul>
      </nav>
      <ContetnsContainer listName = {listName} />
    </>
  )
}

export default NavBar;