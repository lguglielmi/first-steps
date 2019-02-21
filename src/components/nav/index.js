import React, { Component } from 'react';
import { Button, Popup } from 'semantic-ui-react'

import './styles.css';

class Nav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      time: new Date().toLocaleString()
    };
  }
  render() {
    return (
      <div>
      </div>
    );
  }
}

export default Nav;
