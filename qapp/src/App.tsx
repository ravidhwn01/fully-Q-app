import React ,{ useState}from 'react';
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
        questionNr={number+1}
        question={"what is your name"}
        totalQuestions={TOTAL_QUESTIONS}
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
