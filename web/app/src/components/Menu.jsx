import React, { PropTypes} from 'react';
import { Link }  from 'react-router';
import './Menu.css';

const Menu = React.createClass({
  
  render() {
    let items = this.props.items.map((item) => {
      return (
        <li key={item.url}>
          <Link to={item.url}>{item.name}</Link>
        </li>
      );
    });
    
    return (
      <nav className="Menu">
        <ul>{items}</ul>
      </nav>
    );
  }
});

Menu.propTypes = {
  items: PropTypes.array
};

export default Menu;
