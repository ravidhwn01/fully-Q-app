import { type } from 'os';
import React ,{ useState}from 'react';
import { fetchQuizQuestions } from './Api';
import { QuestionsState,Difficulty } from './Api';
import QuestionsCard from './components/Questions';
const TOTAL_QUESTIONS = 20;
type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;

}
function App() {
  
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  console.log(questions);
  
  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.MEDIUM
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
    
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
  }
  const nextQuestion = ()=>{

  }
  return (
    <>
      <div className='App'>
        <h1>Quiz App</h1>
        {
          gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
            <button className="start" onClick={startTrivia}>
              Start
            </button>
          ) : null
        }
        {!gameOver?<p className="score">
          Score:
        </p>:null}
       {loading && <p>
          Loading Questions...
        </p>}
    {!loading&& !gameOver && ( <QuestionsCard
      answers={questions[number].answers}
      callback={checkAnswer}
      questionNr={number+1}
      question={questions[number].question}
      totalQuestions={TOTAL_QUESTIONS}
      userAnswer={userAnswers?userAnswers[number]:undefined}

      />)}
       {!gameOver && !loading&& userAnswers.length===number+1 && number !== TOTAL_QUESTIONS -1 ?( <button onClick={nextQuestion} className="next">
          Next Question
        </button>):null}
      </div>
    </>
  )
  }
export default App
