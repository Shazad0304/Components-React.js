import React,{Component } from 'react'
import Nav from './navbar-link';

const Temp = ({children}) => 
<div>
<Nav/>
{children}
</div>

class Cal extends Component{
    constructor(props){
        super(props)
        this.state={
            f : 0,
            ff : 0,
            s: 0,
            e: 0,
            m:false
            

        }
    }
    
    save(event)
    {
        this.setState({f : Number(event.target.value)})
    }
    add(){
       
        this.setState({ff: Number(this.state.f), f:'',e: '+'})
    }
    sub(){
       
        this.setState({ff: Number(this.state.f), f:'',e: '-'})
    }
    mul(){
       
        this.setState({ff: Number(this.state.f), f:'',e: '*'})
    }
    divi(){
       
        this.setState({ff: Number(this.state.f), f:'',e: '/'})
    }
    eq(){
        if(this.state.e === '+')
         this.setState({f: Number(this.state.ff+this.state.f)})
        else if(this.state.e === '-')
         this.setState({f: Number(this.state.ff-this.state.f)})
        else if(this.state.e === '*')
         this.setState({f: Number(this.state.ff*this.state.f)})
        else if(this.state.e === '/')
         this.setState({f: Number(this.state.ff/this.state.f)})
        else
         alert('please select opr')
    }

    render(){
        return(
            <Temp>
            <div>
             
            <input type='text' value={this.state.f} onChange={this.save.bind(this)} /><br/>
            <button onClick={this.add.bind(this)}>+</button>
            <button onClick={this.sub.bind(this)}>-</button>
            <button onClick={this.mul.bind(this)}>*</button>
            <button onClick={this.divi.bind(this)}>/</button>
            <button onClick={this.eq.bind(this)}>=</button>
            <a  href={'./app/' + this.state.f}>haha</a>
            
            </div>
            </Temp>
        );
    }
}

export default Cal;