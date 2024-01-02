
import React, { useState, useEffect } from "react";

function Table() {
  const [empdata, setEmpdata] = useState([]);

  const [alluserdata, setUserdata] = useState(
    JSON.parse(localStorage.getItem("UserInfo"))
  );
  const [editIndex, setEditIndex] = useState(null);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "", 
    address: "",
  });

  useEffect(() => {
    const dataFromLocalStorage =
      JSON.parse(localStorage.getItem("UserInfo")) || [];
    setEmpdata(dataFromLocalStorage);
  }, []);

  const deleteinfo = (index) => {
    const updatedData = [...empdata];
    updatedData.splice(index, 1);
    setEmpdata(updatedData);
    localStorage.setItem('UserInfo', JSON.stringify(updatedData));
  };

  const editinfo = (index) => {
    setEditIndex(index);
    const editingData = empdata[index];
    setInputs(editingData);
  };

  const updateData = (e) => {
    e.preventDefault();
    const updatedData = [...empdata];
    updatedData[editIndex] = inputs;
    setEmpdata(updatedData);
    localStorage.setItem('UserInfo', JSON.stringify(updatedData));
    setEditIndex(null);
    setInputs({
      name: "",
    
      email: "",
      password: "",
     
      
      address: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };
  const setData = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name
    setInputs(i => ({ ...i, [name]: value }))
}


  return (
    <div className="App">
      <h5>User Table</h5>
      <table border={2}>
        <thead style={{backgroundColor:"grey"}}>
          {/* Table headers */}
          <th>id</th>
          <th>Name:</th>
          <th>Email:</th>
          <th>Password</th>
          <th>Address:</th>
          <th>Action:</th>
        </thead>
        <tbody>
          {empdata.map((i, index) => (
            <tr key={index} style={{ textAlign: "center" }}>
              {/* Table data */}
              <td>{index + 1}</td>
              <td>{i.name}</td>
              <td>{i.email}</td>
              <td>{i.password}</td>    
              <td>{i.address}</td>
              <td>
             
                <button onClick={() => deleteinfo(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     
      
    </div>
  );
}

export default Table;