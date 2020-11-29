import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45pm" 
                    comment="Hello there" 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 1:00pm" 
                    comment="What's your name"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane" 
                    timeAgo="Today at 12:55am" 
                    comment="Where are we?"
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

