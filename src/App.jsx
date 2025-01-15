import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/Services/Services"
import Wrapper from "./components/Wrapper/Wrapper"
import './App.css'
import ChooseUs from "./components/Features/Fearures"
import Reviews from "./components/Reviews/Reviews"

function App() {
  return <>
    {/* <Wrapper> */}
      <Navbar />
      <Hero />
      <Services />
      <ChooseUs />
      <Reviews />
    {/* </Wrapper> */}
  </>
}

export default App