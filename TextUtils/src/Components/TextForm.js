import React,{useState} from 'react'

function TextForm() {
    const [text, settext] = useState("");

    const change=(event)=>{
        settext(event.target.value)

    }
    const upper=()=>{
        let newtext=text.toUpperCase();
        settext(newtext)
    }
    const lower=()=>{
        let newtext=text.toLowerCase();
        settext(newtext)
    }
    const clear=()=>{
        settext("")
    }
  return (
    <div className='container my-3' >
        <h5>Enter the Text here:</h5>
        <textarea className="form-control my-1" placeholder="Enter the Text" rows='5' value={text} onChange={change}></textarea>
        <button type="button" className="btn btn-primary m-2" onClick={upper}>UpperCase</button>
        <button type="button" className="btn btn-primary m-2" onClick={lower}>LowerCase</button>
        <button type="button" className="btn btn-primary m-2" onClick={clear}>Clear</button>
        <h5 className='mt-4'>Count:</h5>
        <p>{text.length} Letters and {text.split(" ").length} Words</p>
        <h5 className='mt-4'>Time:</h5>
        <p>{0.006*text.split(" ").length} Minutes to Read Words in the Text</p>
        <h5 className='mt-4'>Preview</h5>
        <p>{text.length===0?"Enter the Text to preview":text}</p>
    </div>
  )
}

export default TextForm;