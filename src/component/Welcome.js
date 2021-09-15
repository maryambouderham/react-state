import React, { Component } from 'react'

export default class Welcome extends Component {
    state ={
        name:'maryam'
    }
    handleClick = () =>this.setState({name:'meri'})
    render() {
        return (
            <div>
                <h1>Welcome {this.state.name}</h1>
                <button className="btn btn-danger" onClick={this.handleClick}>changer le nom</button>
            </div>
        )
    }
}
