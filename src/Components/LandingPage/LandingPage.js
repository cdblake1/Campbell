import React, { Component } from 'react';
import './assets/css/LandingPage.css';
import Form from './Components/Form/Form';
import SubmitButton from './Components/SubmitButton/SubmitButton';
import Video from './Components/Video/Video';
import videoSrc from '../../video.mp4'
import header from './assets/img/header.png';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <img className="header-img" src={header}></img>
        <div className="landing-page">
          <div className="section">
            <Form />
            <SubmitButton />
          </div>
          <div className="section">
            <Video src={videoSrc}/>
          </div>
         
        </div>
      </div>
    );
  }
}

export default LandingPage;
