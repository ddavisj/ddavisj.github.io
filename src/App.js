import './App.css'
import Data from './components/Data'
import Filter from './components/Filter'
import Options from './components/Options'

import { useState } from 'react'

const initColours = ['red', 'orange', 'aqua', 'green', 'blue', 'purple']

const App = () => {
   const [filters, setFilters] = useState([])

   const onSetFilter = colour => {
      setFilters([...filters, colour])
   }

   const onUnsetFilter = colour => {
      setFilters(filters.filter(c => c !== colour))
   }

   return (
      <div className="App">
         <Data />
         <Filter
            filters={filters}
            onUnsetFilter={onUnsetFilter}
            onClearAll={() => setFilters([])}
         />
         <Options
            onSetFilter={onSetFilter}
            colours={initColours.filter(colour => !filters.includes(colour))}
            // only pass colour if not in filters
         />
      </div>
   )
}

export default App
