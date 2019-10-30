import React,{Component} from 'react';


class Ao extends Component
{
    constructor(props){
        super(props)
        this.state = {
            name : 'shazad'
        }
    }
  
    dekho(){

        this.props.history.push('/contact/nikal');
    }
    chng(event)
    {
        this.setState({
        name : event.target.value
        });
        
    }
    
    render(){
        return(
            <div>
                <h2>Yeh hai About</h2>
                <br/>
                <button onClick={this.dekho.bind(this)}>Contact khol</button>
                <input type='text' onChange={this.chng.bind(this)} value={this.state.name}/>
            </div>

    );
    }
}


export default Ao;