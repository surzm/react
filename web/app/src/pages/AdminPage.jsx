import React from 'react';
import CompanyEdit from '../components/CompanyEdit.jsx';


const AdminPage = React.createClass({
  render() {
    return (
      <div className="AdminPage">
        <CompanyEdit/>
      </div>
    );
  }
});

export default AdminPage;
