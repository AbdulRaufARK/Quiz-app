import logo from './logo.svg';
import './App.css' ;
import { useState } from 'react';

function App() {
  const [Question , setQuestion] = useState([
    {
      Question: "MS word is software of ____",
      CorrectAns: "Microsoft",
      Options: ["Apple", "Android", "Google", "Microsoft"],
    },
    {
      Question: "Which is the word processing software?",
      CorrectAns: "MS word 2007",
      Options: ["Avast", "MS word 2007", "Google Chrome ", "Mozilla Firefox"],
    },
    {
      Question: "MS Word is ____ software.    ",
      CorrectAns: "Word processing",
      Options: [
        "Web browser",
        "Word processing",
        "Operating system",
        "Antivirus",
      ],
    },
    {
      Question: "The valid format of MS Word is __",
      CorrectAns: ".doc",
      Options: [".exe", ".doc", ".png", " .jpeg"],
    },
    {
      Question: "What program is used in MS-Word to check the spelling?",
      CorrectAns: "Spelling & Grammar",
      Options: ["Research", "Word Count", "Set language", "Spelling & Grammar"],
    },
    {
      Question: "A word gets selected by clicking it",
      CorrectAns: "Twice",
      Options: [" Once", "Twice", "Three times", "Four times"],
    },
    {
      Question: "The center the selected text, the shortcut key is",
      CorrectAns: "Ctrl + E",
      Options: ["Ctrl + C", "Ctrl + E", " Ctrl + U", "Ctrl + O"],
    },
    {
      Question: "Which option is not available in Microsoft office button?",
      CorrectAns: "Bold",
      Options: ["Bold", "New", "Save", "Open"],
    },
    {
      Question:
        "_____ is the change the way text warps around the selected object.",
      CorrectAns: "Text wrapping",
      Options: ["Text wrapping", "Indent", "Clipart", " Line spacing"],
    },
    {
      Question: "A major step before taking print of the document is",
      CorrectAns: "Both b and c",
      Options: [
        "To save the document",
        "To set paper setting",
        "To see print preview of the document",
        "Both b and c",
      ],
    },
  ]);
  const [indexNumber, setIndexNumber] = useState(0)
  const [marks, setMark] = useState(0)
  const [result, setResult] = useState(false)
  const [isOn, setIsOn] = useState (false)



  let checkAns = (selectQue , correctAns) =>{
    if( selectQue === correctAns){
      setMark(marks +1)
    }
    if( indexNumber +1 === Question.length){
      setResult(true)
    }
    setIndexNumber(indexNumber + 1);
  } 


  return (
    
    
    <div >
      
      {/* <button onClick={()=> setIsOn (!isOn)}> Start</button>
      { isOn ? 'afd': "asd" } */}

      {result ? (<p className='result' > Your Mark is: {marks}</p>) :
      <div className="App-header top-box"> <p className='logo'></p>  <h1 className='margin'> {  Question[indexNumber].Question}</h1>
      {Question[indexNumber].Options.map((e,i) => {
        return (
          <button
          key={i} 
          className='button'
          onClick={() => checkAns(e, Question[indexNumber].CorrectAns)}>{e}</button>

        )}
        )}

</div>}
      

</div>
  );
}

export default App;
