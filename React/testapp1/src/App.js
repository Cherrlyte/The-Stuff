import logo from './FG.svg';
import randimg from './logo192.png'
import './App.css';
import { useState } from 'react';



function ThyList({ movies }) {
  const [filtered, setFilter] = useState('')
  const [OnWt, setOW] = useState(false)
  return (
    <div className="App">
      <TheBar setFilter={setFilter} filter={filtered} setOW={setOW} ow={OnWt} />
      <MovieTable stuff={movies} filter={filtered} ow={OnWt} />
      <Adder />
    </div>
  );
}

function TheBar(l) {
  function changeFilter(v) {
    l.setFilter(v)
  }
  return (
    <div>
      <div id='inBox'>
        <input type='text' placeholder='Type to set filter...' value={l.filter} onChange={e => { changeFilter(e.target.value) }} />
        <span id="owBox">
          Only Unwatched
          <input type='checkbox' value={l.ow} onChange={e => { l.setOW(!l.ow) }} />
        </span>
      </div>
    </div>
  )
}

function Adder() {
  let [name, sname] = useState('')
  let [rating, srating] = useState('')
  let [rdate, srdate] = useState('')

  function addMovie(){
    movieList.push(
      {name: name, rating: rating, rdate: rdate, watched: false}
    )
  }

  function changeVal(e, val){
    switch(val){
      case 'name':
        sname(e.target.value)
        break
      case 'rating':
        srating(e.target.value)
        break
      case 'rdate':
        srdate(e.target.value)
        break
    }
  }

  return (
    <table className='addTable'>
      <thead>
        <tr>
          <th><input className='newInput' onChange={e => { changeVal(e, 'name') }} value={name} placeholder='Movie Name...'  /></th>
          <th><input className='newInput' onChange={e => { changeVal(e, 'rating') }} value={rating}  placeholder='??/??'  /></th>
          <th><input className='newInput' onChange={e => { changeVal(e, 'rdate') }} value={rdate} placeholder='00/00/0000'  /></th>
          <th><button className='addButton2' onClick={()=>{addMovie()}}>+</button></th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  )
}

function MovieObj({ movie }) {
  let [status, sStatus] = useState(movie.watched)
  let [isEdit, sEdit] = useState(false)

  return (
    <tr>
      <td>{!isEdit ? movie.name : <EditBox movie={movie} vr='name'/>} <EditButton movie={movie} isEdit={isEdit} setEdit={sEdit} /></td>
      <td>{!isEdit ? movie.rating : <EditBox movie={movie} vr='rating'/>} <EditButton movie={movie} isEdit={isEdit} setEdit={sEdit} /></td>
      <td>{!isEdit ? movie.rdate : <EditBox movie={movie} vr='rdate' />} <EditButton movie={movie} isEdit={isEdit} setEdit={sEdit} /></td>
      <td><input type='checkbox' defaultChecked={status} onChange={handleChange}></input></td>
    </tr>
  )

  function handleChange() {
    movie.watched = !movie.watched
    sStatus(movie.watched)

    console.log(movieList)
    console.log(sStatus)
  }
}

function EditBox({ movie, vr }) {
  const [name, sName] = useState(movie[vr])
  function editName(e) {
    movie[vr] = e.target.value
    sName(movie[vr])
    e.target.style.width = String(e.target.value).length + "ch"
  }
  return (
    <input className='editBox' value={name} onChange={e => { editName(e) }} maxLength='25' 
    style={{ width: `${String(name).length}ch` }} />
  )
}

function EditButton(l) {
  function invokeEditor(e) {
    l.setEdit(!l.isEdit)
    e.target.innerHTML = l.isEdit ? '✎' : '✓'
  }
  return (
    <button className='addButton' onClick={e => { invokeEditor(e) }}>✎</button>
  )
}

function MovieTable({ stuff, filter, ow }) {
  const r = []

  stuff.forEach((m) => {
    if (m.name.toLowerCase().indexOf(filter.toLowerCase()) == -1) {
      return
    }
    if (m.watched && ow) { return }
    r.push(<MovieObj movie={m} key={m.name} />)
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rating</th>
          <th>Release Date</th>
          <th>Watched?</th>
        </tr>
      </thead>
      <tbody>
        {r}
      </tbody>
    </table>
  )
}

let movieList = [
  { name: "Cool Movie 123", watched: false, rating: "0/10", rdate: "05/05/2005" },
  { name: "Stupid Person's Movie", watched: true, rating: "11/10", rdate: "09/09/2009" },
  { name: "The Rising 1", watched: false, rating: "9/10", rdate: "02/11/1992" },
  { name: "The Rising 2", watched: false, rating: "0/10", rdate: "09/02/2004" },
  { name: "The Rising 3", watched: true, rating: "8/10", rdate: "12/09/2005" },
  { name: "The Rising 1: Reboot", watched: false, rating: "4/10", rdate: "02/11/2006" },
  { name: "The Rising 4", watched: false, rating: "1/10", rdate: "12/01/2010" },
  { name: "The Rising Prologue", watched: false, rating: "2/10", rdate: "05/08/2016" },
  { name: "The Rising Origins", watched: true, rating: "8/10", rdate: "04/05/2020" },
]

export default function App() {
  return <ThyList movies={movieList} />
};
