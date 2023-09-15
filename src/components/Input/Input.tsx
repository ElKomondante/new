import { useState } from 'react'
import { IInput } from "../../types"

const Input = (props: IInput) => {
    const { title, placeholder,isActive} = props;
    const [content, setContent] = useState('')
    return (
        <>
        <h2 style={{color:"grey"}}>Inputus</h2>
        <div>
            <label style={{padding:"10px"}}>{title}</label>
            <br/>
            <input
                placeholder={placeholder}
                style={{padding: '10px 15px', margin: "10px", width:"80%",height:"20px",border:"none"}}
                type="text"
                required
                value={content}
                onChange={(e)=> setContent(e.target.value)}
                />
        </div>
        <div>
            
        <label style={{padding:"10px"}}>{title}</label>
        <br/>
        <input
            placeholder={placeholder}
            style={{padding: '10px 15px', margin: "10px", width:"80%",height:"20px",border:"solid"}}
            type="text"
            required
            value={content}
            onChange={(e)=> setContent(e.target.value)}
            />
        </div>
        <div>
        <label style={{padding:"10px"}}>{title}</label>
        <br/>
        <input
            placeholder={placeholder}
            style={{padding: '10px 15px', margin: "10px", width:"80%",height:"20px"}}
            type="text"
            required
            value={content}
            onChange={(e)=> setContent(e.target.value)}
            />
        </div>
        <div>
        <label style={{padding:"10px"}}>{title}</label>
        <br/>
        <input
            placeholder={placeholder}
            style={{padding: '10px 15px', margin: "10px", width:"80%",height:"20px"}}
            type="text"
            required
            value={content}
            onChange={(e)=> setContent(e.target.value)}
            disabled={!isActive}
            />
        </div>
        <div>
        <label style={{padding:"10px"}}>{title}</label>
        <br/>
        <input
            placeholder={placeholder}
            style={{padding: '10px 15px', margin: "10px", width:"80%",height:"20px",border:"solid red"}}
            type="text"
            required
            value={content}
            onChange={(e)=> setContent(e.target.value)}
            />
            <p style={{marginLeft:"10px", color:"red",}} >Error</p>
        </div>
    </>
    )
}
const Area = () => {
    const [text, setText] = useState(' ')
    return(
    <div>
        <label style={{padding:"10px"}}>Text Area</label>
        <br/>
        <textarea
        style={{padding: '10px 15px', margin: "10px", width:"80%",height:"100px"}}
        value={text}
        onChange={(e)=> setText(e.target.value)}>
        </textarea>
    </div>
)
}
export { Area }
export { Input }