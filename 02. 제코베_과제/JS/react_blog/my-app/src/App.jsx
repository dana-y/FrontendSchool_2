import GlobalStyle from "./styles/global";
import GlobalStyleReset from "./styles/reset";
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { Route, Switch } from 'react-router-dom'
import DetailBanner from './components/Banner/DetailBanner'
import DetailPost from "./components/Main/PostView/PostView";
import { useEffect, useState } from "react";


function App() {
  // 비동기로 하기
  const [data, setData] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('/data.json');
      const result = await response.json();
      setData(result);
      setIsLoaded(true);
    }
    getData()
  }, [])
  if(isLoaded) {
    return (
      <>
        <GlobalStyleReset />
        <GlobalStyle />
        
        <div>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Banner/>
            <Main 
            posts={data.posts}
            users={data.users} 
            />
          </Route>
          <Route exact path='/detail/:id'>
            <DetailBanner posts={data.posts} />
            <DetailPost />
          </Route>
        </Switch>
        <Footer />
      </div>
      </>
      )
  }
}

export default App;
