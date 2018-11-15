import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import createHistory from 'history/createBrowserHistory';
import Routing from './Routing';
import LeftMenu from './LeftMenu';

import './LeftMenu.css';


const history = createHistory();

class App extends Component {
  render() {
    return (
      <Row>
        <Col md={2} id="menu-container">
          <LeftMenu history={history} />
        </Col>
        <Col  md={10}>
          <Routing history={history} />
        </Col>
      </Row>
    );
  }
}

export default App;
