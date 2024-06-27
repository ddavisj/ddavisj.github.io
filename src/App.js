import './App.css'
import Data from './components/Data'
import Filter from './components/Filter'
import Options from './components/Options'

import { useState } from 'react'

const App = () => {
   const [filters, setFilters] = useState([]) // Filters set via Options

   const [options, showOption] = useState([]) // Filters unset via Filter

   return (
      <div className="App">
         <Data />
         <Filter filters={filters} showOption={showOption} />
         <Options setFilters={setFilters} options={options} />
      </div>
   )
}

export default App
