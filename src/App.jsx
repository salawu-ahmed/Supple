import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Wrapper from "./components/Wrapper/Wrapper"

function App() {
  return <>
    <Wrapper>
      <Navbar />
      <Hero />
    </Wrapper>
  </>
}

export default App