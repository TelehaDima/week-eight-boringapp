import { useEffect, useState } from 'react';
import './App.css';
import video from './am-so.mp4'


function App() {

  const [getMyAdvice, setGetMyAdvice] = useState("")

  useEffect(() => {
getNewAdvice();
}, [])

  
  
  const getNewAdvice = async () => {
  const response = await fetch(`https://bored.api.lewagon.com/api/activity`)
  const data = await response.json()  
  console.log(data.activity) 
  setGetMyAdvice(data.activity)  
  }


  return (
    <div>
    <div className="container">
    <video autoPlay muted loop>
    <source src={video} type="video/mp4" />
    </video>
        <div className='advice'>
        <p><b>{getMyAdvice}</b></p>  
        <button onClick={getNewAdvice}><img src='https://img.icons8.com/?size=100&id=GdswgxgvDo0a&format=png&color=399918' height='30px'alt='pict'/>New Advice<img src='https://img.icons8.com/?size=100&id=GdswgxgvDo0a&format=png&color=399918' height='30px'alt='pict'/></button>
        </div>
    </div> 
    </div> 
  
  );
}

export default App;
