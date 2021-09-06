import React from 'react';
import './style.css';
import data from './data';
import headers from './headers';
import { CSVLink } from 'react-csv';
export default function App() {
  const csvReport = {
    filename: 'Employee.csv',
    headers: headers,
    data: data
  };
  return (
    <div className="container mt-5">
      <h2> Click here to Download CSV </h2>
      <button className="btn btn-primary m-3">
        <CSVLink
          style={{ color: 'white', textDecoration: 'none' }}
          {...csvReport}
        >
          Export As Csv
        </CSVLink>
      </button>
    </div>
  );
}
