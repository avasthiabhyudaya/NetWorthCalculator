import Navbar from './Components/navbar'
import Sidebar from './Components/Sidebar'
import Traditional from './Pages/Traditional'
import Gold from './Pages/Gold'
import Dashboard from './Pages/Dashboard'
import RealEstate from './Pages/RealEstate'
import MutualFunds from './Pages/MutualFunds'
import Bonds from './Pages/Bonds'
import Crypto from './Pages/Crypto'
import {
  Routes,
  Route
} from "react-router-dom"

function App() {

  return (
    <main className="App">
      <div>
        <Navbar />
      </div>
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full justify-center items-center">
          <Routes>
            <Route exact path="/" element={<Dashboard />} />

            <Route exact path="/traditional" element={<Traditional />} />

            <Route exact path="/dashboard" element={<Dashboard />} />

            <Route exact path="/gold" element={<Gold />} />

            <Route exact path="/realEstate" element={<RealEstate />} />

            <Route exact path="/mutualFunds" element={<MutualFunds />} />

            <Route exact path="/bonds" element={<Bonds />} />

            <Route exact path="/crypto" element={<Crypto />} />

          </Routes>
        </div>
      </div>
    </main >
  )
}

export default App
