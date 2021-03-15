import React from 'react';
import ReactDOM from 'react-dom';
import '../src/style.css';
import SearchAudio from "./searchAudio";

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">React Audio Search </h1>
        <SearchAudio/>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));