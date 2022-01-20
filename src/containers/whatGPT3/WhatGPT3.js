import React from 'react';
import Feature from '../../components/feature/Feature';
import './WhatGPT3.css';

const WhatGPT3 = () => {
    return (
        <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
          <div className="gpt3__whatgpt3-feature">
            <Feature title="What is Metaverse" text="The metaverse can be defined as a simulated digital environment that uses augmented reality (AR), virtual reality (VR), and blockchain, along with concepts from social media, to create spaces for rich user interaction mimicking the real world." />
          </div>
          <div className="gpt3__whatgpt3-heading">
            <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
            <p  onClick={() => window.location = 'https://medium.com/building-the-metaverse/tagged/metaverse'}>Explore the Library</p>
          </div>
          <div className="gpt3__whatgpt3-container">
            <Feature title="Axie Infinity Boom" text="Games like Axie show why tech titans are gravitating toward the concept: The metaverse and its possibilities have the potential to upend not just how we work, earn and spend, but also the fundamental ways in which we live, plan and run our lives. In essence, they promise to transform the way capitalism functions." />
            <Feature title="NFT Collection" text="In Axie’s corner of the metaverse, primitive as it may be now, players must buy NFTs — the blobby monsters called Axies — before they can play. The ante: a minimum of three Axies, at roughly $300 apiece, paid for in Ethereum, the No. 2 cryptocurrency after bitcoin. In other words, it takes nearly a grand to start playing, with no guarantees of success." />
            <Feature title="Crypto Tokens" text="As Axie has lured players, Axie Infinity Shards — another token in the game — have taken off. AXS has soared from $3.22 in June to about $150 now, even as some of the more popular crypto coins have lost value." />
          </div>
        </div>
    )
}

export default WhatGPT3
