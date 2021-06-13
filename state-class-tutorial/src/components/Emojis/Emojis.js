import React, { Component, useLayoutEffect } from 'react';
import Instructions from '../Instructions/Instructions';
import './Emojis.css';

const emojis = [
    {
        emoji: '😀',
        name: "grinning face"
      },
      {
        emoji: '🎉',
        name: "party popper"
      },
      {
        emoji: '💃',
        name: "woman dancing"
      }

];

const displayEmojiName = event => alert(event.target.id);

export default class Emojis extends Component {

    render() {
        return(
            <div className="container">
                <Instructions/>
                <ul>
                    {
                        emojis.map(emoji => (
                            <li key={emoji.name}>
                
                                <button onClick={displayEmojiName}>
                                    <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
                            
                                </button>
                            </li>
                        ))
                    }
                    
                </ul>
            </div>
        )
    }
}