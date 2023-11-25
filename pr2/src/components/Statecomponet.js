import React, { Component } from 'react';

class Statecomponet extends Component {
    constructor(){
         super()
          this.state={
            name :"rutvik"
          }

    }
    render() {
         const changename =()=>{
               this.setState({name:this.state.name});
         }

        return (
            <div>
                 <h3>Name is :-{this.state.name}</h3>
                 <input type="text" onChange={(i)=>this.setState({name:i.target.value})}/> <hr />
            </div>
        );
    }
}

export default Statecomponet;