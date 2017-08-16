import React from 'react';
import './QuestionPanel.css'

class QuestionPanel extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {

    }


    render() {
       return (
           <div className="question-panel">
            <div className="s-box"></div>
            <div className="q-wrapper">
                <p className="question">What do you value most in a friendship?</p>
                <button className="q-btn-left">Honesty</button>
                <button className="q-btn-rt">Loyalty</button>
            </div>
           </div>
       )
    }

}



export default QuestionPanel