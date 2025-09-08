import { useState} from 'react'
import StartingPage from "./Components/StartingPage"
import Questions from "./Components/Questions"
export default function App(){
  const [showQuestionsPage , setShowQuestionsPage]  = useState(false)
  return (
    <main>
      {!showQuestionsPage && <StartingPage onClick = {() => setShowQuestionsPage(!showQuestionsPage)} />}
      {showQuestionsPage  && <Questions showStartPage = {() => setShowQuestionsPage(!showQuestionsPage)} />}


    </main>
  )
}