import React, { Component } from 'react'

export default class Person extends Component {
    state ={
        fullName:'Santama',
        bio:'biographie',
        imgSrc: 'https://i.redd.it/qzb9rcz934221.jpg',
        profession:'hero',
        shows:true

    }
    
    render() {
        return (
            <div>
                <div className="d-flex m-5">
                <img  
                width="200"
                className={this.state.shows? "rounded-circle border me-2" : "invisible"}
                src={this.state.imgSrc} alt=""/>
                <div className="m-5 border border-success  border-5">
                <h1>Fullname:  {this.state.fullName}</h1>
                <h1>Bio:  {this.state.bio}</h1>
               
                
                <h1>Profession:  {this.state.profession}</h1>
                <button className={this.state.shows?"btn btn-danger":"btn btn-success"} 
                onClick={()=>this.setState({shows : !this.state.shows})}>
                    {this.state.shows?"cacher":"afficher"}
                    </button>
                </div>
                </div>
            </div>
        )
    }
}
