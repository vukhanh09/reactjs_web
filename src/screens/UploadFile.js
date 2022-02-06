
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import urlTest from '/home/vukhanh/Develop/nodejs_newspaper/public/uploads/1642747951424-485592083-gen 2.png'
     
function UploadFile(){
    const navigator = useNavigate()
    const routeUpload = 'http://localhost:9091/api/uploadFile/'

    const [url,setUrl] = useState('')

    const submitFile = ()=>{
        var formFile = new FormData();
        var imagefile = document.getElementById('formFile');
        formFile.append("formFile", imagefile.files[0]);
        axios.post(routeUpload, formFile, {
            headers: {
            'Content-Type': 'multipart/form-data'
            }
        })
        .then(res=>{
            setUrl(res.data.data)
        })
    }

    // const urlTest = require('/home/vukhanh/Develop/nodejs_newspaper/public/uploads/1642747951424-485592083-gen 2.png')
    return(
        <div class="mb-3">
            <label for="formFile" class="form-label">Default file input example</label>
            <input class="form-control" type="file" id="formFile" name="formFile"/>
            <button value="Upload a file" onClick={submitFile}>Upload a file</button>
            {
                url.length !=0 && <img src={url}/>
            }
            {/* <img src={'1642748443147-58536659-huy.png'}/> */}

        </div>

    )

}

export default UploadFile