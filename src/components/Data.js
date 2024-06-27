import DataLoad from './DataLoad'

const dataSets = [
   {
      name: 'circles',
      url: 'https://gabriel2761.github.io/data/circles.json',
   },
   {
      name: 'circles2',
      url: 'https://gabriel2761.github.io/data/circles2.json',
   },
   // {
   //    name: 'circles3',
   //    url: 'https://gabriel2761.github.io/data/circles3.json',
   // },
]

const renderData = () => {
   return dataSets.map(data => {
      return <DataLoad key={data.name} data={data} />
   })
}

const Data = () => {
   return (
      <>
         <div>
            <h3>Data Loading</h3>
         </div>
         {renderData()}
      </>
   )
}

export default Data
