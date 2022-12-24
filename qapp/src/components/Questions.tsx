import React from 'react'
type props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNr: number;
    totalQuestions: number;

}

const Questions:React.FC<props> = () => {
  return (
    <div>Questions</div>
  )
}


export default Questions