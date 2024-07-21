
import React , {useState} from 'react'

export default function TextForms(props) {

const changeToUpper = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Changed to UpperCase",'success');
}

const handleOnChange= (e)=>{
    setText(e.target.value)
}
const changeToLower = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Changed to LowerCase",'success');
}

const copyHandle=()=>{
    let text = document.getElementById('Box');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Copied to Clipboard",'success');
}

const removeHandler=()=>{
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    props.showAlert(" Extra spaces removed",'success');
}

const clearText = ()=>{
    let newText = "";
    setText(newText)
    props.showAlert(" Text has been cleared",'success');
}


const [text, setText] = useState("");
const[btnText , setBtnText] = useState("Enable dark mode");

const [myStyle, setMyStyle] =useState({
    color:'black',
    backgroundColor:'white'
})



  return (
    
    // <div style={{backgroundColor:props.mode==='light'?'white':'#272640' , color:props.mode==='light'?'black':'white' }} >
    <div className="container">
    <div  style={{
               backgroundColor:props.mode==='light'?'white':
               props.mode==='red'?'red':
               props.mode==='green'?'green':
               props.mode==='brown'?'brown':
        '#272640',
        color:props.mode==='light'?'black':'white'
     }}>
        <div className="cont" style={{display:'flex' , alignItems:'center',justifyContent:'space-between',myStyle}}>
            <h3>Enter your text to analyze</h3>
            
        </div>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'#fffae5':'darkgrey'}}id="Box" rows="8"></textarea>
  </div> 
  <button className="btn btn-primary"  onClick={changeToUpper} >Convert to Upper case</button>
  <button className="btn btn-primary mx-2" onClick={changeToLower}>Convert to lower case</button>
  <button className="btn btn-primary " onClick={copyHandle}>Copy Text</button>
  <button className="btn btn-primary mx-2" onClick={removeHandler}>Remove Extra Spaces</button>
  <button className="btn btn-primary mx-2" onClick={clearText}>Clear</button>
  

  <div className="analyze" style={{display: 'flex'}}>
  <div className="container my-3" >
  <h2 style={{ 
    color:props.mode==='light'?'red':
    props.mode==='red'?'black':
    props.mode==='brown'?'black':   
    'red',
  }}>
    <u>Text Analyze </u> </h2>
  <h6>Number of Words</h6>
  <p>{(text.split(" ").length)-1} Words</p>
  <h6>Number of letters </h6>
  <p>{(text.length)} Characters</p> 
  </div>
  <div className="container" > 
  <h2  style={{ color:props.mode==='light'?'red':
                props.mode==='red'?'black':
                props.mode==='brown'?'black':
        'red',
        }}><u>Preview</u></h2>
  <p>{text.length>0?text:"Enter something above to preview it here"}</p>
  </div>
  </div>
  </div>
  </div>
  )
}
