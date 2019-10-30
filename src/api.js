import React,{Component} from 'react';


class Api extends Component{
constructor(props){
    super(props);
    this.state = {
        vr: [],
        vr1: [],
        chck: 0
            
        
    }
}

componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(
        (result) => {this.setState({vr : result.map(re => re.name),vr1 : result.map(re => re.id)})
})


}

render(){
 
    return(
        
        <div>
            {this.state.vr} {this.state.vr1[1]}

        </div>
    )
}


}

export default Api;