import { useEffect, useState } from 'react'
import axios from 'axios';
function App() {

  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  })
  return (
    <div className='h-screen text-center bg-slate-500 pt-52'>
      <h1 className='text-2xl font-bold uppercase '>chai or Full stack</h1>
      <p className='font-semibold text-yellow-800 '>JOKES:{jokes.length}</p>
      {
        jokes.map((jokes, index) => (
          <div key={jokes.id}>
            <h2 className='font-bold ' >{jokes.title}</h2>

            <h3>{jokes.content}</h3>
          </div>
        ))
      }

    </div>
  )
}

export default App
