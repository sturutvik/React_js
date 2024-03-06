import React, { useState } from 'react'
import { images } from './firebase/Firebase'
import { ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'


export default function Image() {
    const [image,setimage]=useState("")
    const handleimage =()=>{
        const img = ref(images,v4())
        uploadBytes(img,image)
    }
  return (
    <div>
        <input type ="file" onChange={(e)=>setimage(e.target.files[0])}/>
        <br/>
        <button onClick={handleimage}>Save</button>
    </div>
  )
}
