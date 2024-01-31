import Home from "./Home"
import "./App.css"
import Header from "./Header"
import { Routes, Link, BrowserRouter, Route } from "react-router-dom"
import About from "./About"
function App() {

  return (
    <>
     

      <Header />
      <BrowserRouter>
        <Routes>

          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />

        </Routes>
      </BrowserRouter>
      <Home title="Page first" descp="This is about my page first" />
      <Home title="Page second" descp="This is about my page second" />
      <Home title="Page third" descp="This is about my page third" />
      <Home title="Page fouth" descp="This is about my page fouth" />
    </>
  )
}

export default App
