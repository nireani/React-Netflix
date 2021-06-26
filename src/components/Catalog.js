import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Movie from "./Movie"

class Catalog extends Component {

    constructor() {
        super()
        this.state = {

            filterBy: ""

        }

    }



    handleRent = (id, rent, user) => {
        this.props.handleRent(id, rent, user)
    }
    filteredMovie = (e) => {
        this.setState({
            filterBy: e.target.value.toLowerCase()
        })
    }

    render() {
        let user = this.props.match.params.user
        let budget = this.props.catalog[0][user].budget


        return (
            <div>
                
                <Link className="whiteLink" to="/"><span className="catalog"><FontAwesomeIcon icon={faHome} color="white" /></span></Link>
                {<span className="welcome"> Hi {user}! your budget is  {budget > 0 ? budget  : "0 , you cant rent anymore movies"} </span>}
               
                {this.props.catalog[0][user].catalog.some(m => m.isRented) ? <div className="rentedContainer"><div className="rentedTitle">Rented:</div>
                    {this.props.catalog[0][user].catalog.filter(m => m.isRented).map(m => <Movie user={user} filter={this.state.filter} handleRent={this.handleRent} rent={m.isRented} id={m.id} img={m.img} ></Movie>)}
                </div> : null}
                <div className="CatalogTitle">Catalog:<input onChange={this.filteredMovie} placeholder="search for a movie"></input>
                </div>
                <div className="CatalogContainer" >
                    {this.state.filterBy === "" ? this.props.catalog[0][user].catalog.filter(m => !m.isRented).map(m => <Movie user={user} handleRent={this.handleRent} rent={m.isRented} id={m.id} img={m.img} ></Movie>) : this.props.catalog[0][user].catalog.filter(m => !m.isRented && m.title.toLowerCase().includes(this.state.filterBy)).map(m => <Movie user={user} handleRent={this.handleRent} rent={m.isRented} id={m.id} img={m.img} ></Movie>)}
                </div>
            </div>
        )

    }

}
export default Catalog;