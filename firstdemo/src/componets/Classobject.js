import React, { Component } from 'react';

class Classobject extends Component {
    render() {
        const arr = ["abc" ,"xyz" ,"pqr"];
        const [a,b,c] = arr //sepding
        const arr1 = [10,20,30]
        const arr2 = [...arr1, ...arr] // marging 
        const emp =[{
            name:"rutvik",
            age:21,
            salary:77777
        }]
        return (
            <div>
             <h3>array list:</h3>  
            <h3> a is --{a}</h3>
            <h3> b is --{b}</h3>
            <h3> c is --{c}</h3><hr />
            
            <ul>
                { 
                emp.map((e)=>{
                     return(
                        <div>
                             <h3>array object</h3><hr /> 
                            <h3>name is:{e.name}</h3>
                            <h3> age is:{e.age}</h3>
                            <h3>salary is:{e.salary}</h3>
                        </div>
                     )
                 } )
                }
            </ul>
                
            </div>
        );
    }
}

export default Classobject;

