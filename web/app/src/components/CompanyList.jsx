import React from 'react';
import Company from './Company.jsx';

const STATE = require('../data.json');

const ComplanyList = React.createClass({
  // компонент уже есть в DOM и с ним уже можно взаимодействовать (в DOM)
  componentDidMount: function () {
    let localCompany = JSON.parse(localStorage.getItem('company'));
    if (localCompany && localCompany.length > 0 ) {
      this.setState({ company: localCompany });
      STATE.company = localCompany;
    }
  },
  render: function() {
    return (
      <div className="menu">
        <h2 className="menu-title">Список компаний</h2>
        <ul className="company-list">
          {
            //TODO: Переписать на более читаемое имя
            STATE.company.map(item => {
                let itemData = item;
                return (
                  <Company
                    key={itemData.id}
                    index={itemData}
                    name={itemData.name}
                    head={itemData.head}
                  >
                  </Company>
                );
              }
            )
          }
        </ul>
      </div>
    )
  }
});

export default ComplanyList;
