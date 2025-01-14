import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/Services/Services"
import Wrapper from "./components/Wrapper/Wrapper"
import './App.css'

function App() {
  return <>
    {/* <Wrapper> */}
      <Navbar />
      <Hero />
      <Services />
    {/* </Wrapper> */}
  </>
}

export default App