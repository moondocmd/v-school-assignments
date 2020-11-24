import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'


const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
                author="Sam" 
                timeAgo="Today at 4:45pm" 
                comment="Hello there" 
            />
            <CommentDetail 
                author="Alex" 
                timeAgo="Today at 1:00pm" 
                comment="What's your name"
            />
            <CommentDetail 
                author="Jane" 
                timeAgo="Today at 12:55am" 
                comment="Where are we?"
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

