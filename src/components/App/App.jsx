import { useState, useEffect } from "react";
import Description from '../Description/Description'
import Options  from '../Options/Options'
import Feedback from '../Feedback/Feedback'
import Notification from "../Notification/Notification";
import './App.css'

function App() {
  const [countFb, setCountFb] = useState(() => {
    const savedCountFb = localStorage.getItem('countFb');
    if (savedCountFb)
      return JSON.parse(savedCountFb);
    return {
      good: 0,
      neutral: 0,
      bad: 0
    }
  });

  useEffect(() => {
    localStorage.setItem('countFb', JSON.stringify(countFb));
  }, [countFb]);

  const updateFeedback = key => {
    setCountFb({
      ...countFb,
      [key]: countFb[key] + 1,
    });
  };

  const resetFeedback = () => {
    setCountFb({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = countFb.good + countFb.neutral + countFb.bad;
  const positiveFeedBack = Math.round(((countFb.good + countFb.neutral) / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        handleClick={updateFeedback}
        resetClick={resetFeedback}
        totalFeedback={totalFeedback} />
      {totalFeedback === 0
        ? <Notification />
        : <Feedback
          countFb={countFb}
          totalFeedback={totalFeedback}
          positiveFeedBack={positiveFeedBack} />}
    </>
  );
};
    
  
export default App
