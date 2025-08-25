import logo from './FG.svg';
import randimg from './logo192.png'
import './App.css';

function ThyList({movies}) {

  return (
    <div className="App">
      <MovieTable stuff={movies} filter=''/>
    </div>
  );
}

function MovieObj({ movie }){
  return(
    <tr>
      <td>{movie.name}</td>
      <td>{movie.rating}</td>
      <td>{movie.rdate}</td>
      <td><input type='checkbox'></input></td>
    </tr>
  )
}

function MovieTable({stuff, filter}){
  const r = []

  stuff.forEach((m)=>{
    if(m.name.toLowerCase().indexOf(filter.toLowerCase()) == -1){
      return
    }
    r.push(<MovieObj movie={m} k={m.name}/>)
  })

  return(
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
  {name: "Cool Movie 123", watched: false, rating: "0/10", rdate: "05/05/2005"},
  {name: "Stupid Person's Movie", watched: false, rating: "11/10", rdate: "09/09/2009"}
]

export default function App(){
  return <ThyList movies={movieList} />
};
