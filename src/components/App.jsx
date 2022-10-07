import "./App.css";
import { Container, Header, HeroForm, HeroList, HeroInfo } from "/";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <HeroForm />
        <HeroList />
        <HeroInfo />
      </Container>
    </div>
  );
}

export default App;
