import ToggleSwitch from "./ToggleSwitch"

export type ExtensionCardType = {
    icon: string,
    title: string,
    description: string
}

function extensionCard(props: ExtensionCardType){


    return(
        <div className="extensionCard">
            <div className="icon">{props.icon}</div>
            <div className="content">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            <div className="buttons">
                <button>Remove</button>
                <ToggleSwitch/>
            </div>

        </div>
    )
}   
export default extensionCard