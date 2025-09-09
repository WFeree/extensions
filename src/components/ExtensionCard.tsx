import ToggleSwitch from "./ToggleSwitch"

function extensionCard(){
    return(
        <div className="extensionCard">
            <div className="icon"></div>
            <div>
                <h3>DevLens</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aspernatur molestiae autem suscipit libero, ut sed, neque perferendis ea ipsa nihil rem maxime! Nulla dolorem inventore ipsum in cumque quis.</p>
            </div>
            <div>
                <button>Remove</button>
                <ToggleSwitch/>
            </div>

        </div>
    )
}   
export default extensionCard