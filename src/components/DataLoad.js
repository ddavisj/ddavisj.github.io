import axios from 'axios'

import { useEffect, useState } from 'react'

const DataLoad = ({ data }) => {
   const [state, setState] = useState([])

   const [loaded, setLoaded] = useState(false)

   useEffect(() => {
      const loadData = async () => {
         const res = await axios.get(data.url)
         setState(res)
         if (res) setLoaded(true)
      }
      loadData()
   }, [data.url])

   console.log(state.data)

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
