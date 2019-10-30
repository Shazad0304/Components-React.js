import React,{Component } from 'react'




class Typ extends Component{

    constructor(props){
        super(props)
        this.state = {
            ii : ''
        }
    }

nikal(event){
  this.setState(
      {
          ii : event.target.value 
      }
  )
}
    render(){
        return(
            <div>
                <h1>{this.props.ok}</h1>
                <h1>{this.props.ok1}</h1>
                <input onChange={this.nikal.bind(this)} type='text' value={this.state.ii}/>
                <h1>{this.state.ii}</h1>
            </div>
        );
    }
}


export default Typ;