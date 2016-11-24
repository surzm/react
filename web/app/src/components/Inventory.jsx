import React from 'react';
import CompanyForm from './CompanyForm.jsx';
import InventoryItem from './InventoryItem.jsx';

const Inventory = React.createClass({
  render: function() {
    return (
      <div>
        <CompanyForm addCompany={this.props.addCompany}/>
        {
          //TODO: Переписать на более читаемое имя
          this.props.company.map(item => {
              let itemData = item;
              return (
                <InventoryItem
                  key={itemData.id}
                  index={itemData}
                  name={itemData.name}
                  head={itemData.head}
                  updateCompany={this.props.updateCompany}
                  deleteCompany={this.props.deleteCompany}
                />
              )
            }
          )
        }
      </div>
    )
  }
});

export default Inventory;
