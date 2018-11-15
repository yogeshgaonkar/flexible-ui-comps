import React, { Component } from 'react';
import { browserHistory, Route, Switch, Router} from 'react-router-dom'
import DisplayButtons from './DisplayButtons';
import DisplayLayouts from './DisplayLayouts';



class Routing extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Switch>
          <Route exact path="/"  component={DisplayLayouts} />
          <Route path='/buttons' component={DisplayButtons}  />
          <Route path='/layouts' component={DisplayLayouts}  />
        </Switch>
      </Router>
    );
  }
}

export default Routing;
