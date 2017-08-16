import React from 'react';
import './QuestionPanel.css'
import refresh from '../assets/refresh.png'

class QuestionPanel extends React.Component {
    constructor() {
        super();
        this.state = {quesitons : [
            {
                question: "What is essential to your morning?",
                answer: ["Coffee", "Breakfast"]
        },
            {
                question: "I consider myself athletic",
                answer: ["Yes", "No"]
            },
            {
                question: "What do you value most in a friendship?",
                answer: ["Honesty", "Loyalty"]
            }
        ]}
    }

    componentDidMount() {

    }


   render() {
       return (
           <div className="question-panel">
                <img className="refresh" src={refresh} alt=""/>
                <div className="s-box"></div>
                <div className="q-wrapper">
                    <p className="question">{this.state.quesitons.question}</p>
                    <button className="q-btn-left">{tos.}</button>
                    <button className="q-btn-rt">Loyalty</button>
                </div>
                 <button className="skip-q">SKIP THIS QUESTION</button>
           </div>
       )
    }

}



export default QuestionPanel