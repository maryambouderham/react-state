import React, { Component } from 'react'
import Image from "./../images/img.jpg"
export default class Person extends Component {
    state ={
        fullName:'maryam',
        bio:'djjiffje',
        imgSrc: Image,
        profession:'dhhzdgyu'

    }
    handleClick = () =>this.setState((this.state.imgSrc)?{imgSrc: false}:{imgSrc:Image})
    render() {
        return (
            <div>
                <h1>Fullname:  {this.state.fullName}</h1>
                <h1>Bio:  {this.state.bio}</h1>
                <h1>image:  {this.state.imgSrc}</h1>
                <h1>Profession:  {this.state.profession}</h1>
                <button className="btn btn-danger" onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}
