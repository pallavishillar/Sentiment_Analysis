import React from 'react'
import uploadimg from '../Images/UploadImage-removebg-preview.png';

function Form() {
  return (
    <>
        <div >
          <img className="uploadImg" src={uploadimg}/>
        </div>

        <form>
          <label htmlFor="file-upload"><h2>UPLOAD FILE</h2></label>
          <input type="file" id="file-upload" name="file-upload" accept="Zip" />
        </form>
    </>
  )
}

export default Form;
