import React,{Component} from 'react';

class Aoa extends Component{
    render(){

        let users = {
            shazad : {
                name : 'Shiraz',
                id1: '2323'
            },
            asif : {
                name : 'aftab',
                id1: '2324'
            }
        }

        let seluser = users[this.props.match.params.id];
        
        return(
        <div>
                <h1>{seluser.name} {seluser.id1}</h1>
                <h1>Nikal</h1>
        </div>
        
        )
        }
}

export default Aoa;