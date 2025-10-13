import './App.css';
import { useState } from 'react';



function ThyList({ movies }) {
  const [filtered, setFilter] = useState('')
  const [OnWt, setOW] = useState(false)
  const [list, sList] = useState(movies != null ? movies : [])

  function saveList() {
    window.localStorage.setItem('testapp1.list', JSON.stringify(list))
    getList()
  }
  function getList() {
    sList(JSON.parse(window.localStorage.getItem('testapp1.list')))
  }

  return (
    <div className="App">
      <TheBar setFilter={setFilter} filter={filtered} setOW={setOW} ow={OnWt} />
      <MovieTable stuff={list} filter={filtered} ow={OnWt} saveList={saveList} />
      <Adder list={list} saveList={saveList} />
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

function Adder(l) {
  let [name, sname] = useState('')
  let [rating, srating] = useState('')
  let [rdate, srdate] = useState('')

  function addMovie() {
    let flag = false
    if (name === '' || name === undefined || name == null) return
    Object.values(l.list).forEach((i) => {
      if (i.name.toLowerCase() === name.toLowerCase()) {
        alert("An item with this name already exists!")
        flag = true
      }
    })
    if (flag) return
    l.list.push(
      { name: name, rating: rating, rdate: rdate, watched: false }
    )
    l.saveList()
  }

  function changeVal(e, val) {
    switch (val) {
      case 'name':
        sname(e.target.value)
        break
      case 'rating':
        srating(e.target.value)
        break
      case 'rdate':
        srdate(e.target.value)
        break
      default:
        break
    }
  }

  return (
    <table className='addTable'>
      <thead>
        <tr>
          <th><input className='newInput' onChange={e => { changeVal(e, 'name') }} value={name} placeholder='Movie Name...' /></th>
          <th><input className='newInput' onChange={e => { changeVal(e, 'rating') }} value={rating} placeholder='??/??' /></th>
          <th><input className='newInput' onChange={e => { changeVal(e, 'rdate') }} value={rdate} placeholder='00/00/0000' /></th>
          <th><button className='addButton2' onClick={() => { addMovie() }}>+</button></th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  )
}

function MovieObj({ saveList, movie, list }) {
  let [status, sStatus] = useState(movie.watched)
  let [isEdit, sEdit] = useState(false)

  return (
    <tr>
      <td>{!isEdit ? movie.name : <EditBox movie={movie} vr='name' list={list} sList={saveList} />} <EditButton movie={movie} isEdit={isEdit} setEdit={sEdit} sList={saveList} /></td>
      <td>{!isEdit ? movie.rating : <EditBox movie={movie} vr='rating' list={list} sList={saveList} />} <EditButton movie={movie} isEdit={isEdit} setEdit={sEdit} sList={saveList} /></td>
      <td>{!isEdit ? movie.rdate : <EditBox movie={movie} vr='rdate' list={list} sList={saveList} />} <EditButton movie={movie} isEdit={isEdit} setEdit={sEdit} sList={saveList} /></td>
      <td><input type='checkbox' defaultChecked={status} onChange={handleChange}></input></td>
    </tr>
  )

  function handleChange() {
    movie.watched = !movie.watched
    sStatus(movie.watched)
    saveList()
  }
}

function EditBox({ movie, vr, list, sList }) {
  const [name, sName] = useState(movie[vr])
  function editName(e) {
    if (e.target.value === '' && vr === 'name') {
      if (window.confirm("Do you want to delete this entry?")) { //I could add another button for it, but i think this works nicely. It might be annoying for some users, though.
        list.forEach((i, x) => { if (i.name === name) list.splice(x, 1) }); sList(); return
      }
    }
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
    if (l.isEdit) l.sList()
    l.setEdit(!l.isEdit)
    e.target.innerHTML = l.isEdit ? '✎' : '✓'
  }
  return (
    <button className='addButton' onClick={e => { invokeEditor(e) }}>✎</button>
  )
}

function MovieTable({ stuff, filter, ow, saveList }) {
  const r = []

  stuff.forEach((m) => {
    if (m.name.toLowerCase().indexOf(filter.toLowerCase()) === -1) return
    if (m.watched && ow) return 
    r.push(<MovieObj movie={m} key={m.name} list={stuff} saveList={saveList} />)
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

export default function App() {
  return <ThyList movies={JSON.parse(window.localStorage.getItem('testapp1.list'))} />
};
