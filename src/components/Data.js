import './Data.css'
import DataLoad from './DataLoad'

const dataSets = [
   {
      name: 'Circles',
      url: 'https://gabriel2761.github.io/data/circles.json',
   },
   {
      name: 'Circles2',
      url: 'https://gabriel2761.github.io/data/circles2.json',
   },
]

const renderDataSets = () => {
   return dataSets.map(data => {
      return <DataLoad key={data.name} data={data} />
   })
}

const Data = () => {
   return (
      <div className="Data">
         <div>
            <h3>Data Loading</h3>
         </div>
         {renderDataSets()}
      </div>
   )
}

export default Data
