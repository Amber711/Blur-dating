import React from 'react';
import './QuestionPanel.css'
import refresh from '../assets/refresh.png'

class QuestionPanel extends React.Component {

    constructor() {
        super();
        this.state = {questions : [
            {
                question: "What is essential to your morning?",
                answer: ["Coffee", "Breakfast"]
        },
            {
                question: "I consider myself athletic",
                answer: ["Yes", "No"]
            },
            {
                question: "What kind of music do I prefer?",
                answer: ["Pop", "Jazz"]
            }
        ],
        index: 0

        }

    }
     clickChoice = () => {
         console.log('index +++++', this.state.index);
         if(this.state.index < 2 && this.state.index >= 0) {
             this.setState({
                 index: this.state.index + 1
             })
         } else {
             this.setState({
                 index: this.state.index - 1
             })
         }

}
    componentDidMount() {

    }


   render() {
       return (
           <div className="question-panel">
                <img className="refresh" src={refresh} alt=""/>
                <div className="s-box"></div>
                <div className="q-wrapper">
                    <p className="question">{this.state.questions[this.state.index].question}</p>
                    <button className="q-btn-left" onClick={() => this.clickChoice()}>{this.state.questions[this.state.index].answer[0]}</button>
                    <button className="q-btn-rt" onClick={() => this.clickChoice()}>{this.state.questions[this.state.index].answer[1]}</button>
                </div>
                 <button className="skip-q" onClick={() => this.clickChoice()}>SKIP THIS QUESTION</button>
           </div>
       )
    }

}



export default QuestionPanel