import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'

const countriesPromise=fetch('https://restcountries.com/v3.1/all?fields=name,capital,region')
  .then(res=>res.json())

function App() {

  return (
    <>
    <Suspense fallback={<h3>Loading Countries ....</h3>}>
        <Countries countriesPromise={countriesPromise}></Countries>
    </Suspense>
    
    </>
  )
}

export default App
