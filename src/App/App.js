import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import logo from './logo.png';
import './App.css';
import FaceMatches from '../FaceMatches/FaceMatches';

class App extends React.Component {
    render() {
        return (
            <div className="blur-wrapper">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className='container'>
                    <FaceMatches />
                </div>

                <div className="footer"></div>
            </div>
        )
    }
}

export default App;