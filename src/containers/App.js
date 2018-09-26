import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="all">
        <div className="hero">
            <div className="title">{this.props.orgName}</div>
            <div className="cta">
              <a href="https://brownwolfstudio.us19.list-manage.com/subscribe/post?u=5bb8b870c6d1d1c369237e77d&amp;id=eba75004f6" target="_blank" rel="noopener noreferrer">
                Play Hard.
              </a>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
