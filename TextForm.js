import React, {useState} from 'react'

export default function TextForm(props) {
  const changeUpCase = () =>{
    const newText = text.toUpperCase();
    setText(newText)
  }
  const changeOnCase = (events) =>{
    
    setText(events.target.value)
  }

  const [text, setText] = useState("Enter the text");
  return (
    <div>
        <h3>{props.headings}</h3>
        <div className="mb-3">            
             <textarea className="form-control" value={text} onChange={changeOnCase} id="myBox" rows="8"></textarea>
        </div>
             <button className="btn btn-primary" onClick={changeUpCase}>change into upperCase</button>
    </div>
  )
}
