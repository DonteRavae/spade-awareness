import AppContainer from "./App.styled";
import Header from "./Header/Header";
import Home from "../../views/Home/Home";
// import Media from "../../views/Media/Media";

const App = () => {
  return (
    <AppContainer>
      <Header />

      {/* '/' route */}
      <Home />

      {/* '/media' route */}
      {/* <Media /> */}
    </AppContainer>
  );
};

export default App;
