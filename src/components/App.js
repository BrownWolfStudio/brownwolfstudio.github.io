import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="all">
        <div className="hero">
            <div className="title">{this.props.orgName}</div>
            <div className="cta">
                <form action="https://brownwolfstudio.us19.list-manage.com/subscribe/post?u=5bb8b870c6d1d1c369237e77d&amp;id=eba75004f6" method="post" name="mc-embedded-subscribe-form" target="_blank" novalidate>
                    <input type="submit" value="Play Hard." name="subscribe" className="button" />
                </form>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
