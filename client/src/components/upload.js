import React, { useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Upload() {
    const [file, setfile] = useState(null);
    function previewfile(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setfile(reader.result);
        }
        
    }
    const handleOnChange = (event) => {
        const file = event.target.files[0]
        console.log(file.size)
        if(file.size>1048576){
            return toast.error("Please upload image under 10MB.")
        }
        setfile(file);
        previewfile(file)
    }
    const handleOnClick = async () => {
        try {
            toast.loading("Uploading profile picture")
            if (!file) {
                return toast.error("Uploading a profile picture is mandatory.")
            }
            const response = await axios.post("http://localhost:1000/api/upload", { file })
            toast.dismiss();
            toast.success(response.data.message)
            console.log(response.data.faceData)
        } catch (error) {
            console.log(error);
            toast.dismiss();
            toast.error(error.response.data.message)
        }
    }
    return (
        <div>
            <h1>Upload</h1>
            <input type='file' accept='image/png, image/jpeg' onChange={handleOnChange} />
            <button onClick={handleOnClick}>Submit</button><br/>
            {file && <img src={file} style={{height:"100px", aspectRatio:'1/1', objectFit:"cover"}} alt='profilepic' />}
        </div>
    )
}
