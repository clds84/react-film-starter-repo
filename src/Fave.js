import React, { Component } from 'react'

export default class Fave extends Component {
    render() {
        const handleClick = (e) => {
           console.log('clicked ', e)
           
       }
        return (
            <div className="film-row-fave add_to_queue">
                <p onClick={ () => handleClick('fave')} className="material-icons">add_to_queue</p>
            </div>
        )
    }
}