import React, { useState } from 'react'
import axios from 'axios';

export default function Upload() {

    const [image, setimage] = useState(null);
    const handleOnChange = (event) => {
        const image = event.target.files[0]
        if (image.type !== "image/png") {
            setimage(null)
            window.location.reload()
            return alert("Please upload a proper image.")
        }
        setimage(image);
        console.log(image)
    }
    const handleOnClick = async() => {
        if (!image) {
            return alert("Please upload an image to move to next step.")
        }
        const response = await axios.post("http://localhost:1000/upload", {image})
        console.log(image)
        console.log(response.data.message);
    }
    return (
        <div>
            <h1>Upload</h1>
            <input type='file' onChange={handleOnChange} />
            <button onClick={handleOnClick}>Submit</button>
        </div>
    )
}
