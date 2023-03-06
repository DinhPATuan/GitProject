import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import logo from './image/unnamed.png'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
    <div className="card">
      <div className="card--header">
        <img className="avatar" src={logo} alt="avatar"/>
      </div>
      <div className="card--body">
        <div>
          <p className="text-header">DPATuan</p>
          <p className="text-sub">Đây là 1 dòng chữ tượng trưng không có nghĩa :3</p>
          <button className="btn">FOLLOW</button>
        </div>
      </div>
    </div>
  </div>
);

