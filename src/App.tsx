import './App.css'
import ExtensionCard, {type ExtensionCardType} from './components/extensionCard.tsx'

function App() {

  let CardList : ExtensionCardType[] = [
    {icon:"😍", title:"ChatGPT", description:"Lorem ipsum"},
    {icon:"😂", title:"Google Gemini", description:"Lorem ipsum"},
    {icon:"😊", title:"Microsoft Copilot", description:"Lorem ipsum"}
  ]

  return (
    <div className='cardHolder'>
      { CardList.map(e => <ExtensionCard{...e}/>) }
    </div>
  )
}

export default App
