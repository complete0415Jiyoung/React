import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom' // 화면을 전환시켜 주는 것을 도와줌
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//ReactDOM.createRoot : 마크업 태그를 렌더링 할 수 있게 만들어 준다
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
