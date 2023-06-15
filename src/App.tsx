// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/NavItem"
import Explore from "./components/Explore"
import Pandi from "./components/Pandi"
import Bulacan from "./components/Bulacan"
import SeeMore from "./components/SeeMore"
import Footer from "./components/Footer"

function App() {

  return (
    <>
    <header>
        <Navbar />
        <Explore />
        <Pandi />
        <Bulacan />
        <SeeMore />
        <Footer />

      </header>

    </>
  )
}

export default App
