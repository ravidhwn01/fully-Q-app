import React ,{ useState}from 'react';
import { fetchQuizQuestions,Difficulty } from './Api';
import QuestionsCard from './components/Questions';
const TOTAL_QUESTIONS = 20;
function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  console.log(questions);
   //link
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
        {/* <QuestionsCard
        answers={questions[number].answers}
        callback={checkAnswer}
        questionNr={number+1}
        question={questions[number].question}
        totalQuestions={TOTAL_QUESTIONS}
        userAnswer={userAnswers?userAnswers[number]:undefined}

        /> */}
        <button onClick={nextQuestion} className="next">
          Next Question
        </button>
      </div>
    </>
  )
  }
export default App
