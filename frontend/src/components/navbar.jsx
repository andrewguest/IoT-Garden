import React, { Component } from 'react';

// Bulma import
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from 'react-bulma-components';


class Navbar extends Component {

  MyButtonClick() {
    alert('You clicked my button!');
  }

  render() {
    return (
      <div>
        <h3>Hello from my custom component!</h3>
        <Button color="primary" onClick={this.MyButtonClick}>My Bulma button</Button>
      </div>
    );
  }
}

export default Navbar;
