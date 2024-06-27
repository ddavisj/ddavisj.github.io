import axios from 'axios'
import './DataLoad.css'

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
   }, [])

   console.log(state.data)

   return (
      <div className="container">
         <div style={{ paddingRight: '10px' }}>{loaded ? 'Yes' : 'No'}</div>
         <div>{data.name}</div>
      </div>
   )
}

export default DataLoad
