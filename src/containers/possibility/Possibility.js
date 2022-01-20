import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './Possibility.css';

const Possibility = () => {
    return (
      <div className="gpt3__possibility section__padding" id="possibility">
        <div className="gpt3__possibility-image">
          <img src={possibilityImage} alt="possibility" />
        </div>
        <div className="gpt3__possibility-content">
          <h4>Request Early Access to Get Started</h4>
          <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
          <p>The metaverse will elevate the sense of the digital self. It will bring new forms of personal expression, creativity and prepare us for entirely new experiences.</p>
          <h4>Request Early Access to Get Started</h4>
        </div>
      </div>
    )
}

export default Possibility
