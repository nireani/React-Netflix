import React, { Component } from 'react';
import {  Link } from "react-router-dom";

class MovieDetails extends Component {
    render() {
        let id = this.props.match.params.id
        let user = this.props.match.params.user
        let m = this.props.catalog[0][user].catalog[id]
        return (
            <div>
          <div>
       <Link className="whiteLink" to={`/Catalog/${user}`}><span className="BackToCatalog">Back to Catalog  </span></Link>
       </div>
                <div  className="movieDetailsContainer">
                    <div className="title">{m.title}   -  ({m.year})</div>
                    <img className="detailsPic" src={m.img} alt="movie pic"></img>
                    <div className="descrShort">{m.descrShort}</div>
                </div>
                </div>
                )}

                    
    }


                    export default MovieDetails;