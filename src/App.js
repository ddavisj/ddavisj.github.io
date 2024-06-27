import './App.css'
import Data from './components/Data'
import Filter from './components/Filter'
import Options from './components/Options'

import { useState } from 'react'

const initColours = ['red', 'orange', 'aqua', 'green', 'blue', 'purple']

const App = () => {
   const [filtersSet, setFilters] = useState([])

   const onSetFilter = colour => {
      setFilters([...filtersSet, colour])
   }

   const onUnsetFilter = colour => {
      setFilters(filtersSet.filter(c => c !== colour))
   }

   return (
      <div className="App">
         <Data />
         <Filter
            filtersSet={filtersSet}
            onUnsetFilter={onUnsetFilter}
            onClearAll={() => setFilters([])}
         />
         <Options
            onSetFilter={onSetFilter}
            colours={initColours.filter(colour => !filtersSet.includes(colour))}
            // only pass colour if not in filtersSet
         />
      </div>
   )
}

export default App
