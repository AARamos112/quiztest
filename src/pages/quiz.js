import "../App.css";
import QuestionInfo from "./questioninfo";
import { useState, useEffect, useCallback } from 'react';

function Quiz() {
  let [questionList, setQuestionList] = useState([]);
  const [answerList, setAnswerList] = useState([]);
  const [answerListID, setAnswerListID] = useState([]);
  const [join, setjoin] = useState([]);

    const fetchData = useCallback(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        setQuestionList(data)
      });
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  const onClick = (e) => {
    setjoin([])
    answerListID.forEach(element => {
      setjoin(join => [...join, {id:answerListID[element], value: answerList[element]}])
    });
    
    e.preventDefault();
  };

    return(

      <div >
        <div className="App">
        
        <h1>This is the title of the test!</h1>
        <div className="container-fluid">
        
       
      <ol className="list-group list-group-numbered">
          {questionList
            .map(question => (
                 <QuestionInfo key={question.id}
                 question={question}
                 onSendID= {myIDResults => answerListID[question.id]=([myIDResults])}
                 onSendResults={myResults => answerList[question.id]=([myResults])}
                 />
          ))}
      </ol>
                    
    
          <input type="button" onClick={onClick} className='button' value= "Submit"  />

          <div>

          </div>
          <div className="App">
            <h1><u>Results</u></h1>
          <form >
          <ol className= "numbered">
              {join.map((a) => {
                return(
              <div key={a.id} >
                <li>{a.value}</li>
              </div>
              );
              })}
          </ol>  
          </form>   
          </div>

        </div>
      </div>
    </div>

    )
  }

  export default Quiz;