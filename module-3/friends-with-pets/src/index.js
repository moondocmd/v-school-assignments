import React from 'react';
import ReactDOM from 'react-dom';
import FriendList from './FriendList';
import Friend from './Friend';
// import './index.css';

const App = () => {
  return (
    <div>
      <FriendList />
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));