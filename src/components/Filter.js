// import { useState } from 'react'

const Filter = ({ filters, showOption }) => {
   // const [unsetFilters, unsetFilter] = useState([])

   const onColourClick = colour => {
      console.log(colour)
      showOption([])
   }

   const renderFilters = () =>
      filters.map(colour => {
         return (
            <div
               key={colour}
               style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '100%',
                  backgroundColor: `${colour}`,
               }}
               onClick={() => {
                  onColourClick(colour)
               }}
            ></div>
         )
      })

   return (
      <>
         <h3>Filtered Colours</h3>

         {filters.length ? renderFilters() : ''}
      </>
   )
}

export default Filter
