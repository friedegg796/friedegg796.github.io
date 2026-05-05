import NavigationBar from './reusablecomponents/navigationbar'
import Index from './pages/Index'
import { HashRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>


      <HashRouter>
      <NavigationBar/>
       <Routes>
        <Route path="/" element={<Index/>}/>
        </Routes>


    </HashRouter>
   {/* <Footer /> */}
    </>
  )
}

export default App
