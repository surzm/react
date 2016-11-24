import React from 'react';

const CompanyForm = React.createClass({
  createCompany : function(event) {
    event.preventDefault();
    
    // забираю данные из формы (с помощью reference) и создаю новый объект
    let company = {
      id : Date.now(),
      name : this.refs.name.value,
      head : this.refs.head.value,
    };
    
    // добавляю компанию в стейт самого приложения (App)
    this.props.addCompany(company);
    
    // при добавлении компании сбрасываю данные из формы
    this.refs.companyForm.reset();
  },
  render: function() {
    return (
      <form className="company-form" onSubmit={this.createCompany} ref="companyForm">
        <h2>Пожалуйста введите компанию</h2>
        <input type="text" placeholder="Название компании" ref="name" required />
        <input type="text" placeholder="Глава компании" ref="head" required/>
        <button type="Submit">Добавить</button>
      </form>
    )
  }
});

export default CompanyForm;
