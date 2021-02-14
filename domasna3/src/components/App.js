import React from 'react';
import {Movies} from './Movies';

let movies = [
  {
  name: "Harry Potter ",
  part: "and the Sorcerer`s Stone",
  year: 2001,
  cast: {
    actor1: "Daniel Radcliffe",
    actor2: "Rupert Grint",
    actor3: "Emma Watson"},
  poster: "https://upload.wikimedia.org/wikipedia/en/7/7a/Harry_Potter_and_the_Philosopher%27s_Stone_banner.jpg"
  },

  {
    name: "Harry Potter ",
    part: "and the Chamber of Secrets",
    year: 2002,
    cast: {
      actor1: "Daniel Radcliffe",
      actor2: "Rupert Grint",
      actor3: "Emma Watson"},
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Harry_Potter_and_the_Chamber_of_Secrets_movie.jpg/220px-Harry_Potter_and_the_Chamber_of_Secrets_movie.jpg"
  },
  {
    name: "Harry Potter ",
    part: "and the Prizoner of Azkaban",
    year: 2004,
    cast: {
      actor1: "Daniel Radcliffe",
      actor2: "Rupert Grint",
      actor3: "Emma Watson"},
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Prisoner_of_azkaban_UK_poster.jpg/220px-Prisoner_of_azkaban_UK_poster.jpg"
  }
]

export function App (){

  return (
    <div id='app'>
      <h2>Movies</h2>
      <Movies
        film={movies}
        signature={'Made by Katerina 2021'}
      />
    </div>
  )
}