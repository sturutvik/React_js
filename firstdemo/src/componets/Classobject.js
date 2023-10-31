import React, { Component } from 'react';

class Classobject extends Component {
    render() {
        const arr = ["abc" ,"xyz" ,"pqr"];
        const [a,b,c] = arr
        return (
            <div>
                
            <h3> a is --{a}</h3>
            <h3> b is --{b}</h3>
            <h3> c is --{c}</h3>
                
            </div>
        );
    }
}

export default Classobject;

