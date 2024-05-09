import { useEffect, useRef, useState } from 'react'
import './App.css'
import CardCountry from './Components/CardCountry';
import useFetch from './hooks/useFetch';

function App() {

  const [ countries, getCountries, isLoading, hasError] = useFetch();
  const [finder, setFinder] = useState('spanish');


  useEffect(() => {
    const url = `https://restcountries.com/v3.1/lang/${finder}`;
   
    getCountries(url);
  }, [finder]);



const textInput = useRef();
const handleSubmit = event => {
  event.preventDefault();
  setFinder(textInput.current.value.trim().toLowerCase());
  event.target.reset();
}

  return (
    <div className='centro'>
      {
        isLoading ? 
        <h2>Loading...</h2>
        :
        <>

<h1>Despliegue dinamico </h1>
      <form className='languaje_form' onSubmit={ handleSubmit }>
        <input type='text' ref={ textInput } />
        <button className='form_btn_languaje'>Search</button>
      </form>

      <div className='container_principal'>
    {
      hasError ? 
      <h2>Check your languaje</h2>
      :
      countries?.map(country => (
        <CardCountry 
        key={country.name.common}
        country={country} />

      ))
    }
    </div>
   </>
}
 
    </div>
  )
}

export default App;
