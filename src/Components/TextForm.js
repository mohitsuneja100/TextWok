import React,{useState} from 'react'

function TextForm(props) {
    const [text, settext] = useState("");

    const change=(event)=>{
        settext(event.target.value)

    }
    const upper=()=>{
        let newtext=text.toUpperCase();
        settext(newtext)
        props.showalert("Text Uppercased","success")
    }
    const lower=()=>{
        let newtext=text.toLowerCase();
        settext(newtext)
        props.showalert("Text Lowercased","success")
    }
    const clear=()=>{
        settext("")
        props.showalert("Text Clearled","success")
    }
    const copytxt=()=>{
        var copText=document.getElementById("mybox");
        copText.select();
        navigator.clipboard.writeText(copText.value)
        document.getSelection().removeAllRanges();
        props.showalert("Text Copied to Clipboard","success")

    }
  return (
    <div className='container my-3' >
        <h5>Enter the Text here:</h5>
        <textarea className="form-control my-1" placeholder="Enter the Text" rows='5' value={text} onChange={change} id="mybox"></textarea>
        <button disabled={text.length===0} type="button" className="btn btn-primary m-2" onClick={upper}>UpperCase</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary m-2" onClick={lower}>LowerCase</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary m-2" onClick={copytxt}>Copy</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary m-2" onClick={clear}>Clear</button>
        <h5 className='mt-4'>Count:</h5>
        <p>{text.length} Letters and {text.split(" ").filter((element)=>{return element.length!==0}).length} Words</p>
        <h5 className='mt-4'>Time:</h5>
        <p>{0.006*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read Words in the Text</p>
        <h5 className='mt-4'>Preview</h5>
        <p>{text.length===0?"Enter the Text to preview":text}</p>
    </div>
  )
}

export default TextForm;