import { useState } from "react"

function ToggleSwitch(){

    const [toggle, setToggle] = useState(false)

    return(
        <div 
            className="toggleSwitch" 
            onClick={()=>setToggle(!toggle)}
            style={{background: toggle ? "#48abe8":"#888888"}}
        >
            <div className={toggle ? "active" : ""}></div>
        </div>
    )
}
export default ToggleSwitch