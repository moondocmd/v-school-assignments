import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import BlogList from './BlogList';
import Footer from './Footer';

const App = () => {
    return (
        <div className="ui container comments">
            <Header />
            <BlogList />
            <Footer />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

