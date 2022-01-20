import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './Header.css';

const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
          <div className="gpt3__header-content">
            <h1 className="gradient__text">Let&apos;s Build Something In Metaverse</h1>
            <p>A set of virtual spaces where you can create and explore with other people who aren’t in the same physical space as you. You’ll be able to hang out with friends, work, play, learn, shop, create, and more.</p>
            <div className="gpt3__header-content__input">
              <input type="email" placeholder="Your Email Address" />
              <button type="button" onClick={() => window.location = 'mailto:jyotirmoyroy649@gmail.com'} >Get Started</button>
            </div>
            <div className="gpt3__header-content__people">
              <img src={people} />
              <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
          </div>

          <div className="gpt3__header-image">
            <img src={ai} />
          </div>
        </div>
    )
}

export default Header
