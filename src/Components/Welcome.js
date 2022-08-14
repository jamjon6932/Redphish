import React, {Component} from 'react';
import background from './guitarplayer.jpg'
import './Welcome.css'
class Welcome extends Component{
    render() {
        const myStyle={
            backgroundImage: `url(${background})`,
            textAlign: 'left',
            textShadow: (4),
            FontFace:'Roboto',
            fontSize:25,
            color: 'white',
            height: '100vh',
            backgroundSize: 'cover',
            backgroundRepeat:'no-repeat'
        };

        return (
            <div style={myStyle}>
                <h1>Start Shopping</h1>
                <ul>
                    <li><button>Guitars</button></li>
                    <li><button>Keyboards</button></li>
                    <li><button>Drums</button></li>
                    <li><button>Recording</button></li>
                </ul>
                
            </div>);

    }
}

export default Welcome