import React, { Component } from 'react';
import Movie from "./Movie"

class Catalog extends Component {
    constructor() {
        super()
        this.state = {


        }
    }
    handleRent=(id,rent)=>{
        this.props.handleRent(id,rent)
    }
    render() {


        return (
            <div>
               {this.props.catalog.some(m=>m.isRented)?<div className="rentedContainer"><div className="rentedTitle">Rented:</div>
                    {this.props.catalog.filter(m=> m.isRented).map(m=><Movie handleRent={this.handleRent} rent={m.isRented} id={m.id} img={m.img} ></Movie>)}
                </div>:null}
              
                <div className="CatalogTitle">Catalog:</div>
                <div className="CatalogContainer" >
                    {this.props.catalog.filter(m=>!m.isRented).map(m => <Movie handleRent={this.handleRent} rent={m.isRented} id={m.id} img={m.img} ></Movie>)}
                </div>
            </div>
        )

    }

}
export default Catalog;