import React from 'react';
import PropTypes from 'prop-types';

export function Movies (props){

    return(
        <div id="movies">
            <table border="2">
                <thead>
                    <tr>
                        <th>Movie</th>
                        <th>Year</th>
                        <th>Cast</th>
                        <th>Poster</th>
                    </tr>
                </thead>
                <tbody>
                   {props.film.map((mov, i)=>{
                       return(
                           <tr key={i}>
                               <td>{mov.name}{mov.part}</td>
                               <td>{mov.year}</td>
                               <td>
                                   <ul>
                                      <li>{mov.cast.actor1}</li> 
                                      <li>{mov.cast.actor2}</li> 
                                      <li>{mov.cast.actor3}</li> 
                                   </ul>
                               </td>
                               <td>
                                   <img src={mov.poster} alt="poster"/>
                               </td>
                           </tr>
                       )
                   })}
                </tbody>
            </table>
            <footer>{props.signature}</footer>
        </div>
    )
}

Movies.propTypes = {
    film: PropTypes.array.isRequired,
    signature: PropTypes.string
}