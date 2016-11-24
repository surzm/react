import React from 'react';

const Company = React.createClass({
  render: function () {
    return (
      <li className="company">
        <h3 className="company-name">{this.props.name}</h3>
        <small className="company-head">{this.props.head}</small>
      </li>
    );
  }
});

export default Company;
