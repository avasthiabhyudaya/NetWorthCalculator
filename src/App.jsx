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
import RealEstate from './Pages/RealEstate'

function App() {

  // const [accountData, setAccountData] = useState([]);
  // const [goldData, setGoldData] = useState([]);

  const [temporalNetWorth, setTemporalNetWorth] = useState([]);

  const [totalGold, setTotalGold] = useState(0);
  const [totalTraditional, setTotalTraditional] = useState(0);

  const initialTotalWealth = Number(totalGold) + Number(totalTraditional)

  const [totalWealth, setTotalWealth] = useState(initialTotalWealth);

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

    let temp = temporalNetWorth;
    temp.push({ totalWealth: Date.now() })
    setTemporalNetWorth(temp);

    console.log(temporalNetWorth);

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
            <Route exact path="/" element={<Dashboard totalWealth={totalWealth}
              setTotalWealth={setTotalWealth}
              traditionalPercentage={traditionalPercentage}
              goldPercentage={goldPercentage}
              setTraditionalPercentage={setTraditionalPercentage}
              setGoldPercentage={setGoldPercentage} />} />

            <Route exact path="/traditional" element={<Traditional totalWealthUpdation={totalWealthUpdation} />} />

            <Route exact path="/dashboard" element={<Dashboard totalWealth={totalWealth} totalGold={totalGold} />} />

            <Route exact path="/gold" element={<Gold totalWealthUpdation={totalWealthUpdation} totalGold={totalGold}
              setTotalGold={setTotalGold} />} />

            <Route exact path="/RealEstate" element={<RealEstate />} />
          </Routes>
        </div>
      </div>
    </main >
  )
}

export default App
