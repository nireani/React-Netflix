import React, { Component } from 'react';

class MovieDetails extends Component {
    render() {
        let id = this.props.match.params.id
        let m = this.props.catalog[id]
        console.log(m.descrShort);
        return (
          

                <div  className="movieDetailsContainer">
                    <div className="title">{m.title}   -  ({m.year})</div>
                    <img className="detailsPic" src={m.img} alt="movie pic"></img>
                    <div className="descrShort">{m.descrShort}</div>
                </div>
                )}

                    
    }


                    export default MovieDetails;