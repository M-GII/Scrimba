import MyInfo from "./components/MyInfo.jsx"
import Interests from "./components/Interests.jsx"
import About from "./components/About.jsx"
import Footer from "./components/Footer.jsx"

export default function App(){
  return (
    <div className="content">
    <MyInfo />
    <About />
    <Interests />
    <Footer />
    </div>
  )
}