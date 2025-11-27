import './App.css';
import { useEffect, useState } from 'react';

const uri = "https://actinyde.duckdns.org/Anarchy/dict.json"

function WikiList({ json, row }) {
  const diglets = []
  for (let i in json[row]) {
    if (i === 'content') {
      for (let x in json[row]['content']) {
        diglets.push(<WikiItem name={x} key={x} rows={json[row]['info']['slots']} data={json[row]['content'][x]} appends={json[row]['info'].append}/>)
      }
    }
  }
  return (
    <div className='theStuff'>
      {diglets}
    </div>
  )
}

function WikiItem({ name, rows, appends, data }) {
  let rowData = Object.values(rows)
  let rowz = []
  for(let i = 0; i < rowData.length; i++){
    const formattedString = `${rowData[i]}: ${Object.values(data)[i]}${Object.values(appends)[i]}`
    rowz.push(<div key={rowData[i]}>{formattedString}</div>)
  }
  return (
    <div className='Stuff'>
      <h2>{name}</h2>
      <div>
        {rowz}
      </div>
    </div>
  )
}

function Selector({setRow, apiContent}){
  let options = []
  for (let i in apiContent) {
    options.push(<option key={i} value={i}>{apiContent[i]['info'].formatted}</option>)
  }
  function handler(){
    const val = document.getElementById('rowSel').selectedIndex
    setRow(document.getElementById('rowSel')[val].value)
  }
  return(
    <select id='rowSel' onChange={handler}>
      {options}
    </select>
  )
}

function App() {
  const [apiContent, setAPC] = useState('')
  const [currRow, setRow] = useState('cars')
  const [refr, setRefr] = useState(true)
  useEffect(() => {
    async function fetchCont() {
      let res
      let json
      try{
        res = await fetch(uri)
        json = await res.json()
      }catch(e){
        console.log(e)
        setAPC({})
        return
      }
      setAPC(json)
      console.log(json)
    }
    if (refr) {
      fetchCont()
      setRefr(false)
    }
  }, [refr])

  return (
    <div className="App">
      <div>
        <h1>WikiDict</h1>
        <Selector setRow={setRow} apiContent={apiContent}/> <button onClick={()=>{setRefr(true)}}>Refresh</button>
        <WikiList json={apiContent} row={currRow} />
      </div>
    </div>
  );
}

export default App;
