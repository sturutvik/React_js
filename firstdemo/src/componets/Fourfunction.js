import React from 'react';

function Fourfunction() {
    const arr = [
        {
            name: "rutvik",
            age: 20,
            salary: 20000
        },
        {
            name: "rutvik sasani",
            age: 21,
            salary: 21000
        }
    ]
    const result = arr.filter((i) => {
        return i.name == "rutvik sasani"

    })

    let arr1 = [10, 20, 30, 40];
    const res = arr1.reduce((total, arr1) => total + arr1)

    return (
        <div>
            <h3>Filter Function</h3>
            <ul>
                {
                    result.map((i, index) => {
                        return (
                            <div>
                                <li key={index}>{i.name}</li>
                                <li key={index}>{i.age}</li>
                            </div>
                        )
                    })
                }
            </ul><hr />
            <h3>Reduce Function</h3>
            Result is:--{res}
        </div>
    );
}

export default Fourfunction;