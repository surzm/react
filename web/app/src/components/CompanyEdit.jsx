import React from 'react';
import Inventory from './Inventory.jsx';

import './CompanyEdit.css'

const STATE = require('../data.json');

const CompanyEdit = React.createClass({
  getInitialState : function() {
    return {
      company : STATE.company
    }
  },
  // компонент уже есть в DOM и с ним уже можно взаимодействовать (в DOM)
  componentDidMount: function () {
    let localCompany = JSON.parse(localStorage.getItem('company'));
    if (localCompany && localCompany.length > 0 ) {
      this.setState({ company: localCompany });
      STATE.company = localCompany;
    }
  },
  // вызывается сразу после render. 
  // Не вызывается в момент первого render'а компонента.
  // cюда приходят предущие state и props
  componentDidUpdate: function () {
    this._updateLocalStorage();
  },
  deleteCompany: function(company) {
    let companyId = company.id;
    let newCompany = this.state.company.filter(function(company) {
      return company.id !== companyId;
    });
    console.log(newCompany);
    this.setState({ company: newCompany });
  
    //TODO: Переписать на более читаемое имя
    STATE.company = newCompany;
  },
  addCompany : function(company) {
    // делаю копию всего массива, который хранится в состоянии,
    // иначе произойдёт модификация по ссылке и мы не сможем отслеживать изменения в props, т.к ссылка будет одна и таже
    let copyCompanyState  = this.state.company.slice();
    
    // добавляю новую компанию в начало коллекции
    copyCompanyState.unshift(company);
    this.setState({ company : copyCompanyState });
  
    //TODO: Переписать на более читаемое имя
    STATE.company = copyCompanyState;
  },
  
  updateCompany: function (company, name, value) {
    let companyId = company.id;
    let currentCompany = STATE.company.filter(function(company) {
      return company.id == companyId;
    });
    currentCompany[0][name] = value;
    this.setState({ currentCompany });
  },
  render: function () {
    return (
      <div className="container">
        <Inventory
          addCompany={this.addCompany}
          updateCompany={this.updateCompany}
          company={STATE.company}
          deleteCompany={this.deleteCompany}
        />
      </div>
    )
  },
  _updateLocalStorage: function () {
    let company = JSON.stringify(this.state.company);
    localStorage.setItem('company', company);
  }
});

export default CompanyEdit;
