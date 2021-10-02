
import React, {useState}from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TextForm(props) {
    // Declare a new state variable, which we'll call "count"
const [text, setText] = useState("");//* Here text is a state variable and setText is function to update the text value
//* we cannot use a variable text to update the value of state instead we should use setText() function
   // setText("Hey Amrit");
   const handleUpButtonClick =()=>{
   // console.log("Button Clicked"+text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Text has been converted to upperCase","success")
}
const handleLoButtonClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Text has been converted to lowerCase","success")
}
const handleOnChange =(event)=>{
    //console.log("On change");
    setText(event.target.value)
    //*In order to write  in textArea we have to make handler function in our case the function is handleOnChange() which enable us to write with in our text area otherwise we cannot write
}
const handleCopyButtonClick=()=>{
    navigator.clipboard.writeText(text);
    // alert("Text Copied!")
    toast.success('text copied!');
    props.showAlert("Copied to the clipBoard!","success")
}
const countWords=(str)=>{
    str = str.replace(/(^\s*)|(\s*$)/gi,"");
         str = str.replace(/[ ]{2,}/gi," ");
         str = str.replace(/\n /,"\n");
         return str.split(' ').length;
}
    return (
        <>
        <div className="container" style={{ color:props.mode==='light'?'#271a6f':'white'}}>
        <div className="mb-3">
  <label htmlFor="myBox" className="form-label"><h3>{props.heading}</h3></label>
  <textarea className="form-control my-3" style={{ backgroundColor:props.mode==='light'?'white':'#271a6f', color:props.mode==='light'?'#271a6f':'white'}} onChange={handleOnChange} value={text} id="exampleFormControlTextarea1" rows="12"></textarea>
</div>
<button className="btn " style={props.color} onClick={handleUpButtonClick}>convertToUppercase</button>
<button className="btn  mx-3" style={props.color} onClick={handleLoButtonClick}>convertToLowercase</button>
<button className="btn  " style={props.color} onClick={handleCopyButtonClick}>Copy</button>
<ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
        </div>
        <div className="container"  style={{ color:props.mode==='light'?'#271a6f':'white'}}>
        <h3>Your text Summary:</h3>
        <p>{text===""?0:countWords(text)} words and {text.length} characters</p>
        <p>{text===""?0:0.008 * countWords(text)} Minutes Read</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:'Enter your text to preview it here.'}</p>
        </div>
        </>
    )
}
