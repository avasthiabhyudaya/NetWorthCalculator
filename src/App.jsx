import { useState } from 'react'
import Navbar from './Components/navbar'
import Sidebar from './Components/Sidebar'
import Traditional from './Pages/Traditional'
import Gold from './Pages/Gold'
import {
  Routes,
  Route
} from "react-router-dom"
import Dashboard from './Pages/Dashboard'

function App() {

  // const [accountData, setAccountData] = useState([]);
  // const [goldData, setGoldData] = useState([]);

  const [totalWealth, setTotalWealth] = useState(0);
  const [goldNetWorth, setGoldlNetWorth] = useState(0);
  // const [traditionalNetWorth, setTraditionalNetWorth] = useState(0);

  const [traditionalPercentage, setTraditionalPercentage] = useState(0);
  const [goldPercentage, setGoldPercentage] = useState(0);

  // const percentage = () => {
  //   let tempTraditionalPercentage = ((Number(traditionalNetWorth) / Number(totalWealth)) * 100);
  //   setTraditionalPercentage(tempTraditionalPercentage);
  //   console.log(traditionalPercentage);
  //   let tempGoldPercentage = ((Number(goldNetWorth) / Number(totalWealth)) * 100);
  //   setGoldPercentage(tempGoldPercentage);
  //   console.log(goldPercentage);
  // }


  const totalWealthUpdation = (newEntry) => {
    setTotalWealth(Number(totalWealth) + Number(newEntry));
    // percentage();
    // console.log(traditionalNetWorth);
  }


  return (
    <main className="App">
      <div>
        <Navbar />
      </div>
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full justify-center items-center">
          <Routes>
            <Route exact path="/" element={<Dashboard totalWealth={totalWealth} setTotalWealth={setTotalWealth} traditionalPercentage={traditionalPercentage} goldPercentage={goldPercentage} setTraditionalPercentage={setTraditionalPercentage} setGoldPercentage={setGoldPercentage} />} />

            <Route exact path="/traditional" element={<Traditional totalWealthUpdation={totalWealthUpdation} />} />

            <Route exact path="/dashboard" element={<Dashboard totalWealth={totalWealth} goldNetWorth={goldNetWorth} />} />

            <Route exact path="/gold" element={<Gold totalWealthUpdation={totalWealthUpdation} goldNetWorth={goldNetWorth} setGoldlNetWorth={setGoldlNetWorth} />} />
          </Routes>
        </div>
      </div>
    </main >
  )
}

export default App
