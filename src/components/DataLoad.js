import axios from 'axios'

import { useEffect, useState } from 'react'

const DataLoad = ({ data }) => {
   const [loaded, setLoaded] = useState(false)

   useEffect(() => {
      const loadData = async () => {
         const res = await axios.get(data.url)
         if (res) setLoaded(true)
         console.log(res.data)
      }
      loadData()
   }, [data.url])

   return (
      <div className="container">
         <div style={{ paddingRight: '10px', paddingBottom: '10px' }}>
            {loaded ? '✅' : '❌'}
         </div>
         <div>{data.name}</div>
      </div>
   )
}

export default DataLoad
