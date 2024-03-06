import React, { useState, useEffect } from 'react';
import { db } from "./firebase/Firebase"
import { collection, addDoc, query, onSnapshot, deleteDoc, doc, updateDoc } from 'firebase/firestore';

function Database(props) {
     const [Subject, setSubject] = useState("");
     const [AllUsers, setAllUsers] = useState([]);
     const [id, setid] = useState("")
    
      // inset//
     const handleSubmit = async (e) => {
          e.preventDefault();
          if(id!==""){
               // update //
           await updateDoc(doc(db, "cetagory",id),{Subject:Subject})
           setSubject("");
           setid("");
           
          }else{
               // insert //
               if (Subject !== "") {
                    addDoc(collection(db,  "cetagory"), {
                         Subject,
                         completed: false,
                    });
                   
               }
          }
          
     }
      // display //
      useEffect(() => {
        const q = query(collection(db, "cetagory"));
        const unsub = onSnapshot(q, (querySnapshot) => {
             let todosArray = [];
             querySnapshot.forEach((doc) => {
                  todosArray.push({ ...doc.data(), id: doc.id });
             });
             setAllUsers(todosArray);
        });
        return () => unsub();
   }, []);
   // delete //
     const handleDelete = async (id) => {
          await deleteDoc(doc(db,  "cetagory", id));
     }
     // edit //
   const handleEdit = async (id) => {
     let q = query(collection(db,"cetagory" ))
     const  unsub = onSnapshot(q,(querySnapshot)=>{
          querySnapshot.forEach((doc) => {
              if(doc.id==id){
               setSubject(doc.data().Subject);
              }
          })
          
     })
     setid(id);
   }


     return (
          <>
               <form onSubmit={handleSubmit}>
                    <div className="input-container">
                         <input type="text"
                              placeholder='Enter your name'
                              value={Subject}
                              onChange={(e) => setSubject(e.target.value)}
                         />

                    </div>
                    <div className="btn-container">
                         <button>Add Todo</button>
                    </div>
               </form>
               <table  border={2}>
                    <thead >
                         <tr>
                              <th>#</th>
                              <th>Id</th>
                              <th>subject</th>
                              <th>Status</th>
                              <th>Action</th>
                         </tr>
                    </thead>
                    <tbody>
                         {AllUsers.map((i, index) => (
                              <tr key={i.id}>
                                   <td>{index + 1}</td>
                                   <td>{i.id}</td>
                                   <td>{i.Subject}</td>
                                   <td>{(i.completed) ? "Yes" : "No"}</td>
                                   <td><button type='button' class="btn btn-outline-primary" onClick={() => handleEdit(i.id)}>EDIT</button><button type='button ' class="btn btn-outline-danger" onClick={() => handleDelete(i.id)}>Delete</button></td>
                                   
                              </tr>
                         ))}
                    </tbody>
               </table>
          </>
     );
}

export default Database;