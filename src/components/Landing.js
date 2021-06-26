import React, { Component } from 'react';
import { Link} from 'react-router-dom';


class Landing extends Component {
    constructor(){
        super()
        this.state={
            users:[{name:"Yam"},{name:"Vio"},{name:"Nir"}]

        }
    }

    render() {
        return (
            <div>
            <div className="usersContainer">
               {this.state.users.map(u =><Link to={`/Catalog/${u.name}`}> <div className={u.name}key={u.name}><p key={u.name}>{u.name}</p></div></Link>)}                                                 
            </div>
            </div>
        );
    }
}

export default Landing;