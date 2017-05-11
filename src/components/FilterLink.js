import React from 'react';
import { NavLink } from 'react-router-dom';

const isActive = (match, location) => {
  window.console.log('Match is: ');
  window.console.log(match);
  window.console.log('Location is: ');
  window.console.log(location);
  window.console.log("------------");
  return match;
};

const FilterLink = ({ filter, children }) => (
  <NavLink
    to={filter === 'all' ? '' : filter}
    activeStyle={{
      textDecoration: 'none',
      color: 'black',
    }}
  >
    {children}
  </NavLink>
);

export default FilterLink;
