  import React,{useState} from 'react'

  export default function TextFrom(props) {
      const handleUpClick=()=>{
      console.log("UppperCase was Click"+ text);
      let newText = text.toUpperCase();
      setText(newText)
      props.showAlert("converted into UpperCase","sucess")
      }   
      const handleLoClick=()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted into LowerCase","sucess")
      }   

      const handleClClick=()=>{
      
        let newText = ''
        setText(newText)
        props.showAlert("text clear","sucess")
      }  
      const handleOnChange=(event)=>{
          setText(event.target.value)
      }
      const handleExtraSpace=()=>{
        let NewText=text.split(/[ ]+/);
        setText(NewText.join(""))
      props.showAlert("Extra Spacees are removep","sucess")
      } 
  const [text ,setText] = useState("Enter the Text Here");
  //setText=('text on that will change');/in way will change the text using setText

    return (
      <>
      <div className='container'style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
      <h1>{props.heading}</h1>
      <div className ="mb-3">
    <textarea className="form-control"value={text} onChange ={handleOnChange} style={{backgroundColor:props.mode === 'dark' ? '#13466e' : 'white',color:props.mode === 'dark' ? 'white' : 'black'}} id="mybox" rows="10"></textarea>
      </div>
      <div className='my-3'>
      <button disabled ={text.length===0} type="button" class="btn btn-primary my-3" onClick = {handleUpClick}>Convert to Uppercase</button>
      <button disabled ={text.length===0} type="button" class="btn btn-primary" onClick = {handleLoClick}>Convert to Lowercase</button>
      <button disabled ={text.length===0} type="button" class="btn btn-primary" onClick = {handleClClick}>Clear text</button>
      <button disabled ={text.length===0} type="button" class="btn btn-primary" onClick = {handleExtraSpace}>Remove Extratext</button>
      
      </div></div> 
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008* text.split("").filter((element)=>{return element.length!==0}).length} Minute read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to Preview '}</p>
      </div>
      </>
    )
  }