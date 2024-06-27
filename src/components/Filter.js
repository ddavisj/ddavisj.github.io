import Circle from './Circle'
import './Filter.css'

const Filter = ({ filters, onUnsetFilter, onClearAll }) => {
   const renderFilters = () =>
      filters.map(colour => {
         return (
            <div key={colour} style={{ display: 'flex' }}>
               <span style={{ paddingRight: '5px' }}>-</span>
               <Circle key={colour} colour={colour} fn={onUnsetFilter} />
            </div>
         )
      })

   return (
      <div className="Filter">
         <div className="container">
            <div style={{ marginRight: '20px' }}>
               <h3>Filtered Colours</h3>
            </div>

            <button onClick={() => onClearAll()}>Clear all</button>
         </div>
         <div>{renderFilters()}</div>
      </div>
   )
}

export default Filter
