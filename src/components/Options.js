import { useState } from 'react'
import './Options.css'

const initColours = ['red', 'green', 'orange', 'blue']

const Options = ({ setFilters, options }) => {
   // Show in Options
   const [showing, setShow] = useState([...initColours])

   // const [showing, setShow] = useState([...initColours, ...options])

   // Hide in Options (show in filters)
   const [clicked, setClicked] = useState([])

   const onColourClick = colour => {
      setClicked([...clicked, colour])
      setShow(showing.filter(c => c !== colour))

      setFilters([...clicked, colour])
   }

   const renderOption = colour => {
      return (
         <div
            key={colour}
            style={{
               width: '20px',
               height: '20px',
               borderRadius: '100%',
               backgroundColor: `${colour}`,
            }}
            onClick={() => onColourClick(colour)}
         ></div>
      )
   }

   const renderOptions = () => {
      return showing.map(colour => {
         return renderOption(colour)
      })
   }

   return <div className="Options">{renderOptions()}</div>
}

export default Options
