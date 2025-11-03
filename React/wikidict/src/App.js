import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const uri = "https://thewallofpiss.duckdns.org/Anarchy/dict.json"

function WikiList({ json, row }) {
  const diglets = []
  for(let i in json[row]['content']){
    console.log(i)
  }
}

function WikiItem({ name }) {
  return (
    <div>
      <p>{name}</p>
    </div>
  )
}

function App() {
  const [apiContent, setAPC] = useState('')
  const [currRow, setRow] = useState('cars')
  const [refr, setRefr] = useState(true)
  useEffect(() => {
    async function fetchCont() {
      const res = await fetch(uri)
      setAPC(await res.json())
    }
    if (refr) {
      fetchCont()
      setRefr(false)
    }
  }, [refr])

  return (
    <div className="App">
      <div>
        <WikiList json={apiContent} row={currRow}/>
      </div>
    </div>
  );
}

export default App;
