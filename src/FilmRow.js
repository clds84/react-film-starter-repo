import React, { Component } from 'react'
import Poster from './Poster'
import Fave from './Fave'
export default class FilmRow extends Component {
    render() {
    
    const HandleDetailsClick = (e) => {
        console.log('Fetching details for ', e )
    }
    
        return (
            <div  className="film-row">
                <Poster url={this.props.film.poster_path}/>
                <div onClick={ () => HandleDetailsClick(this.props.film)}  className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{this.props.film.release_date.substring(0,4)}</p>
                </div>
                <Fave  />
            </div>
        )
    }
}