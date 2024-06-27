import Circle from './Circle'

import './Options.css'

const Options = ({ onSetFilter, colours }) => {
   const onColourClick = colour => {
      onSetFilter(colour)
   }

   return (
      <div className="Options">
         {colours.map(colour => {
            return <Circle key={colour} colour={colour} fn={onColourClick} />
         })}
      </div>
   )
}

export default Options
