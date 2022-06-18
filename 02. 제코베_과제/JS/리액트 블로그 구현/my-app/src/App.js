import MainPage from "./pages/MainPage/MainPage";
import GlobalStyle from "./styles/global";
import GlobalStyleReset from "./styles/reset";

function App() {
	return (
		<>
			<GlobalStyle />
			<GlobalStyleReset />
			<MainPage />
		</>
		)
}

export default App;
