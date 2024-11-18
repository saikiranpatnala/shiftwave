// src/FAQ.js
import React, { useState } from 'react';
import './FAQ.css';
import Ourheadicon from './our-head-icon.svg';
import ArrDown from './arr-up.svg';
import ArrUp from './arr-down.svg';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item" onClick={toggleAnswer}>
      <div className="faq-question">
        {question}
        <span>{isOpen ? <img src={ArrDown} alt="Arrow down" /> : <img src={ArrUp} alt="Arrow up" />}</span>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    { question: "What is the first thing to do in Shiftwave ?", answer: "Planning a bathroom remodel starts with gathering ideas. Items to consider: decide how you want your bathroom to look when the project is complete. Decide what needs to be changed or added. Establish a budget. Order materials. Complete your design and pull permits if necessary." },
    { question: "How does CSS work?", answer: "CSS (Cascading Style Sheets) is used to style and layout web pages by applying styles to HTML elements." },
    { question: "What is JavaScript?", answer: "JavaScript is a programming language used to make web pages interactive." },
  ];

  return (
    <div className="container faq-main padding-1">
      <div className='faq-sub'>
        <div className='heading-with-icon'>
            <img src={Ourheadicon} alt="Our Process" />
            <h2>FAQ's</h2>
        </div>

        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      
    </div>
  );
};

export default FAQ;
