import { useState } from 'react';
//import Grading from "./Grading";

const QuestionInfo = ({question, onSendResults, onSendID}) => {
    const clearData = {id : '', value: ''}
    const [answers, setAnswers] = useState([clearData]);


    // var choice = document.querySelector('input[name="0"]:checked').value;
    // const addAnswer = () => {
    //     setAnswerList[question.id] = choice;
        
    // }
    function HandleChange(e) {
       
        

        if (question.answer === e.target.value) {
            setAnswers([...answers, {id:(question.id), value: ("Correct")}])
            onSendID(question.id);
            onSendResults("Correct")
        } else {
            setAnswers([...answers, {id:(question.id), value: ("Wrong")}])
            onSendID(question.id);
            onSendResults("Incorrect, the correct answer is " + question.answer)
        }
   
          
    }  
          
    return(

        <div>
              <li className="list-group-item">
               <p>{question.id}. {question.questions}</p>
               <form>
              <ul>
                <div className="form-check">
                    
                    <label>
                        <input  className="form-check-input" type="radio" name={question.id} id={question.id} value="A" onChange ={HandleChange}/>
                           {question.possible1}
                    </label>
                </div>
                <div className="form-check">
                    <label>
                        <input className="form-check-input" type="radio" name={question.id} id={question.id} value="B" onChange ={HandleChange}/>
                        {question.possible2}
                    </label>
                </div>
                <div className="form-check">
                    
                    <label>
                        <input className="form-check-input" type="radio" name={question.id} id={question.id} value="C" onChange ={HandleChange}/>
                        {question.possible3}
                    </label>
                </div>
                <div className="form-check">
                    
                    <label>
                        <input className="form-check-input" type="radio" name={question.id} id={question.id} value="D" onChange ={HandleChange}/>
                        {question.possible4}
                    </label>
                </div>
                </ul>
                
                </form>
                </li>
                </div>
                
    )
}

export default QuestionInfo;

