import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/signup'>SignUp</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav;
