import React from 'react'
import uploadimg from '../Images/Upload-removebg-preview.png';

function Form({ onFileChange }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onFileChange(file);
  };
  return (
    <>
        
        <p>The model should predict the sentiment<br></br> of a sentence as “positive”, “negative”, or “neutral”.</p><br></br>
        
        <div >
          <img className="uploadImg" src={uploadimg}/>
        </div>

        <form>
          <label htmlFor="file-upload"><h2>UPLOAD FILE</h2></label>
          <input type="file" id="file-upload"  onChange={handleFileChange}  name="file-upload" accept="Zip" />
        </form>
    </>
  )
}

export default Form;
