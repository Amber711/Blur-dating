import React from 'react';
//import { Link } from 'react-router-dom';

import './FaceMatches.css';
import face0 from '../assets/face0.png';
import face1 from '../assets/face1.png';
import face2 from '../assets/face2.png';
import face3 from '../assets/face3.png';
import face5 from '../assets/face5.png'

import './FaceMatches.css'
import QuestionPanel from '../QuestionPanel/QuestionPanel'

class FaceMatches extends React.Component {
    constructor() {
        super();
        this.state = {faceList: [face0, face1, face2, face3]}
    }
    componentDidMount() {
    }

  /*  setBackgroundImg() {
        let lis = document.querySelectorAll('.face-circle');
        let nodeListToArray = Array.prototype.slice.call(lis);
        nodeListToArray.map( li => {
            return this.state.faceList.map(face => {
                return li.style.backgroudImage = `url('${face}')`
            })
        })
}*/

    renderFaceClock() {
        let faces = this.state.faceList.map( face => {
            const bgImg = {
                background: 'no-repeat',
                backgroundImage: `url('${face}`,
                width: 22+'%',
                height: 22+'%',
                position: 'absolute',
                left: '-webkit-calc(50% - 4px)',
                top: '-webkit-calc(92% - 4px)'
            };

            if(this.state.faceList.indexOf(face) === 0) {
                bgImg.left = 'calc(43% - 0px)';
                bgImg.top ='calc(-12%)'
            } else if(this.state.faceList.indexOf(face) === 1){
                bgImg.left = 'calc(-11% - 4px)';
                bgImg.top = 'calc(41% - 4px)'
            } else if(this.state.faceList.indexOf(face) === 2){

                bgImg.left = 'calc(93% - 4px)';
                bgImg.top = 'calc(41% - 4px)';

            } else if(this.state.faceList.indexOf(face) === 3){

                bgImg.left = 'calc(42% - 4px)';
                bgImg.top = 'calc(92% - 4px)';

            }

            return (
                <li className="face-circle" style={bgImg} key={this.state.faceList.indexOf(face)}>

                </li>
            )
        });

        return (
            <ul className="face-circles">
                {faces}
            </ul>
        )
    }

    render() {
        return (
            <div className="clock">
                <div className="outerCircle"></div>
                <img alt="" src={face5} className="centerFace"></img>
                {this.renderFaceClock()}

                    <QuestionPanel />
            </div>
        )
    }
}

export default FaceMatches

