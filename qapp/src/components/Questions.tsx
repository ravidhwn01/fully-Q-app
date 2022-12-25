import React from 'react'
type props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
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
            {answers.map(answers =>(
                <div>
                    <button disabled={userAnswer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html:answers}}></span>
                    </button>
                </div>
            ))}
        </div>
    </div>
  )
}


export default Questions
