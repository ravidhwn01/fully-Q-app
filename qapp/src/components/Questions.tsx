import React from 'react'
//types
import {AnswerObject} from '../App'
type props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) =>void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;

}

const Questions:React.FC<props> = (
    {question
    ,answers
    ,callback
    ,userAnswer
    ,questionNr
    ,totalQuestions
    }
) => {
  return (
    <div>
          
        <p className="number">
            Questions: {questionNr} / {totalQuestions}
        </p>
          
        <p dangerouslySetInnerHTML={{__html:question}} >

        </p>
        <div>
            {answers.map((answers,index) =>(
                <div key={index}
               
                >
                    <button disabled={!!userAnswer?true:false} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html:answers}}></span>
                    </button>
                </div>
            ))}
        </div>
    </div>
  )
}


export default Questions
