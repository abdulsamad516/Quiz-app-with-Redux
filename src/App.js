import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import {Provider} from 'react-redux';
import {useState} from 'react'
import {useSelector} from 'react-redux';

function App() {
  const state = useSelector(state => state)

  const[questions , setQuestions] = useState (state.data);

  const [ind, setInd] = useState(0); 
  const [score,setScore] = useState(0);
  const [selectedValue,setselectedValue] = useState('');
  const [showResult,setshowResult] = useState(false);
 
  function correctAnswer(){
    
    let correctValue = questions[ind].correctans;
    if(selectedValue == correctValue){
      setScore(score + 1);
    }
    if (questions.length == ind+1){
      setshowResult(true);
    }else{
      setInd(ind+1);
    }

  }
 
console.log(score);



  return (
    <Provider store={store}>
       <div className='p-2 '>
         <div className='container'>
          {showResult ? <div className='p-3 bg-white rounded shadow text-dark'>
             <p className='fs-3'>RESULT</p>
           <progress id="file" value={score} max={questions.length}></progress>
           <h3>{(score / questions.length * 100)}%</h3>
           <h3>{(score / questions.length * 100 < 60 ? 'FAIL' : 'PASS')}</h3>
           </div>:null}
         </div>
      { !showResult?  <div className='container p-5 my-2 rounded shadow bg-success '>
           <p className='fs-4'>Question Number <span className='fs-1'>{ind + 1}</span> of {' '} {questions.length}</p>
           <h3>{questions[ind].questions}</h3>
         </div>:null}
        {!showResult? <div className='container p-5 my-2 rounded shadow bg-info'>
           <div className='row'>
             {questions[ind].option.map((e,i)=>{
               return(
                <div key={i} className='col-md-4 py-2'>
                <button onClick={()=>setselectedValue(e)}  className='btn btn-light rounded px-5'>{e}</button>
              </div>
               )
             })}
           </div>
         </div>:null}
         {!showResult?<div className='container'>
           <button onClick={()=>correctAnswer()} className='btn btn-danger px-5 rounded-pill'>NEXT</button>
         </div>:null}
       </div>
       </Provider>
  );
}

export default App;
