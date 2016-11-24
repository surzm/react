import React from 'react';

const InventoryItem = React.createClass({
  handleChange : function(event) {
    var company = this.props.index;
    var name = event.target.name;
    var value = event.target.value;
    this.props.updateCompany(company, name, value);
  },
  render: function () {
    var item = this.props.index;
    return (
      <div>
        <input type="text" placeholder="Company name" name="name" value={this.props.name} onChange={this.handleChange}/>
        <input type="text" placeholder="Company head" name="head" value={this.props.head} onChange={this.handleChange}/>
        <button className="company-delete" onClick={this.props.deleteCompany.bind(null, item)} >Delete</button>
      </div>
    );
  }
});
export default InventoryItem;
