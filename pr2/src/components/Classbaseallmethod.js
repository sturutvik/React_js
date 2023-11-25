import React, { Component } from 'react';

class Classbaseallmethod extends Component {
    render() {
            const addtion = () => {
             let a = 10;
             let b = 20;
             let c = a + b;
            return c;
         };
           const sub =()=>{
           let  a =30;
           let  b=20;
           let  c=a-b;
           return c;
        }
          const multiplication = () => {
            let a = 30;
            let b = 20;
            let c = a * b;
            return c;
          };
             
            const division = () => {
            let a = 30;
            let b = 20;
            let c = a / b;
            return c;
     };


        return (
            <div>
                 <h2> Classbase All Method:</h2>
                 <h3> Addtion is:-{addtion()}</h3>
                 <h3> subtraction is:-{sub()}</h3>
                 <h3> Multiplication is:-{multiplication()}</h3>
                 <h3> Division is:-{division()}</h3> <hr />
            </div>
        );
    }
}

export default Classbaseallmethod;