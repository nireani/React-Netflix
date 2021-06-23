import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Movie extends Component {

    handleRent=()=>{
this.props.handleRent(this.props.id,this.props.rent)
    }

    render() {
        return (
            <div className="CatalogMoviePicContainer">
               
                <div className="imgContainer">
                <Link to={`/MovieDetails/${this.props.id}`} ><div className="infoIcon"> <FontAwesomeIcon  icon={faInfoCircle} color="white" /></div></Link>

                   <div onClick={this.handleRent} className="rentIcon">{this.props.rent?<FontAwesomeIcon icon={faMinusCircle} color="white" />:<FontAwesomeIcon icon={faPlusCircle} color="white" />}</div>
                   <div><img  className="CatalogMoviePic" alt="Movie Pic"src={this.props.img}></img></div>
                   </div>
               
             
             </div>
        );
    }
}

export default Movie;