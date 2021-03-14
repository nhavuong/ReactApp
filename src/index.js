import React from 'react';
import ReactDOM from 'react-dom';
import '../src/style.css';

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">React Audio Search </h1>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));