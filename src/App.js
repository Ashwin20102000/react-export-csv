import React from 'react';
import './style.css';
import { CSVLink } from 'react-csv';
export default function App() {
  const data = [
    {
      name: 'Ashwin',
      paidDays: 31,
      grossPay: 34800,
      deduction: 660,
      reimbursement: 360,
      role: 'Web-dev'
    },
    {
      name: 'Ash',
      paidDays: 31,
      grossPay: 3400,
      deduction: 66,
      reimbursement: 360,
      role: 'Intern'
    },
    {
      name: 'no-name',
      paidDays: 30,
      grossPay: 30000,
      deduction: 60,
      reimbursement: 360,
      role: 'Engineer'
    }
  ];
  const headers = [
    {
      label: 'Name ',
      key: 'name'
    },
    {
      label: 'Paid Days ',
      key: 'paidDays'
    },
    {
      label: 'Gross Pay ',
      key: 'grossPay'
    },
    {
      label: 'Deduction ',
      key: 'deduction'
    },
    {
      label: 'Reimbursement ',
      key: 'reimbursement'
    },
    {
      label: 'Role ',
      key: 'role'
    }
  ];
  const csvReport = {
    filename: 'Empoyees.csv',
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
