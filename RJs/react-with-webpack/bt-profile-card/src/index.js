import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
    <div className="card">
      <div className="card--header">
        <img className="avatar" src="https://gcavocats.ca/wp-content/uploads/2018/09/man-avatar-icon-flat-vector-19152370-1.jpg" alt="avatar"/>
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

