import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Form() {
    const [inputs, setInputs] = useState({});

    const [alluserdata, setUserdata] = useState(JSON.parse(localStorage.getItem('UserInfo')))
    const [editMode, setEditMode] = useState(false); 
    const [editIndex, setEditIndex] = useState(null); 
    const navigate = useNavigate ()
    const submitData = (e) => {
        e.preventDefault();
      
     
        const retrievedData = JSON.parse(localStorage.getItem('UserInfo')) || [];
      
        const updatedData = [...retrievedData]; // Create a copy of retrievedData
      
        if (editMode && editIndex !== null) {
          updatedData[editIndex] = { ...inputs};
        } else {
          updatedData.push({ ...inputs });
        }
      
        localStorage.setItem('UserInfo', JSON.stringify(updatedData));
        setUserdata(updatedData);
        setInputs({});
      
      
        const form = document.getElementById('frm');
        if (form) {
          form.reset();
        }
        navigate('/Table');
      };
    const empdata = JSON.parse(localStorage.getItem("UserInfo"));
    const setData = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name
        setInputs(i => ({ ...i, [name]: value }))
    }
  
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-3 bg-secondary'>
                    <form name="frm" id='frm' onSubmit={submitData}>

                        <label htmlFor="" style={{ color: "blue", width: 100 }}>Name:-</label>
                        <input type="text" name="name" className='mt-5' style={{ height: 30, width: 200 }} value={inputs.name} onChange={setData} placeholder='Enter Your Name' />
                        <br />
                        <br />
                       
                        <br /><br />
                        <label htmlFor="" style={{ color: "blue", width: 100 }}>Email:-</label>
                        <input type="email" style={{ height: 30, width: 190 }} name="email" id="" value={inputs.email} onChange={setData} placeholder='Enter Email Address' />
                        <br />
                        <br />
                        <label htmlFor="" style={{ color: "blue", width: 100 }}>Password:-</label>
                        <input type="password" style={{ height: 30, width: 190 }} name="password" id="" value={inputs.password} onChange={setData} placeholder='Enter Password' />
                        <br />
                        <br />
                       
                        <br />
                     
                        <br />
                        <label htmlFor="" style={{ color: "blue", width: 100 }}>Address:-</label>
                        <textarea name="address" rows={2} cols={20} value={inputs.address ? inputs.address : ''} defaultValue={''} onChange={setData} />
                        <br />
                        <br />
                        <button type="submit" className='btn btn-info' defaultValue="submit">button</button>
                    </form>
                </div>
                <div className='col-9 bg-warning pt-5 d-flex justify-content-center align-items-start padding-top'>
                   
                </div>
            </div>
        </div>
    )
}

export default Form;