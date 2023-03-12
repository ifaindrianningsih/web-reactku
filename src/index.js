import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
import reportWebVitals from "./reportWebVitals";

// import BlogPost from "./container/BlogPost/BlogPost";
import Mahasiswa from "./container/Mahasiswa/Mahasiswa";

// ReactDOM.render(<BlogPost />, document.getElementById('content'));

const root = ReactDOM.createRoot(document.getElementById("content"));
root.render(
  <React.StrictMode>
    <Mahasiswa />
  </React.StrictMode>
);

reportWebVitals();

// const Hello = () =>{
//   return <p>hello</p>
// }

// ReactDOM.render(>app />, document.getElementById('root));

// ReactDOM.render(<Hello />, document.getElementById('root'));

// ReactDOM.render(<p> hello word</p>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
