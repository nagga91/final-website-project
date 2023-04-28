import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Form from 'react-bootstrap/Form';
import { update_offer } from '../redux/Action/Offer_act';

function Test({test,idoffer,iduser,candidates}) {
    const dispatch=useDispatch()
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answer, setAnswer] = useState('');
    const [timeRemaining, setTimeRemaining] = useState(test[0].time * 60);
    const [answers,setAnswers]=useState([])
      const currentQuestion = test[currentQuestionIndex]
    
      useEffect(() => {
        if (timeRemaining <= 0) {
          goToNextQuestion();
        } else {
          const timer = setTimeout(() => {
            setTimeRemaining(prevTime => prevTime - 1);
          }, 1000);
          return () => clearTimeout(timer);
        }
      }, [timeRemaining]);
    
      const goToNextQuestion = async() => {
        setAnswers(prevAnswers => [...prevAnswers, answer])
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        setTimeRemaining(test[currentQuestionIndex + 1].time * 60);
        setAnswer('');
      };

    const handlesubmit=()=>{
      setAnswers(prevAnswers => [...prevAnswers,answer]);
      dispatch(update_offer(idoffer,{candidates:[...candidates,{candidat:iduser,answers:[...answers,answer]}]}))
      if(document.fullscreenElement){
        document.exitFullscreen()
      
      }
    }

      const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      };

  return (
    <div style={{ color: 'black',width:'100%',height:'100%',backgroundColor:'white',justifyContent:'center' }}>
    <div>
      <br/>
    <Form.Label disabled>Time remaining to answer this question <span style={{color:'red',border:'1px solid'}}>{formatTime(timeRemaining)}</span></Form.Label></div>
    <hr/>
   <div style={{display:'flex',width:'100%'}}>
      <div style={{width:'50%',textAlign:'start',border:'1px solid'}}>
        Question {currentQuestionIndex + 1}:
        <Form.Control as="textarea" rows={10} value={currentQuestion.question}/>
      </div>
     <div style={{width:'50%'}}>
      <Form.Control as="textarea" value={answer} placeholder='Write your answer here' rows={10} onChange={(e) => setAnswer(e.target.value)}/>
      </div>
    </div>
    <br/>
    <div style={{width:'100%',justifyContent:'center'}}>
      {currentQuestionIndex < test.length - 1 ? (
        <button className="btn d-block d-sm-inline-block btn-light" style={{backgroundColor:'teal'}} onClick={goToNextQuestion}>Next question</button>
      ) : (
        <button className="btn d-block d-sm-inline-block btn-light" style={{backgroundColor:'teal'}} onClick={handlesubmit}>Submit</button>
      )}
    </div>
  </div>
  )
}

export default Test
