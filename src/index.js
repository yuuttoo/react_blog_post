import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; //here
import  thunk from 'redux-thunk';//here
import App from './components/App';
import reducers from './reducers';
import PostList from './components/PostList';



const store = createStore(reducers, applyMiddleware(thunk));//讓下面render簡潔一點

ReactDOM.render(
   
    <Provider store={store}>
        <App />
        <PostList />
    </Provider>,
    document.querySelector('#root')
);