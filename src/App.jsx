

import { Suspense } from 'react'
import './App.css'
import Foodapi from './food/foodapi'

function App() {

  const fetchapi=async()=>{

    const fetching= await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
    const response= await fetching.json()
    return response

  }


  const myapi=fetchapi()

  return (
    <>
    <Suspense fallback={<h1>LOADINg</h1>}>
    <Foodapi data={myapi}></Foodapi>
    </Suspense>
    </>
  )
}

export default App
