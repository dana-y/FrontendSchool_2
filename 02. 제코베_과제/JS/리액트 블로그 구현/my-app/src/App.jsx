import GlobalStyle from "./styles/global";
import GlobalStyleReset from "./styles/reset";
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { Route, Switch } from 'react-router-dom'
import DetailBanner from './components/Banner/DetailBanner'
import DetailPost from './components/DetailPost/DetailPost'

function App() {
	


	return (
		<>
			<GlobalStyle />
			<GlobalStyleReset />
			<div>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Banner />
          <Main />
        </Route>
        <Route exact path='/detail/:id'>
          <DetailBanner />
          <DetailPost />
        </Route>
      </Switch>
      <Footer />
    </div>
		</>
		)
}

export default App;
