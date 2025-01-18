import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/Services/Services"
import Wrapper from "./components/Wrapper/Wrapper"
import './App.css'
import ChooseUs from "./components/Features/Fearures"
import Reviews from "./components/Reviews/Reviews"
import Order from "./components/Order/Order"
import Package from "./components/Packages/Package"
import Recommendations from "./components/Recommendations/Recommendations"
import FAQ from "./components/Faqs/FAQ"
import Footer from "./components/Footer/Footer"

function App() {
  return <>
    {/* <Wrapper> */}
      <Navbar />
      <Hero />
      <Services />
      <ChooseUs />
      <Reviews />
      <Order />
      <FAQ />
      <Package />
      <Recommendations />
      <Footer />
    {/* </Wrapper> */}
  </>
}

export default App