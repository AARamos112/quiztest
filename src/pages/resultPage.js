//import App from "../App";


const ResultPage = ({answer}) => {
    let theString = "";
    let theResult = answer.answer + 1;
    if (theResult === answer.answer) {
        theString = "correct";
    } else {
        theString = "wrong";
    }

    return(
    <div>
        
        
        
            <li>
                <p>{theString}</p>
            </li>
        


    </div>

)
}

export default ResultPage;