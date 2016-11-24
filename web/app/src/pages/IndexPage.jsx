import React from 'react';
import CompanyList from '../components/CompanyList.jsx';

const IndexPage = React.createClass({
  render() {
    return (
      <div className="IndexPage">
        <CompanyList />
      </div>
    );
  }
});

export default IndexPage;
