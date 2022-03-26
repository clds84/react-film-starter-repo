import React, { Component } from 'react'

export default class Fave extends Component {
    constructor(props){
        super(props)
        this.state={
        isFave: false
        }
        
    }
    handleClick = (isFave) => {
       this.setState((prevState)=>{ return {isFave: !prevState.isFave} })
        console.log('prev state was', isFave)
  
  
}
    render() {
        return (
            <div className={`'film-row-fave' ${this.state.isFave === true ? 'remove_from_qeue' : 'add_to_queue'}`}>
                <p onClick={ () => this.handleClick(this.state)} className= "material-icons">{this.state.isFave === true ? 'remove_from_qeue' : 'add_to_queue'}</p>
            </div>
        )
    }
}