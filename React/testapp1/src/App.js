import logo from './FG.svg';
import randimg from './logo192.png'
import './App.css';
import { useState } from 'react';

function ThyList({ movies }) {
  const [filtered, setFilter] = useState('')
  const [OnWt, setOW] = useState(false)
  return (
    <div className="App">
      <MovieTable stuff={movies} filter={filtered} ow={OnWt}/>
    </div>
  );
}

function MovieObj({ movie }) {
  let [status, sStatus] = useState(movie.watched)  

  return (
    <tr>
      <td>{movie.name}</td>
      <td>{movie.rating}</td>
      <td>{movie.rdate}</td>
      <td><input type='checkbox' defaultChecked={status} onChange={handleChange}></input></td>
    </tr>
  )

  function handleChange(){
    console.log('hey')
    movie.watched = !movie.watched
    sStatus(movie.watched)
    console.log(movieList)
    console.log(sStatus)
  }
}

function MovieTable({ stuff, filter, ow }) {
  const r = []

  stuff.forEach((m) => {
    if (m.name.toLowerCase().indexOf(filter.toLowerCase()) == -1) {
      return
    }
    if(m.watched && ow){ return }
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
