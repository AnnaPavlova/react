import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App';
import './index.css';
import store from './store';

//import { Router, Route, Link, browserHistory } from 'react-router';


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

//
// document.addEventListener('click', ()=>{
//     store.dispatch({type:'INCREMENT'})
// })


//router example

// const MainPage = ({children}) => (
//     <div>
//         <h1>hello</h1>
//         {children}
//     </div>
// )
// const Page1 = ({children}) => (
//     <div>
//         <h1>page1</h1>
//         <Link to="/page2">Go to page2</Link>
//         {children}
//     </div>
// )
//
// const Page2 = ({children}) => (
//     <div>
//         <h1>page2</h1>
//         <Link to="/page1">Go to page1</Link>
//         {children}
//     </div>
// )
// render(
//     <Router history={browserHistory}>
//         <Route path="/" component={MainPage} >
//             <Route  path="page1" component={Page1}/>
//             <Route  path="page2" component={Page2}/>
//         </Route>
//     </Router>,
//     document.getElementById('root')
// );
