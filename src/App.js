import React, { Component } from 'react';
import Nav from './components/nav'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Modal trigger={<Button>Show Modal</Button>}>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>We've found the following gravatar image associated with your e-mail address.</p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
      </div>
    );
  }
}

export default App;
