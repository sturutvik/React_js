import React, { Component } from 'react';

class Classobject extends Component {
    render() {
        const arr = ["abc" ,"xyz" ,"pqr"];
        const [a,b,c] = arr //sepding
        const arr1 = [10,20,30]
        const arr2 = [...arr1, ...arr] // marging 
        return (
            <div>
                
            <h3> a is --{a}</h3>
            <h3> b is --{b}</h3>
            <h3> c is --{c}</h3>
            <h3>array list</h3>
            <ul>
                {
                    arr2.map((i)=>{
                        return<li>{i}</li>
                    })
                }
            </ul>
                
            </div>
        );
    }
}

export default Classobject;

