import React from 'react';
import QuestionsCard from './components/Questions';

function App() {
  // https://opentdb.com/api.php?amount=20
  const startTrivia = async () => {
    
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
  }
  const nextQuestion = ()=>{

  }
  return (
    <>
      <div className='App'>
        <h1>Quiz App</h1>
        <button className="start" onClick={startTrivia}>
          Start
        </button>
        <p className="score">
          Score:
        </p>
        <p>
          Loading Questions...
        </p>
        <QuestionsCard
        answers={["ram","good"]}
        callback={checkAnswer}
        questionNr={1}
        question={"what is your name"}
        totalQuestions={1}
        userAnswer={true}
        
        />
        <button onClick={nextQuestion} className="next">
          Next Question
        </button>
      </div>
    </>
  )
  }
export default App
